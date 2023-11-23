import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PalettesList from "./PalettesList";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import NewPalette from "./NewPalette";
import './style.scss'
import { printsPalettes } from "redux/reducers/printReducer";
import { getAvPrints, getAvPrintsPalettes, getAvPrintsVariants } from "services/printService";

const PrintsPalette = () => {

    const palettes = useSelector(printsPalettes)
    const dispatch = useDispatch()
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const closePopup = () => {
        setIsVisible(false)
    }

    useEffect(() => {
        getAvPrintsPalettes(dispatch)
        getAvPrintsVariants(dispatch)
        getAvPrints(dispatch)
    }, [])

    return (
        <div className='print-palettes'>
            <MainHead text="Customize Palettes" />
            <ButtonUI classN="add-button" onClick={() => setIsVisible(true)} type="button">New Palette</ButtonUI>
            <MainBody>
                <div className="prints-palettes-list">
                    <HeadingUI text="Palettes List" size="22px" />
                    {palettes?.length ? <PalettesList palettes={palettes} /> : null}
                </div>
                {isVisible && <PopupUI callback={closePopup}>
                    <NewPalette
                        closePopup={closePopup}
                    />
                </PopupUI>}
            </MainBody>
        </div>
    );
};

export default PrintsPalette;