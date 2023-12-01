import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RemoveSome from "components/customize/removeSome/RemoveSome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveSuperAdmin } from "redux/reducers/authReducer";
import { getSuperAdminsList } from "services/authService";
import { removeSAdmin } from "shared/api/dataApi";
import { ArrayType, ObjectType } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PopupUI from "shared/ui/PopupUI/PopupUI";

interface Props {
    admins: ArrayType
}

const SuperAdminsList = ({
    admins
}: Props) => {

    const dispatch = useDispatch()
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [removableAdmin, setRemovableAdmin] = useState<ObjectType>({})

    const removeSuperAdmin = async () => {
        if (removableAdmin?._id) {
            await removeSAdmin({ removableAdmin })
            await getSuperAdminsList(dispatch)
            closePopup()
        }
    }

    const prepareToRemoveAdmin = async (admin: ObjectType) => {
        setRemovableAdmin(admin)
        setIsVisible(true)
    }

    const closePopup = () => {
        setRemovableAdmin({})
        setIsVisible(false)
    }

    const activeSAdmin = useSelector(getActiveSuperAdmin)

    return (
        <div className="super-admin-list">
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {admins?.map((admin: ObjectType) => {
                        return <tr key={admin?._id}>
                            <td>{admin?.email}</td>
                            <td><ButtonUI disabled={activeSAdmin?.email === admin?.email} onClick={() => prepareToRemoveAdmin(admin)}><FontAwesomeIcon icon={faTrash} /></ButtonUI></td>
                        </tr>
                    })}
                </tbody>
            </table>
            {isVisible && <PopupUI callback={closePopup}>
                <RemoveSome
                    header="Remove Super Admin"
                    text={`Do you want to remove the super admin <span> ${removableAdmin?.email} ?</span>`}
                    discardCallback={closePopup}
                    removeCallback={removeSuperAdmin}
                />
            </PopupUI>}
        </div>
    );
};

export default SuperAdminsList;