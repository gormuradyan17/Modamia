import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorsVariants, setColorsVariantsData } from "redux/reducers/colorReducer";
import { getAvColorsVariants } from "services/colorService";
import { addColorVariant } from "shared/api/dataApi";
import { ObjectType } from "shared/helpers/helpers";
import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import InputUI from "shared/ui/InputUI/InputUI";
import { formValidator } from "utils/validators/validator";
import { variantFormOptions } from "utils/validators/validatorOptions";

interface Props {
    closePopup: CallbackSkeletonType,
}

const NewPalette = ({
    closePopup,
}: Props) => {

    const [data, setData] = useState<ObjectType>({
        name: ''
    })
    const [errors, setErrors] = useState<ObjectType>({})
    const dispatch = useDispatch()
    const colorVariants = useSelector(colorsVariants)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        setData({ ...data, [name]: value })
    }

    const addNewPalette = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errors = formValidator(data, variantFormOptions);
        if (errors) {return setErrors(errors)};
        if (Object.keys(errors).length) {setErrors({})};
        await addColorVariant(data).then(res => {
            dispatch(setColorsVariantsData([
                ...colorVariants,
                res
            ]))
        })
        closePopup()
    }

    return (
        <form onSubmit={addNewPalette} className="new-palette">
            <HeadingUI text="Add new palette" align="center" color="#aa8a75" />
            <div className="new-palette-inputs">
                <InputUI
                    placeholder="Name"
                    value={data?.name}
                    label="Name*"
                    name="name"
                    error={errors?.name?.message || ''}
                    callback={handleInputChange}
                />
            </div>
            <div className="new-palette-actions">
                <ButtonUI onClick={() => closePopup()} version="gray">Close</ButtonUI>
                <ButtonUI type="submit">Add</ButtonUI>
            </div>
        </form>
    );
};

export default NewPalette;