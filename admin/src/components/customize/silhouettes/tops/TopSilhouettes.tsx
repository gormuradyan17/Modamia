import TopSilhouettesList from './TopSilhouettesList';
import MainHead from 'layout/MainHead/MainHead';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import MainBody from 'layout/MainBody/MainBody';
import PopupUI from 'shared/ui/PopupUI/PopupUI';
import NewSilhouette from '../NewSilhouette';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAvSilhouettes } from 'services/silhouetteService';
import { resetSilhouetteState } from 'redux/reducers/silhouetteReducer';
import { getAvMannequins } from 'services/mannequinService';

const TopSilhouettes = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const dispatch = useDispatch()
    
    const closePopup = () => {
        dispatch(resetSilhouetteState())
        setIsVisible(false)
    }

    useEffect(() => {
        getAvSilhouettes(dispatch)
        getAvMannequins(dispatch)
    }, [])

    return (
        <div>
            <MainHead text="Top Silhouettes" />
            <ButtonUI classN="add-button" onClick={() => setIsVisible(true)} type="button">New Top Silhouette</ButtonUI>
            <MainBody>
                <TopSilhouettesList />
                {isVisible && <PopupUI callback={closePopup}>
                    <NewSilhouette
                        selectedType='Top'
                        closePopup={closePopup}
                    />
                </PopupUI>}
            </MainBody>
        </div>
    );
};

export default TopSilhouettes;