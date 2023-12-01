import Container from 'layout/Container/Container';
import './style.scss'
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import { ObjectType, appColor } from 'shared/helpers/helpers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_UPLOADS_MANNEQUINS_FRONTS_URL } from 'shared/constants/genericApiRoutes';
import { useNavigate } from 'react-router-dom';
import { availableGarments, setGarmentFullState } from 'redux/reducers/garmentReducer';
import { getAvGarments } from 'services/garmentService';

const CustomizationMannequins = () => {

    const dispatch = useDispatch()

    const garments = useSelector(availableGarments)

    const navigate = useNavigate()

    useEffect(() => {
        getAvGarments(dispatch)
    },[])

    const handleGarmentClick = (garment: ObjectType) => {
        if (garment?._id) {
            dispatch(setGarmentFullState(garment))
            navigate(`${garment?._id}`)
        }
    }

    return (
        <div className="customization-mannequins">
            <Container>
                <HeadingUI size='22px' align='center' color={appColor} text='Select garment to continue customization' />
                {!!garments?.length && <div className='customization-mannequins-list'>
                    {garments.map((garment: ObjectType) => {
                        const { mannequin = {}, garment: activeGarment } = garment;
                        return <div key={mannequin?._id} className='customization-mannequin' onClick={() => handleGarmentClick(activeGarment)}>
                            <img src={`${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequin?.fronturl}`} alt={mannequin?.name} />
                        </div>
                    })}
                </div>}
            </Container>
        </div>
    );
};

export default CustomizationMannequins;