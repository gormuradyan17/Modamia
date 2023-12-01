import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAvSizes } from "services/sizeService";
import { removeSize, updateSize } from "shared/api/dataApi";
import { ArrayType, ObjectType } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import { formValidator } from "utils/validators/validator";
import { sizeFormOptions } from "utils/validators/validatorOptions";
import EditSize from "./EditSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import RemoveSome from "../removeSome/RemoveSome";
import { setSizeData } from "redux/reducers/sizeReducer";

interface Props {
    sizes: ArrayType
}

const SizesList = ({
    sizes
}: Props) => {

    const dispatch = useDispatch()

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [editableSize, setEditableSize] = useState<ObjectType>({})
    const [sizeInfo, setSizeInfo] = useState<ObjectType>({})
    const [errors, setErrors] = useState<ObjectType>({})

    const [isVisibleRemove, setIsVisibleRemove] = useState<boolean>(false)
    const [removableItem, setRemovableItem] = useState<ObjectType>({})

    const editSize = (size: ObjectType) => {
        if (size) {
            setEditableSize(size)
            setSizeInfo(size)
            setIsVisible(true)
        }
    }

    const closePopup = () => {
        setIsVisible(false)
        setEditableSize({})
        setSizeInfo({})
        setErrors({})
    }

    const saveSize = async () => {
        const activeSize = sizes?.find(size => size._id === editableSize._id) || undefined
        const errors = formValidator(editableSize, sizeFormOptions);
        if (errors) { return setErrors(errors) };
        if (Object.keys(errors).length) { setErrors({}) };
        if (activeSize && JSON.stringify(editableSize) !== JSON.stringify(activeSize)) {
            await updateSize(editableSize).then(res => {
                dispatch(setSizeData(res))
            })
        }
        closePopup()
    }


    const prepareToRemoveItem = (item: ObjectType) => {
        setRemovableItem(item)
        setIsVisibleRemove(true)
    }

    const removeItem = async () => {
        if (removableItem?._id) {
            await removeSize(removableItem).then(res => {
                dispatch(setSizeData(res))
            })
            setIsVisibleRemove(false)
        }
    }

    const closePopupRemove = () => {
        setIsVisibleRemove(false)
        setRemovableItem({})
    }

    return (
        <div className="sizes-list">
            {sizes?.map((size: ObjectType) => {
                return <div className="sizes-list-size" key={size._id}>
                    <HeadingUI classN="size-text _ellipsis" text={size.size} size="18px" />
                    <div className="size-buttons">
                        <ButtonUI classN="size-button" onClick={() => editSize(size)}><FontAwesomeIcon icon={faPencil} /></ButtonUI>
                        <ButtonUI classN="size-button" onClick={() => prepareToRemoveItem(size)}><FontAwesomeIcon icon={faTrash} /></ButtonUI>
                    </div>
                </div>
            })}
            {isVisible && <PopupUI callback={closePopup}>
                <EditSize
                    callback={saveSize}
                    closePopup={closePopup}
                    size={editableSize}
                    defaultSize={sizeInfo}
                    errors={errors}
                    setSize={setEditableSize}
                />
            </PopupUI>}
            {isVisibleRemove && <PopupUI callback={closePopupRemove}>
                <RemoveSome
                    header="Remove Size"
                    text={`Do you want to remove the size <span> ${removableItem?.size} ?</span>`}
                    discardCallback={closePopupRemove}
                    removeCallback={removeItem}
                />
            </PopupUI>}
        </div>
    );
};

export default SizesList;