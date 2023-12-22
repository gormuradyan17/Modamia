import { useEffect, useState } from "react";

import "./style.scss";

const CounterUI = ({
    min = null,
    max = null,
    selected = null,
    onCountChange = () => { },
}: any) => {
    const [count, setCount] = useState<number>(min);

    useEffect(() => {
        onCountChange(count);
    }, [count]);

    useEffect(() => {
        if (selected !== null) {
            setCount(selected);
        }
    }, [selected]);

    useEffect(() => {
        if (max && max < count) setCount(max || 1);
    }, [max]);

    const increment = () => {
        if (max && count + 1 > max) return;

        setCount(count + 1);
    };

    const decrement = () => {
        if (count === 1) return;
        setCount(count - 1);
    };

    return (
        <div className='counterUI'>
            <div className="counterUI__body">
                <button
                    type="button"
                    onClick={decrement}
                    className="counterUI__button counterUI__minus"
                ></button>
                <div className="counterUI__number">
                    <span>{count}</span>
                </div>
                <button
                    type="button"
                    onClick={increment}
                    className="counterUI__button counterUI__plus"
                ></button>
            </div>
        </div>
    );
};

export default CounterUI;