import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { availableGarments } from "redux/reducers/garmentReducer";
import { getAvGarmentsAdmin } from "services/garmentService";
import { BASE_UPLOADS_MANNEQUINS_FRONTS_URL } from "shared/constants/genericApiRoutes";
import { ObjectType } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import './style.scss'
import { useNavigate } from "react-router-dom";

const GarmentsList = () => {

    const garments = useSelector(availableGarments)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        getAvGarmentsAdmin(dispatch)
    }, [])

    const editGarment = (id: string) => {
        navigate(`/garments/${id}`)
    }

    return (
        <div className="garments-list">
            {garments?.map((item: ObjectType) => {
                const { garment = {}, mannequin = {} } = item || {};
                return <div key={garment?._id}>
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
                    </div>
                </div>
            })}
        </div>
    );
};

export default GarmentsList;