import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import './style.scss'
import useClickOutSide from 'utils/hooks/useClickOutside';
import HeadingUI from '../HeadingUI/HeadingUI';
import ReactPortal from 'layout/ReactPortal/ReactPortal';

interface DropdownPropsi {
    text?: string | number;
    onChange: any;
    options: any;
    classN?: string;
    label?: string;
    error?: string,
    defaultValue?: string,
    disabled?: boolean,
}

const DropdownCheckboxUI = ({
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

    useClickOutSide([ref, contentRef], () => setIsActive(false), isActive)

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
    }, [contentRef, ref])

    return (
        <>
            {label && <HeadingUI size='18px' color='#aa8a75' text={label} />}
            {error && <span className="error-message">{error}</span>}
            <div className={`DropdownCheckboxUI ${classN} ${disabled ? '_disabled' : ''}`} ref={ref}>
                <div
                    onClick={(e) => disabled ? e.preventDefault() : toggleDropdown()}
                    className={`DropdownCheckboxUI__button${isActive ? ' _active' : ''}${error ? ' _error' : ''}`}
                >
                    {defaultValue || selected}
                    {isActive ? (
                        <FontAwesomeIcon className='DropdownCheckboxUI__icon' icon={faCaretUp} />
                    ) : (
                        <FontAwesomeIcon className='DropdownCheckboxUI__icon' icon={faCaretDown} />
                    )}
                </div>
            </div>
            {!disabled && <ReactPortal>
                <div
                    className={`DropdownCheckboxUI__content${isActive ? ' _active' : ''}`}
                    ref={contentRef}
                >
                    {Boolean(options?.length) &&
                        options?.map((option: any, index: number) => {
                            const { id = '', text = '', value = '' } = option || {};
                            return <label
                                key={id}
                                htmlFor={id}
                                className='DropdownCheckboxUI__option'
                            >
                                {text || value}
                                <input
                                    className='DropdownCheckboxUI__checkbox'
                                    type='checkbox'
                                    name={id}
                                    id={id}
                                    onChange={(e) => onChange(e, option)}
                                />
                            </label>
                        })}
                </div>
            </ReactPortal>}
        </>
    );
};

export default DropdownCheckboxUI;