import { ChangeEvent } from "react";
import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import InputUI from "shared/ui/InputUI/InputUI";
import './style.scss'
import { ObjectType } from "shared/helpers/helpers";

interface Props {
    callback: CallbackSkeletonType,
    closePopup: CallbackSkeletonType,
    color: ObjectType,
    setColor: CallbackSkeletonType,
    errors: ObjectType
}

const EditColor = ({
    callback,
    closePopup,
    color,
    setColor,
    errors
}: Props) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        setColor({...color, [name]: value})
    }

    return (
        <div className="new-color">
            <HeadingUI text="Add new color" align="center" color="#aa8a75" />
            <div className="new-color-inputs">
                <InputUI
                    placeholder="Name"
                    value={color?.name}
                    label="Name*"
                    name="name"
                    error={errors?.name?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Hex Code"
                    value={color?.hexcode}
                    label="Hex Code*"
                    name="hexcode"
                    error={errors?.hexcode?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Pantone Code"
                    value={color?.pantonecode}
                    label="Pantone Code"
                    name="pantonecode"
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Tags"
                    value={color?.tags}
                    label="Tags"
                    name="tags"
                    callback={handleInputChange}
                />
            </div>
            <div className="new-color-actions">
                <ButtonUI onClick={() => closePopup()} version="gray">Discard</ButtonUI>
                <ButtonUI onClick={() => callback()}>Save</ButtonUI>
            </div>
        </div>
    );
};

export default EditColor;