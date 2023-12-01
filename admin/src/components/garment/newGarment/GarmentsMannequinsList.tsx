import { useSelector } from 'react-redux';
import { availableMannequins } from 'redux/reducers/mannequinReducer';
import { BASE_UPLOADS_MANNEQUINS_FRONTS_URL } from 'shared/constants/genericApiRoutes';
import { ObjectType } from 'shared/helpers/helpers';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import InputUI from 'shared/ui/InputUI/InputUI';

interface Props {
    details: ObjectType,
    callback: any
}

const GarmentsMannequinsList = ({
    details,
    callback
}: Props) => {

    const mannequins = useSelector(availableMannequins)

    return (
        <div className="mannequin-list customXScrollbar">
            {mannequins?.map((mannequin: ObjectType) => {
                const disabled = details?.mannequin_id && details?.mannequin_id !== mannequin?._id;
                return <div className={`mannequins-list-mannequin${disabled ? ' _disabled' : ''}`} key={mannequin._id}>
                    <HeadingUI classN="mannequin-list-text _ellipsis" text={mannequin.name} size="16px" />
                    <div className="mannequin-list-image">
                        <img
                            src={`${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequin.fronturl}`}
                            className="mannequin-list-img"
                            alt={mannequin.name}
                        />
                    </div>
                    <InputUI
                        classN='garment-input'
                        type='checkbox'
                        callback={(event) => callback(event, mannequin?._id)}
                        defaultChecked={details?.mannequin_id === mannequin?._id}
                        name=''
                        disabled={disabled}
                    />
                </div>
            })}
        </div>
    );
};

export default GarmentsMannequinsList;