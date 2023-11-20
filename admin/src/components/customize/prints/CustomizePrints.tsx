import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import './style.scss'
import NewPrint from "./NewPrint";
import { getAvPrints, getAvPrintsVariants } from "services/printService";
import { availablePrints, resetPrintState } from "redux/reducers/printReducer";
import PrintsList from "./PrintsList";

const CustomizePrints = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const prints = useSelector(availablePrints)
    const dispatch = useDispatch()
    const closePopup = () => {
        setIsVisible(false)
        dispatch(resetPrintState())
    }

    useEffect(() => {
        getAvPrints(dispatch)
        getAvPrintsVariants(dispatch)
    }, [])

    return (
        <div>
            <MainHead text="Customize Prints" />
            <ButtonUI classN="add-button" onClick={() => setIsVisible(true)} type="button">New Print</ButtonUI>
            <MainBody>
                <div className="prints-pallette-list">
                    <HeadingUI text="Print List" size="22px" />
                    {prints?.length ? <PrintsList prints={prints} /> : null}
                </div>
                {isVisible && <PopupUI callback={closePopup}>
                    <NewPrint 
                        closePopup={closePopup}
                    />
                </PopupUI>}
            </MainBody>
        </div>
    );
};

export default CustomizePrints;