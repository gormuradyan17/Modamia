import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAvSilhouettes } from "services/silhouetteService";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import NewSilhouette from "./NewSilhouette";
import SilhouettesList from "./SilhouettesList";
import './style.scss'

const CustomizeSilhouettes = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const dispatch = useDispatch()
    const closePopup = () => {
        setIsVisible(false)
    }

    useEffect(() => {
        getAvSilhouettes(dispatch)
    }, [])

    return (
        <div>
            <MainHead text="Customize Silhouettes" />
            <ButtonUI classN="add-button" onClick={() => setIsVisible(true)} type="button">New Silhouette</ButtonUI>
            <MainBody>
               <SilhouettesList />
                {isVisible && <PopupUI callback={closePopup}>
                    <NewSilhouette
                        closePopup={closePopup}
                    />
                </PopupUI>}
            </MainBody>
        </div>
    );
};

export default CustomizeSilhouettes;