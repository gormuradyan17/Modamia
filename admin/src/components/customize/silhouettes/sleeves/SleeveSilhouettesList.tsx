import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { availableSilhouettes, setSilhouetteData } from 'redux/reducers/silhouetteReducer';
import { BASE_UPLOADS_SILHOUETTES_SLEEVES_URL } from 'shared/constants/genericApiRoutes';
import { ArrayType, ObjectType, appColor } from 'shared/helpers/helpers';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import PopupUI from 'shared/ui/PopupUI/PopupUI';
import EditSilhouette from '../EditSilhouette';
import { formValidator } from 'utils/validators/validator';
import { silhouetteFormOptions } from 'utils/validators/validatorOptions';
import { removeSilhouette, updateSilhouette } from 'shared/api/dataApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import RemoveSome from 'components/customize/removeSome/RemoveSome';

const SleeveSilhouettesList = () => {

    const silhouettes = useSelector(availableSilhouettes)

    const [editableSilhouette, setEditableSilhouette] = useState<ObjectType>({})
    const [silhouetteInfo, setSilhouetteInfo] = useState<ObjectType>({})
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [errors, setErrors] = useState<ObjectType>({})
    const dispatch = useDispatch()

    const [isVisibleRemove, setIsVisibleRemove] = useState<boolean>(false)
    const [removableItem, setRemovableItem] = useState<ObjectType>({})

    const [draggableVariant, setDraggableVariant] = useState<number>(0)
    const [silhouettesList, setSilhouettesList] = useState<ArrayType>([])

    useMemo(() => {
        const data = silhouettes.filter((silhouette: ObjectType) => silhouette.type === 'Sleeve')
        setSilhouettesList(data)
    },[silhouettes])

    const editSilhouette = (silhouette: ObjectType) => {
        if (silhouette) {
            setEditableSilhouette(silhouette)
            setSilhouetteInfo(silhouette)
            setIsVisible(true)
        }
    }

    const closePopup = () => {
        setIsVisible(false)
        setEditableSilhouette({})
        setSilhouetteInfo({})
        setErrors({})
    }

    const saveSilhouette = async () => {

        const formErrors = formValidator(editableSilhouette, silhouetteFormOptions);
        if (formErrors) { return setErrors(formErrors) };
        if (Object.keys(errors).length) { setErrors({}) };

        async function getNewFile(image: string) {
            const response = await fetch(image);
            const blob = await response.blob();
            const file = new File([blob], 'image.jpg', { type: blob.type });
            return file
        }
        const newPrint = JSON.parse(JSON.stringify(editableSilhouette));
        // console.log('editableSilhouette = > ', editableSilhouette)
        if (editableSilhouette?.silhouetteurl?.includes('blob')) {
            const file = await getNewFile(editableSilhouette.silhouetteurl);
            newPrint.silhouetteurl = file;
        }
        const formData = new FormData();
        Object.keys(newPrint).forEach((key) => {
            formData.append(key, newPrint[key]);
        });

        await updateSilhouette(formData).then(res => {
            dispatch(setSilhouetteData(res))
        })
        closePopup()
    }

    const prepareToRemoveItem = (item: ObjectType) => {
        setRemovableItem(item)
        setIsVisibleRemove(true)
    }

    const removeItem = async () => {
        if (removableItem?._id) {
            await removeSilhouette(removableItem).then(res => {
                dispatch(setSilhouetteData(res))
            })
            setIsVisibleRemove(false)
        }
    }

    const closePopupRemove = () => {
        setIsVisibleRemove(false)
        setRemovableItem({})
    }

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
            <HeadingUI text="Sleeve Silhouettes" size="20px" />
            <div className="silhouettes-items-body customXScrollbar">
                {silhouettesList?.length ? silhouettesList.map((silhouette: ObjectType, idx: number) => {
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
                            <img src={`${BASE_UPLOADS_SILHOUETTES_SLEEVES_URL}${silhouette.silhouetteurl}`} className="silhouettes-list-img" alt={silhouette.name} />
                        </div>
                        <div className="silhouettes-list-buttons">
                            <ButtonUI classN="silhouettes-list-button" onClick={() => editSilhouette(silhouette)}>Edit</ButtonUI>
                            <ButtonUI classN="silhouettes-list-button" onClick={() => prepareToRemoveItem(silhouette)}><FontAwesomeIcon icon={faTrash} /></ButtonUI>
                        </div>
                    </div>
                }) : <HeadingUI text='Nothing found' color={appColor} size='16px' />}
            </div>
            {isVisible && <PopupUI callback={closePopup}>
                <EditSilhouette
                    callback={saveSilhouette}
                    closePopup={closePopup}
                    silhouette={editableSilhouette}
                    errors={errors}
                    setSilhouette={setEditableSilhouette}
                    silhouetteInfo={silhouetteInfo}
                />
            </PopupUI>}
            {isVisibleRemove && <PopupUI callback={closePopupRemove}>
                <RemoveSome
                    header="Remove Sleeve Silhouette"
                    text={`Do you want to remove the sleeve silhouette <span> ${removableItem?.name} ?</span>`}
                    discardCallback={closePopupRemove}
                    removeCallback={removeItem}
                />
            </PopupUI>}
        </div>
    );
};

export default SleeveSilhouettesList;