import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAvSizes } from "services/sizeService";
import { updateSize } from "shared/api/dataApi";
import { ArrayType, ObjectType } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import { formValidator } from "utils/validators/validator";
import { sizeFormOptions } from "utils/validators/validatorOptions";
import EditSize from "./EditSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

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
        if (errors) {return setErrors(errors)};
        if (Object.keys(errors).length) {setErrors({})};
        if (activeSize && JSON.stringify(editableSize) !== JSON.stringify(activeSize) ) {
            await updateSize(editableSize)
            await getAvSizes(dispatch)
        } 
        closePopup()
    }

    return (
        <div className="sizes-list">
            {sizes?.map((size: ObjectType) => {
                return <div className="sizes-list-size" key={size._id}>
                    <HeadingUI classN="size-text _ellipsis" text={size.size} size="18px" />
                    <ButtonUI classN="size-button" onClick={() => editSize(size)}><FontAwesomeIcon icon={faPencil} /></ButtonUI>
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
        </div>
    );
};

export default SizesList;