import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import './style.scss'
import NewPrint from "./NewPrint";
import { getAvPrints, getAvPrintsPalettes, getAvPrintsVariants } from "services/printService";
import { availablePrints, resetPrintState } from "redux/reducers/printReducer";
import PrintsList from "./PrintsList";
import { getUserData } from "redux/reducers/userReducer";

const PrintContent = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const prints = useSelector(availablePrints)
    const dispatch = useDispatch()
    const userData = useSelector(getUserData)

    const closePopup = () => {
        setIsVisible(false)
        dispatch(resetPrintState())
    }

    useEffect(() => {
        if (userData && userData?.id) {
            getAvPrints(dispatch, '', userData?.id)
            getAvPrintsVariants(dispatch, userData?.id)
            getAvPrintsPalettes(dispatch, userData?.id)
        }
    }, [userData])

    return (
        <div>
            <MainHead text="My Prints" />
            <ButtonUI classN="add-button" onClick={() => setIsVisible(true)} type="button">New Print</ButtonUI>
            <MainBody>
                <div className="prints-pallette-list">
                    {prints?.length ? <HeadingUI text="Print List" size="22px" /> : null}
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

export default PrintContent;
