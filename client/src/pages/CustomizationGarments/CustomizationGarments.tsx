import Container from 'layout/Container/Container';
import './style.scss'
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import { ObjectType, appColor } from 'shared/helpers/helpers';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_UPLOADS_MANNEQUINS_FRONTS_URL } from 'shared/constants/genericApiRoutes';
import { useNavigate } from 'react-router-dom';
import { availableGarments, setGarmentFullState } from 'redux/reducers/garmentReducer';
import { getAvGarments, getAvSearchedGarments } from 'services/garmentService';
import InputUI from 'shared/ui/InputUI/InputUI';
import useDebounce from 'utils/hooks/useDebounce';

interface Props {
    userId?: string
}

const CustomizationGarments = ({
    userId = ''
}: Props) => {

    const dispatch = useDispatch()
    const mounted = useRef<boolean>(false)
    const garments = useSelector(availableGarments)

    const navigate = useNavigate()

    useEffect(() => {
        getAvGarments(dispatch, userId)
    }, [])

    const handleGarmentClick = (garment: ObjectType) => {
        if (garment?._id) {
            dispatch(setGarmentFullState(garment))
            navigate(`/customization/${garment?._id}`)
        }
    }

    const [criteria, setCriteria] = useState<string>('');
    const debouncedCriteria = useDebounce(criteria, 500);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event
        if (!criteria?.length) return setCriteria(value.trim())
        setCriteria(value)
    }

    const getGarmentsByCriteria = async () => {
        return await getAvSearchedGarments(dispatch, criteria, userId)
    }

    useEffect(() => {
        if (!mounted.current) mounted.current = true;
        else getGarmentsByCriteria();
    }, [debouncedCriteria]);

    return (
        <div className="customization-mannequins">
            <Container>
                <div className="customization-body">
                    <HeadingUI size='22px' align='center' color={appColor} text='Select garment to continue customization' />
                    <InputUI
                        classN='customization-search'
                        name="search"
                        callback={handleInputChange}
                        value={criteria}
                        placeholder='Search Garment'
                    />
                    {!!garments?.length && <div className='customization-mannequins-list'>
                        {garments.map((garment: ObjectType) => {
                            const { mannequin = {}, garment: activeGarment } = garment;
                            return <div key={mannequin?._id} className='customization-elem' onClick={() => handleGarmentClick(activeGarment)}>
                                <HeadingUI text={activeGarment?.name} size='16px' color={appColor} align='center' />
                                <div className="customization-mannequin">
                                    <img src={`${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequin?.fronturl}`} alt={mannequin?.name} />
                                </div>
                            </div>
                        })}
                    </div>}
                </div>
            </Container>
        </div>
    );
};

export default CustomizationGarments;