import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { availableGarments, setGarmentData } from "redux/reducers/garmentReducer";
import { getAvGarmentsAdmin } from "services/garmentService";
import { BASE_UPLOADS_MANNEQUINS_FRONTS_URL } from "shared/constants/genericApiRoutes";
import { ObjectType, appColor } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import './style.scss'
import { useNavigate } from "react-router-dom";
import { removeGarment } from "shared/api/dataApi";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import RemoveSome from "components/customize/removeSome/RemoveSome";

const GarmentsList = () => {

    const [isVisibleRemove, setIsVisibleRemove] = useState<boolean>(false)
    const [removableGarment, setRemovableGarment] = useState<ObjectType>({})
    const garments = useSelector(availableGarments)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        getAvGarmentsAdmin(dispatch)
    }, [])

    const editGarment = (id: string) => {
        navigate(`/garments/${id}`)
    }

    const remGarment = async () => {
        if (removableGarment?._id) {
            await removeGarment(removableGarment).then(res => {
                const copyGarments = structuredClone(garments)
                const idx = copyGarments?.findIndex((item: ObjectType) => {
                    const { garment = {} } = item;
                    return garment?._id === removableGarment?._id
                })
                if (idx !== -1) {
                    copyGarments.splice(idx, 1)
                    dispatch(setGarmentData(copyGarments))
                }
            })
        }
        closePopupRemove()
    }

    const prepareToRemoveGarment = (garment: ObjectType) => {
        setRemovableGarment(garment)
        setIsVisibleRemove(true)
    }

    const closePopupRemove = () => {
        setIsVisibleRemove(false)
        setRemovableGarment({})
    }

    return (
        <div className="garments-list">
            {garments?.map((item: ObjectType) => {
                const { garment = {}, mannequin = {} } = item || {};
                return <div key={garment?._id} className="garment-item">
                    <HeadingUI text={garment?.name} size="16px" color={appColor} align="center" />
                    <div className="garments-list-garment">
                        <div className="garments-list-image">
                            <img
                                src={`${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequin.fronturl}`}
                                className="garments-list-img"
                                alt={mannequin.name}
                            />
                        </div>
                        <ButtonUI
                            type="button"
                            classN="garments-list-button"
                            onClick={() => editGarment(garment?._id)}
                        ><FontAwesomeIcon icon={faPencil} /></ButtonUI>
                        <ButtonUI
                            type="button"
                            classN="garments-list-button garments-list-button-remove"
                            onClick={() => prepareToRemoveGarment(garment)}
                        ><FontAwesomeIcon icon={faTrash} /></ButtonUI>
                    </div>
                </div>
            })}
            {isVisibleRemove && <PopupUI callback={closePopupRemove}>
                <RemoveSome
                    header="Remove Garment"
                    text={`Do you want to remove the garment <span> ${removableGarment?.name} ?</span>`}
                    discardCallback={closePopupRemove}
                    removeCallback={remGarment}
                />
            </PopupUI>}
        </div>
    );
};

export default GarmentsList;