import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { useEffect, useState } from "react";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import { useDispatch, useSelector } from "react-redux";
import { availableColors, colorDetails, resetColorState, setColorData } from "redux/reducers/colorReducer";
import { addColor } from "shared/api/dataApi";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import NewColor from "./NewColor";
import { getAvColors, getAvColorsPalettes, getAvColorsVariants } from "services/colorService";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import ColorsList from "./ColorsList";
import { colorFormOptions } from "utils/validators/validatorOptions";
import { formValidator } from "utils/validators/validator";
import { ArrayType, ObjectType, sortItemsByUserId } from "shared/helpers/helpers";
import { getUserData } from "redux/reducers/userReducer";

const ColorContent = () => {

    const dispatch = useDispatch()
    const colors = useSelector(availableColors)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const cDetails = useSelector(colorDetails)
    const [errors, setErrors] = useState<ObjectType>({})
    const userData = useSelector(getUserData)

    useEffect(() => {
        getAvColors(dispatch, '')
        getAvColorsVariants(dispatch)
        getAvColorsPalettes(dispatch)
    }, [])

    const addNewColor = async (e: HTMLFormElement) => {
        e.preventDefault()
        const errors = formValidator(cDetails, colorFormOptions);
        if (errors) { return setErrors(errors) };
        if (Object.keys(errors).length) { setErrors({}) };
        await addColor(cDetails).then(res => {
            dispatch(setColorData([
                ...colors,
                res
            ]))
        })
        closePopup()
    }

    const closePopup = () => {
        setIsVisible(false)
        dispatch(resetColorState())
        setErrors({})
    }

    return (
        <div className="colors-pallette">
            <MainHead text="My Colors" />
            <ButtonUI classN="add-button" onClick={() => setIsVisible(true)} type="button">New Color</ButtonUI>
            <MainBody>
                <div className="colors-pallette-list">
                    {colors?.length ? <HeadingUI text="Colors List" size="22px" /> : null}
                    {colors?.length ? <ColorsList colors={sortItemsByUserId(colors)} /> : null}
                </div>
                {isVisible && <PopupUI callback={closePopup}>
                    <NewColor
                        callback={addNewColor}
                        closePopup={closePopup}
                        errors={errors}
                    />
                </PopupUI>}
            </MainBody>
        </div>
    );
};

export default ColorContent;