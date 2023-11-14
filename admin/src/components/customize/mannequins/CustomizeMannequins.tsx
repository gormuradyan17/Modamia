import MainHead from 'layout/MainHead/MainHead';
import './style.scss'
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import { useEffect, useState } from 'react';
import MainBody from 'layout/MainBody/MainBody';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import PopupUI from 'shared/ui/PopupUI/PopupUI';
import MannequinsList from './MannequinsList';
import { useDispatch, useSelector } from 'react-redux';
import { ObjectType } from 'shared/helpers/helpers';
import { availableMannequins } from 'redux/reducers/mannequinReducer';
import { getAvMannequins } from 'services/mannequinService';
import NewMannequin from './NewMannequin';

const CustomizeMannequins = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const mannequins = useSelector(availableMannequins)
    const dispatch = useDispatch()
    const [errors, setErrors] = useState<ObjectType>({})

    useEffect(() => {
        getAvMannequins(dispatch)
    }, [])

    const closePopup = () => {
        setIsVisible(false)
        // dispatch(resetColorState())
        setErrors({})
    }

    return (
        <div>
            <MainHead text="Customize Mannequins" />
            <ButtonUI classN="add-button" onClick={() => setIsVisible(true)} type="button">New Mannequin</ButtonUI>
            <MainBody>
                <div className="colors-pallette-list">
                    <HeadingUI text="Mannequins List" size="22px" />
                    {mannequins?.length ? <MannequinsList mannequins={mannequins} /> : null}
                </div>
                {isVisible && <PopupUI callback={closePopup}>
                    <NewMannequin
                        closePopup={closePopup}
                    />
                </PopupUI>}
            </MainBody>
        </div>
    );
};

export default CustomizeMannequins;