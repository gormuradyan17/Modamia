import MainHead from 'layout/MainHead/MainHead';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import MainBody from 'layout/MainBody/MainBody';
import PopupUI from 'shared/ui/PopupUI/PopupUI';
import NewSilhouette from '../NewSilhouette';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAvSilhouettes } from 'services/silhouetteService';
import BottomSilhouettesList from './BottomSilhouettesList';
import { resetSilhouetteState } from 'redux/reducers/silhouetteReducer';
import { getAvMannequins } from 'services/mannequinService';

const BottomSilhouettes = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const dispatch = useDispatch()
    
    const closePopup = () => {
        setIsVisible(false)
        dispatch(resetSilhouetteState())
    }

    useEffect(() => {
        getAvSilhouettes(dispatch)
        getAvMannequins(dispatch)
    }, [])

    return (
        <div>
            <MainHead text="Bottom Silhouettes" />
            <ButtonUI classN="add-button" onClick={() => setIsVisible(true)} type="button">New Bottom Silhouette</ButtonUI>
            <MainBody>
                <BottomSilhouettesList />
                {isVisible && <PopupUI callback={closePopup}>
                    <NewSilhouette
                        selectedType='Bottom'
                        closePopup={closePopup}
                    />
                </PopupUI>}
            </MainBody>
        </div>
    );
};

export default BottomSilhouettes;