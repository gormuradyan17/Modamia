import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import './style.scss'
import useClickOutSide from 'utils/hooks/useClickOutside';
import HeadingUI from '../HeadingUI/HeadingUI';
import ReactPortal from 'layout/ReactPortal/ReactPortal';

interface DropdownPropsi {
    text?: string | number;
    onChange: (data?: any) => void
    options: any;
    classN?: string;
    label?: string;
    error?: string,
    defaultValue?: string,
    disabled?: boolean,
}

const DropdownUI = ({
    text,
    options,
    onChange,
    classN = '',
    label = '',
    error,
    defaultValue,
    disabled = false
}: DropdownPropsi) => {

    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState(text);
    const ref = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)

    function handleClick(e: React.MouseEvent, index: number) {
        const val = (e.target as HTMLElement).textContent;

        if (val) {
            setSelected(val);
        }

        onChange(options[index]);
        setIsActive(!isActive);
    }

    useClickOutSide(ref, () => setIsActive(false), isActive)

    const getContentPositioned = () => {
        if (ref?.current && contentRef?.current) {
            const posY = ref.current.getBoundingClientRect().top + 60
            const posX = ref.current.getBoundingClientRect().left
            const posW = ref.current.offsetWidth - 3
            contentRef.current.style.top = `${posY}px`
            contentRef.current.style.left = `${posX}px`
            contentRef.current.style.width = `${posW}px`
        }
    }

    const toggleDropdown = () => {
        setIsActive(!isActive);
        getContentPositioned()
    }
    
    useEffect(() => {
        getContentPositioned()
    },[contentRef, ref])

    return (
        <>
            {label && <HeadingUI size='18px' color='#aa8a75' text={label}/>}
            {error && <span className="error-message">{error}</span>}
            <div className={`DropdownUI ${classN} ${disabled ? '_disabled' : ''}`} ref={ref}>
                <div
                    onClick={(e) => disabled ? e.preventDefault() : toggleDropdown()}
                    className={`DropdownUI__button${isActive ? ' _active' : ''}${error ? ' _error' : ''}`}
                >
                    {defaultValue || selected}
                    {isActive ? (
                        <FontAwesomeIcon className='DropdownUI__icon' icon={faCaretUp} />
                    ) : (
                        <FontAwesomeIcon className='DropdownUI__icon' icon={faCaretDown} />
                    )}
                </div>
            </div>
            {!disabled && <ReactPortal>
                <div
                    className={`DropdownUI__content${isActive ? ' _active' : ''}`}
                    ref={contentRef}
                >
                    {Boolean(options?.length) &&
                        options?.map(({ id, text, value }: any, index: number) => (
                            <div
                                key={id}
                                onClick={(event) => handleClick(event, index)}
                                className='DropdownUI__option'
                            >
                                {text || value}
                            </div>
                        ))}
                </div>
            </ReactPortal>}
        </>
    );
};

export default DropdownUI;