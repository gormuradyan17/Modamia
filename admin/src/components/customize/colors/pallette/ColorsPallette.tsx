import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorsPalettes } from "redux/reducers/colorReducer";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PalettesList from "./PalettesList";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import NewPalette from "./NewPalette";
import './style.scss'
import { getAvColors, getAvColorsPalettes, getAvColorsVariants } from "services/colorService";

const ColorsPallette = () => {

    const palettes = useSelector(colorsPalettes)
    const dispatch = useDispatch()
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const closePopup = () => {
        setIsVisible(false)
    }

    useEffect(() => {
        getAvColorsPalettes(dispatch)
        getAvColorsVariants(dispatch)
        getAvColors(dispatch)
    }, [])

    return (
        <div className='color-palettes'>
            <MainHead text="Customize Palettes" />
            <ButtonUI classN="add-button" onClick={() => setIsVisible(true)} type="button">New Palette</ButtonUI>
            <MainBody>
                <div className="colors-palettes-list">
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

export default ColorsPallette;