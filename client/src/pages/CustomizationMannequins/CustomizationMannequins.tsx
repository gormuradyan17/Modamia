import Container from 'layout/Container/Container';
import './style.scss'
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import { ObjectType, appColor } from 'shared/helpers/helpers';
import { useEffect } from 'react';
import { getAvMannequins } from 'services/mannequinService';
import { useDispatch, useSelector } from 'react-redux';
import { availableMannequins, setActiveMannequinDetails } from 'redux/reducers/mannequinReducer';
import { BASE_UPLOADS_MANNEQUINS_FRONTS_URL } from 'shared/constants/genericApiRoutes';
import { useNavigate } from 'react-router-dom';

const CustomizationMannequins = () => {

    const dispatch = useDispatch()

    const mannequins = useSelector(availableMannequins)

    const navigate = useNavigate()

    useEffect(() => {
        getAvMannequins(dispatch)
    },[])

    const handleMannequinClick = (mannequin: ObjectType) => {
        if (mannequin?._id) {
            dispatch(setActiveMannequinDetails(mannequin))
            navigate(`${mannequin?._id}`)
        }
    }

    return (
        <div className="customization-mannequins">
            <Container>
                <HeadingUI size='22px' align='center' color={appColor} text='Select mannequin to continue customization' />
                {!!mannequins?.length && <div className='customization-mannequins-list'>
                    {mannequins.map((mannequin: ObjectType) => {
                        return <div key={mannequin?._id} className='customization-mannequin' onClick={() => handleMannequinClick(mannequin)}>
                            <img src={`${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequin?.fronturl}`} alt={mannequin?.name} />
                        </div>
                    })}
                </div>}
            </Container>
        </div>
    );
};

export default CustomizationMannequins;