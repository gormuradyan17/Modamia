import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import './style.scss'
import useClickOutSide from 'utils/hooks/useClickOutside';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';

interface DropdownPropsi {
    text?: string | number;
    onChange: (data?: any) => void
    options: any;
    classN?: string;
    error?: string,
    defaultValue?: string,
}

const GarmentDropdown = ({
    text,
    options,
    onChange,
    classN = '',
    error,
    defaultValue,
}: DropdownPropsi) => {

    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState(text);
    const ref = useRef<HTMLDivElement | null>(null)
    
    function handleClick(e: React.MouseEvent, index: number) {
        const val = (e.target as HTMLElement).textContent;

        if (val) {
            setSelected(val);
        }

        onChange(options[index]);
        setIsActive(!isActive);
    }

    useClickOutSide([ref], () => setIsActive(false), isActive)

    const toggleDropdown = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            {error && <span className="error-message">{error}</span>}
            <div className={`GarmentDropdown ${classN}`} ref={ref}>
                <ButtonUI 
                    classN='GarmentDropdown__button'
                    onClick={() => toggleDropdown()}
                ><FontAwesomeIcon icon={faLayerGroup} /></ButtonUI>
                <div
                    className={`GarmentDropdown__content${isActive ? ' _active' : ''}`}
                >
                    {Boolean(options?.length) &&
                        options?.map(({ id, text, value }: any, index: number) => (
                            <div
                                key={id}
                                onClick={(event) => handleClick(event, index)}
                                className={`GarmentDropdown__option${defaultValue === value ? ' _selected' : ''}`}
                            >
                                {text || value}
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default GarmentDropdown;