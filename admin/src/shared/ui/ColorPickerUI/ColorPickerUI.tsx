import { ChangeEvent, useRef, useState } from 'react'
import { GetColorName } from 'hex-color-to-color-name';
import './style.scss'

import { useDispatch, useSelector } from 'react-redux';
import { colorDetails, setColorFullState } from 'redux/reducers/colorReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons';
import useClickOutSide from 'utils/hooks/useClickOutside';
import { CallbackSkeletonType } from 'shared/objectModels/GenericModel';

interface Props {
    classN?: string,
    callback: CallbackSkeletonType
}

const ColorPickerUI = ({
    classN,
    callback
}: Props) => {

    const cDetails = useSelector(colorDetails)
    const dispatch = useDispatch()
    const [isVisible, setIsVisible] = useState<boolean>(true)
    const ref = useRef<HTMLDivElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const getColorName = (hexCode: string) => {
        return GetColorName(hexCode);
    };

    const getPantoneCode = (hexCode: string) => {
        // console.log('pantoneColor => ', pantoneColor)
        // const indexInPantonesList = pantones.findIndex(x => x.hex == hexCode)
        // const nearestPantoneObject =  pantones[indexInPantonesList]
        // console.log(nearestPantoneObject)
        // return simpleColorConverter({
        //     hex: hexCode,
        //     to: 'pantone',
        // })
    };

    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event;
        const name = getColorName(value);
        // const pantoneCodeResult = getPantoneCode(value);
        const obj = {
            name,
            hexcode: value 
        }
        callback(obj)
    };

    const handleShowColorPicker = () => {
        setIsVisible(!isVisible)
        inputRef?.current?.click()
    }

    useClickOutSide(ref, () => setIsVisible(false), isVisible)

    return (
        <div className={`new-color-picker ${classN}`} ref={ref}>
            <button
                type='button'
                className='new-color-button'
                onClick={handleShowColorPicker}
            ><FontAwesomeIcon icon={faEyeDropper} />
            </button>
            <input
                type="color"
                value={cDetails?.hexcode}
                onChange={handleColorChange}
                className='new-color-input'
                ref={inputRef}
            />
        </div>
    );
};

export default ColorPickerUI;