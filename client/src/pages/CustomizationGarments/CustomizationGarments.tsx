import Container from 'layout/Container/Container';
import './style.scss'
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import { ObjectType, appColor } from 'shared/helpers/helpers';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { availableGarments, setGarmentFullState } from 'redux/reducers/garmentReducer';
import { getAvGarments, getAvSearchedGarments } from 'services/garmentService';
import InputUI from 'shared/ui/InputUI/InputUI';
import useDebounce from 'utils/hooks/useDebounce';
import GarmentsMannequin from './GarmentsMannequin';
import { BASE_UPLOADS_MANNEQUINS_FRONTS_URL } from 'shared/constants/genericApiRoutes';
import CustomizationGarment from './CustomizationGarment';

interface Props {
    userId?: string,
    title?: string,
}

const CustomizationGarments = ({
    userId = '',
    title = ''
}: Props) => {

    const dispatch = useDispatch()
    const mounted = useRef<boolean>(false)
    const garments = useSelector(availableGarments)

    const navigate = useNavigate()

    useEffect(() => {
        getAvGarments(dispatch, userId)
    }, [userId])

    const handleGarmentClick = (garment: ObjectType, id: string) => {
        if (id && garment?._id) {
            dispatch(setGarmentFullState(garment))
            navigate(`/customization/${id}`,{ state: { fromCart: true } })
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
                {title && <HeadingUI size='28px' align='center' color={appColor} text={title} /> }
                <div className="customization-body customization-body-mannequins">
                    <HeadingUI size='22px' align='center' {...(!title && {color: appColor})} text='Select garment to continue customization' />
                    <InputUI
                        classN='customization-search'
                        name="search"
                        callback={handleInputChange}
                        value={criteria}
                        placeholder='Search Garment'
                    />
                    {!!garments?.length && <div className='customization-mannequins-list'>
                        {garments.map((garment: ObjectType, idx: number) => {
                            const { mannequin = {}, garment: activeGarment, _id = '', details } = garment;
                            return <div key={idx} className='customization-elem' onClick={() => handleGarmentClick(activeGarment, _id || activeGarment?._id)}>
                                <HeadingUI text={activeGarment?.name} size='16px' color={appColor} align='center' />
                                {details ? <GarmentsMannequin data={details}/> : <CustomizationGarment 
                                    url={`${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequin?.fronturl}`}
                                    name={mannequin?.name}
                                />
                             } 
                            </div>
                        })}
                    </div>}
                </div>
            </Container>
        </div>
    );
};

export default CustomizationGarments;