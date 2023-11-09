import { ChangeEvent } from "react";
import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import InputUI from "shared/ui/InputUI/InputUI";
import './style.scss'
import { colorDetails, setColorState } from "redux/reducers/colorReducer";
import { useDispatch, useSelector } from "react-redux";
import { ObjectType } from "shared/helpers/helpers";

interface Props {
    callback: CallbackSkeletonType,
    closePopup: CallbackSkeletonType,
    errors: ObjectType
}

const NewColor = ({
    callback,
    closePopup,
    errors
}: Props) => {

    const dispatch = useDispatch()
    const cDetails = useSelector(colorDetails)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        dispatch(setColorState({ name, value }))
    }

    return (
        <form onSubmit={callback} className="new-color">
            <HeadingUI text="Add new color" align="center" color="#aa8a75" />
            <div className="new-color-inputs">
                <InputUI
                    placeholder="Name"
                    value={cDetails?.name}
                    label="Name*"
                    name="name"
                    error={errors?.name?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Hex Code"
                    value={cDetails?.hexcode}
                    label="Hex Code*"
                    name="hexcode"
                    error={errors?.hexcode?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Pantone Code"
                    value={cDetails?.pantonecode}
                    label="Pantone Code"
                    name="pantonecode"
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Tags"
                    value={cDetails?.tags}
                    label="Tags"
                    name="tags"
                    callback={handleInputChange}
                />
            </div>
            <div className="new-color-actions">
                <ButtonUI onClick={() => closePopup()} version="gray">Close</ButtonUI>
                <ButtonUI type="submit">Add</ButtonUI>
            </div>
        </form>
    );
};

export default NewColor;