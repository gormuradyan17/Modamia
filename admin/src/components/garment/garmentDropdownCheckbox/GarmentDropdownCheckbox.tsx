import { useRef } from 'react';
import './style.scss'
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';

interface DropdownPropsi {
    onChange: any;
    options: any;
    label?: string;
    error?: string,
    details: any,
    type: string
}

const GarmentDropdownCheckbox = ({
    options,
    onChange,
    label = '',
    error,
    details,
    type
}: DropdownPropsi) => {

    const ref = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)

    return (
        <div className='GarmentDropdownCheckbox' ref={ref}>
            {error && <span className="error-message">{error}</span>}
            {label && <HeadingUI size='18px' color='#aa8a75' text={label} />}
            <div
                className='GarmentDropdownCheckbox__content customYScrollbar'
                ref={contentRef}
            >
                {Boolean(options?.length) &&
                    options?.map((option: any, index: number) => {
                        const { id = '', name = '', colors = null } = option || {};
                        const selected = details?.palettes?.[type]?.some((item: string) => item === id);
                        return <label
                            key={id}
                            htmlFor={id}
                            className='GarmentDropdownCheckbox__option'
                        >
                            {name}
                            <input
                                className='GarmentDropdownCheckbox__checkbox'
                                type='checkbox'
                                name={id}
                                id={id}
                                defaultChecked={selected}
                                onChange={(e) => onChange(e, option)}
                            />
                        </label>
                    })}
            </div>
        </div>
    );
};

export default GarmentDropdownCheckbox;