import { useSelector } from 'react-redux';
import { garmentDetails } from 'redux/reducers/garmentReducer';
import { ArrayType, ObjectType, appColor } from 'shared/helpers/helpers';
import { CallbackSkeletonType } from 'shared/objectModels/GenericModel';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import InputUI from 'shared/ui/InputUI/InputUI';

interface Props {
    header: string,
    content: ArrayType,
    srcBase: string,
    callback: CallbackSkeletonType,
    type: string,
    details: ObjectType
}

const GarmentsSilhouettesListWrapper = ({
    header,
    content,
    srcBase,
    callback,
    type,
    details
}: Props) => {

    return (
        <div className='silhouettes-items'>
            <HeadingUI text={header} size="20px" />
            <div className="silhouettes-items-body customXScrollbar">
                {content?.length ? content.map((silhouette: ObjectType) => {
                    const checked = details?.[type]?.some((top: ObjectType) => top === silhouette?._id)
                    return <div className="silhouettes-list-silhouette" key={silhouette._id}>
                        <HeadingUI classN="silhouettes-list-text _ellipsis" text={silhouette.name} color={appColor} size="16px" />
                        <div className="silhouettes-list-image">
                            <img src={`${srcBase}${silhouette.silhouetteurl}`} className="silhouettes-list-img" alt={silhouette.name} />
                        </div>
                        <InputUI
                            classN='garment-input'
                            type='checkbox'
                            callback={() => callback(silhouette?._id)}
                            defaultChecked={checked}
                            name=''
                        />
                    </div>
                }) : <HeadingUI text='Nothing found' color={appColor} size='16px' />}
            </div>
        </div>
    );
};

export default GarmentsSilhouettesListWrapper;