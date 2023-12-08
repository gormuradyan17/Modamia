import { ArrayType, ObjectType, appColor, getSilhouetteOrderOptions } from 'shared/helpers/helpers';
import { CallbackSkeletonType } from 'shared/objectModels/GenericModel';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import InputUI from 'shared/ui/InputUI/InputUI';
import GarmentDropdown from '../garmentDropdown/GarmentDropdown';
import { useMemo, useState } from 'react';

interface Props {
    header: string,
    content: ArrayType,
    srcBase: string,
    callback: CallbackSkeletonType,
    callbackDropdown: any,
    type: string,
    details: ObjectType
}

const GarmentsSilhouettesListWrapper = ({
    header,
    content,
    srcBase,
    callback,
    callbackDropdown,
    type,
    details,
}: Props) => {

    const options = getSilhouetteOrderOptions();

    const [draggableVariant, setDraggableVariant] = useState<number>(0)
    const [silhouettesList, setSilhouettesList] = useState<ArrayType>([])

    useMemo(() => {
        setSilhouettesList(content)
    }, [content])

    const onDragStart = (e: any, idx: number) => {
        setDraggableVariant(idx)
    };

    const onDragOver = (e: any) => {
        e.preventDefault();
    };

    const onDrop = async (e: any, idx: number) => {
        e.preventDefault();
        const fromElement = silhouettesList[draggableVariant]
        const toElement = silhouettesList[idx]
        if (fromElement && toElement && idx !== draggableVariant) {
            const copySilhouettes = structuredClone(silhouettesList)
            copySilhouettes[idx] = fromElement;
            copySilhouettes[draggableVariant] = toElement;
            setSilhouettesList(copySilhouettes)
        }
    };

    return (
        <div className='silhouettes-items'>
            <HeadingUI text={header} size="20px" />
            <div className="silhouettes-items-body customXScrollbar">
                {silhouettesList?.length ? silhouettesList.map((silhouette: ObjectType, idx: number) => {
                    const checked = details?.[type]?.find((top: ObjectType) => top.id === silhouette?._id)
                    return <div
                        className="silhouettes-list-silhouette"
                        key={silhouette._id}
                        draggable
                        onDragStart={(e) => onDragStart(e, idx)}
                        onDragOver={onDragOver}
                        onDrop={(e) => onDrop(e, idx)}
                    >
                        <HeadingUI classN="silhouettes-list-text _ellipsis" text={silhouette.name} color={appColor} size="16px" />
                        <div className="silhouettes-list-image">
                            <img src={`${srcBase}${silhouette.silhouetteurl}`} className="silhouettes-list-img" alt={silhouette.name} />
                        </div>
                        <div className="silhouettes-list-actions">
                            <InputUI
                                classN='garment-input'
                                type='checkbox'
                                callback={() => callback(silhouette?._id)}
                                defaultChecked={checked}
                                name=''
                            />
                            {checked && <GarmentDropdown
                                options={options}
                                defaultValue={checked?.order}
                                onChange={(data) => callbackDropdown(data, silhouette?._id, type)}
                            />}
                        </div>
                    </div>
                }) : <HeadingUI text='Nothing found' color={appColor} size='16px' />}
            </div>
        </div>
    );
};

export default GarmentsSilhouettesListWrapper;