import { BASE_UPLOADS_MANNEQUINS_BACKS_URL, BASE_UPLOADS_MANNEQUINS_FRONTS_URL } from "shared/constants/genericApiRoutes";
import { ArrayType, ObjectType } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'
import { useEffect, useState } from "react";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import { updateMannequin, updatePrint } from "shared/api/dataApi";
import { getAvPrints } from "services/printService";
import { useDispatch } from "react-redux";
import { formValidator } from "utils/validators/validator";
import { mannequinFormOptions } from "utils/validators/validatorOptions";
import { getAvMannequins } from "services/mannequinService";
import EditMannequin from "./EditMannequin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faReplyAll } from "@fortawesome/free-solid-svg-icons";

interface Props {
    mannequins: ArrayType
}

const MannequinsList = ({
    mannequins
}: Props) => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [editableMannequin, setEditableMannequin] = useState<ObjectType>({})
    const [mannequinInfo, setMannequinInfo] = useState<ObjectType>({})
    const [errors, setErrors] = useState<ObjectType>({})
    const [side, setSide] = useState<string>('front')
    const dispatch = useDispatch()

    const editMannequin = (print: ObjectType) => {
        if (print) {
            setEditableMannequin(print)
            setMannequinInfo(print)
            setIsVisible(true)
        }
    }

    const closePopup = () => {
        setIsVisible(false)
        setEditableMannequin({})
        setMannequinInfo({})
        setErrors({})
    }

    const saveMannequin = async () => {

        const formErrors = formValidator(editableMannequin, mannequinFormOptions);
        if (formErrors) { return setErrors(formErrors) };
        if (Object.keys(errors).length) { setErrors({}) };
        async function getNewFile(image: string) {
            const response = await fetch(image);
            const blob = await response.blob();
            const file = new File([blob], 'image.jpg', { type: blob.type });
            return file
        }
        const newMannequin = JSON.parse(JSON.stringify(editableMannequin));
        if (editableMannequin?.fronturl?.includes('blob')) {
            const file = await getNewFile(editableMannequin.fronturl);
            newMannequin.fronturl = file;
        }
        if (editableMannequin?.backurl?.includes('blob')) {
            const file = await getNewFile(editableMannequin.backurl);
            newMannequin.backurl = file;
        }
        const formData = new FormData();
        Object.keys(newMannequin).forEach((key) => {
            formData.append(key, newMannequin[key]);
        });

        await updateMannequin(formData)
        await getAvMannequins(dispatch)
        closePopup()
    }

    const rotateImage = () => {
        setSide(side === 'front' ? 'back' : 'front')
    }

    return (
        <div className="mannequin-list">
            {mannequins?.map((mannequin: ObjectType) => {
                return <div className="mannequins-list-mannequin" key={mannequin._id}>
                    <HeadingUI classN="mannequin-list-text _ellipsis" text={mannequin.name} size="16px" />
                    <div className="mannequin-list-image">
                        <img
                            src={side === 'front'
                                ? `${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequin.fronturl}`
                                : `${BASE_UPLOADS_MANNEQUINS_BACKS_URL}${mannequin.backurl}`
                            }
                            className="mannequin-list-img"
                            alt={mannequin.name}
                        />
                        <button
                            type="button"
                            className="mannequin-list-rotate"
                            onClick={rotateImage}
                        ><FontAwesomeIcon icon={faReplyAll} />
                        </button>
                        <button
                            type="button"
                            className="mannequin-list-edit"
                            onClick={() => editMannequin(mannequin)}
                        ><FontAwesomeIcon icon={faPencil} />
                        </button>
                    </div>
                </div>
            })}
            {isVisible && <PopupUI callback={closePopup}>
                <EditMannequin
                    callback={saveMannequin}
                    closePopup={closePopup}
                    mannequin={editableMannequin}
                    errors={errors}
                    setMannequin={setEditableMannequin}
                    mannequinInfo={mannequinInfo}
                />
            </PopupUI>}
        </div>
    );
};

export default MannequinsList;