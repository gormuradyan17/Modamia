import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { availableSizes, resetSizeState, sizeDetails } from "redux/reducers/sizeReducer";
import { getAvSizes } from "services/sizeService";
import { addSize } from "shared/api/dataApi";
import { ObjectType } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import { formValidator } from "utils/validators/validator";
import { sizeFormOptions } from "utils/validators/validatorOptions";
import NewSize from "./NewSize";
import SizesList from "./SizesList";
import './style.scss'

const CustomizeSizes = () => {

    const dispatch = useDispatch()
    const sizes = useSelector(availableSizes)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const sDetails = useSelector(sizeDetails)
    const [errors, setErrors] = useState<ObjectType>({})

    useEffect(() => {
        getAvSizes(dispatch)
    }, [])

    const addNewSize = async (e: HTMLFormElement) => {
        e.preventDefault()
        const errors = formValidator(sDetails, sizeFormOptions);
        if (errors) { return setErrors(errors) };
        if (Object.keys(errors).length) { setErrors({}) };
        await addSize(sDetails)
        await getAvSizes(dispatch)
        closePopup()
    }

    const closePopup = () => {
        setIsVisible(false)
        dispatch(resetSizeState())
        setErrors({})
    }

    return (
        <div className="customize-size">
            <MainHead text="Customize Sizes" />
            <ButtonUI classN="add-button" onClick={() => setIsVisible(true)} type="button">New Size</ButtonUI>
            <MainBody>
                <div className="sizes-default-list">
                    <HeadingUI text="Sizes List" size="22px" />
                    {sizes?.length ? <SizesList sizes={sizes} /> : null}
                </div>
                {isVisible && <PopupUI callback={closePopup}>
                    <NewSize
                        callback={addNewSize}
                        closePopup={closePopup}
                        errors={errors}
                    />
                </PopupUI>}
            </MainBody>
        </div>
    );
};

export default CustomizeSizes;