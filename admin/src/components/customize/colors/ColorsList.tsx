import { CSSProperties, useEffect, useState } from "react";
import { ArrayType, ObjectType } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import EditColor from "./EditColor";
import { updateColor } from "shared/api/dataApi";
import { getAvColors } from "services/colorService";
import { useDispatch } from "react-redux";
import { formValidator } from "utils/validators/validator";
import { colorFormOptions } from "utils/validators/validatorOptions";

interface Props {
    colors: ArrayType
}

interface colorFillInterface extends CSSProperties {
    '--colorFill': string,
}

const ColorsList = ({
    colors
}: Props) => {

    const dispatch = useDispatch()

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [editableColor, setEditableColor] = useState<ObjectType>({})
    const [colorInfo, setColorInfo] = useState<ObjectType>({})
    const [errors, setErrors] = useState<ObjectType>({})
    
    const editColor = (color: ObjectType) => {
        if (color) {
            setEditableColor(color)
            setColorInfo(color)
            setIsVisible(true)   
        }
    }

    const closePopup = () => {
        setIsVisible(false)
        setEditableColor({})
        setColorInfo({})
        setErrors({})
    }

    const saveColor = async () => {
        const activeColor = colors?.find(color => color._id === editableColor._id) || undefined
        const errors = formValidator(editableColor, colorFormOptions);
        if (errors) {return setErrors(errors)};
        if (Object.keys(errors).length) {setErrors({})};
        if (activeColor && JSON.stringify(editableColor) !== JSON.stringify(activeColor) ) {
            await updateColor(editableColor)
            await getAvColors(dispatch)
        } 
        closePopup()
    }

    return (
        <div className="colors-list">
            {colors.map((color: ObjectType) => {
                const style: colorFillInterface = {
                    '--colorFill': color.hexcode
                }
                return <div className="colors-list-color" key={color._id}>
                    <HeadingUI classN="color-text _ellipsis" text={color.name} size="16px" />
                    <span className="color-span" style={style}></span>
                    <ButtonUI classN="color-button" onClick={() => editColor(color)}>Edit</ButtonUI>
                </div>
            })}
            {isVisible && <PopupUI callback={closePopup}>
                <EditColor
                    callback={saveColor}
                    closePopup={closePopup}
                    color={editableColor}
                    defaultColor={colorInfo}
                    errors={errors}
                    setColor={setEditableColor}
                />
            </PopupUI>}
        </div>
    );
};

export default ColorsList;