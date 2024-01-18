import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import './style.scss'
import { useEffect } from "react";

interface Props {
    value?: string,
    placeholder?: string,
    type?: string,
    callback: CallbackSkeletonType,
    label?: string,
    name: string,
    error?: string,
    autoComplete?: string,
    classN?: string,
    disabled?: boolean,
    defaultChecked?: boolean,
}

const InputUI = ({
    value = '',
    placeholder = '',
    type = 'text',
    callback,
    label = '',
    name,
    error,
    autoComplete = '',
    classN = '',
    disabled = false,
    defaultChecked = false
}: Props) => {
    // const refInput = useRef<HTMLInputElement | null>(null)
    // const refSpan = useRef<HTMLInputElement | null>(null)

    // useEffect(() => {
    //     if (error && refInput?.current && refSpan?.current) {
    //         refInput.current.classList.add('_errorShake')
    //         refSpan.current.classList.add('_errorShake')
    //         setTimeout(() => {
    //             refInput?.current?.classList.remove('_errorShake')
    //             refSpan?.current?.classList.remove('_errorShake')
    //         }, 500);
    //     }

    //     return () => {
    //         refInput?.current?.classList.remove('_errorShake')
    //         refSpan?.current?.classList.remove('_errorShake')
    //     }
    // },[error])

    return (
        <div className={`InputUI ${classN}`}>
            {label && <label 
                className="InputUI__label"
                htmlFor={`InputUI-${name}`}>
                {label}
            </label>}
            {error && <span className="error-message">{error}</span>}
            <input 
                className={`InputUI__input${error ? ' _error' : ''}${disabled ? ' _disabled' : ''}`}
                id={`InputUI-${name}`}
                name={name}
                type={type}
                onChange={(event) => !disabled && callback(event)}
                {...(type === 'checkbox' ? {checked: defaultChecked} : {value})}
                autoComplete={autoComplete}
                {...(placeholder && {placeholder})}
            />
        </div>
    );
};

export default InputUI;