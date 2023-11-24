import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { useEffect, useState } from "react";
import { ObjectType } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import NewSuperAdmin from "./NewSuperAdmin";
import SuperAdminsList from "./SuperAdminsList";
import { useDispatch, useSelector } from "react-redux";
import { getSigninData, getSuperAdmins } from "redux/reducers/authReducer";
import { getSuperAdminsList } from "services/authService";
import { formValidator } from "utils/validators/validator";
import { superAdminFormOptions } from "utils/validators/validatorOptions";
import { addNewSAdmin } from "shared/api/dataApi";

const SuperAdmin = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [errors, setErrors] = useState<ObjectType>({})
    const dispatch = useDispatch()
    const superAdminList = useSelector(getSuperAdmins)
    const signinData = useSelector(getSigninData)
    useEffect(() => {
        getSuperAdminsList(dispatch)
    },[])
    
    const closePopup = () => {
        setIsVisible(false)
        setErrors({})
    }

    const addNewSuperAdmin = async (e: HTMLFormElement) => {
        e.preventDefault()
        const errorsForm = formValidator(signinData, superAdminFormOptions);
        if (errorsForm) {return setErrors(errorsForm)};
        if (Object.keys(errors).length) {setErrors({})};
        const response = await addNewSAdmin(signinData)
        if (response?.errors) {
            const passwordError = response?.errors?.find((err: ObjectType) => err?.path === 'password')?.msg || ''
            const emailError = response?.errors?.find((err: ObjectType) => err?.path === 'email')?.msg || ''
            return setErrors({
                password: {
                    message: passwordError
                },
                email: {
                    message: emailError
                },
            })
        }
        await getSuperAdminsList(dispatch)
        closePopup()
    }

    return (
        <div className="admins-list">
            <MainHead text="Edit SuperAdmins" />
            <ButtonUI classN="add-button" onClick={() => setIsVisible(true)} type="button">New SuperAdmin</ButtonUI>
            <MainBody>
                <div className="admins-default-list">
                    <HeadingUI text="SuperAdmins List" size="22px" />
                    {superAdminList?.length ? <SuperAdminsList admins={superAdminList} /> : null }
                </div>
                {isVisible && <PopupUI callback={closePopup}>
                   <NewSuperAdmin 
                        callback={addNewSuperAdmin}
                        errors={errors}
                        closePopup={closePopup}
                   />
                </PopupUI>}
            </MainBody>
        </div>
    );
};

export default SuperAdmin;