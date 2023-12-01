import MainHead from 'layout/MainHead/MainHead';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import MainBody from 'layout/MainBody/MainBody';
import PopupUI from 'shared/ui/PopupUI/PopupUI';
import NewSilhouette from '../NewSilhouette';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAvSilhouettes } from 'services/silhouetteService';
import SleeveSilhouettesList from './SleeveSilhouettesList';
import { resetSilhouetteState } from 'redux/reducers/silhouetteReducer';
import { getAvMannequins } from 'services/mannequinService';

const SleeveSilhouettes = () => {
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
            <MainHead text="Sleeve Silhouettes" />
            <ButtonUI classN="add-button" onClick={() => setIsVisible(true)} type="button">New Sleeve Silhouette</ButtonUI>
            <MainBody>
                <SleeveSilhouettesList />
                {isVisible && <PopupUI callback={closePopup}>
                    <NewSilhouette
                        selectedType='Sleeve'
                        closePopup={closePopup}
                    />
                </PopupUI>}
            </MainBody>
        </div>
    );
};

export default SleeveSilhouettes;