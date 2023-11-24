import { setSuperAdmins } from "redux/reducers/authReducer";
import { checkAdmin, getSuperAdmins, signinAdmin, signoutAdmin } from "shared/api/dataApi";
import { ObjectType } from "shared/helpers/helpers";
import { CallbackSkeletonType } from "shared/objectModels/GenericModel";

export const adminSignin = (signinData: ObjectType, setErrors: CallbackSkeletonType) => {
    return signinAdmin(signinData).then((res) => {
        if (res?.errors) {
            const passwordError = res?.errors?.find((err: ObjectType) => err?.path === 'password')?.msg || ''
            const emailError = res?.errors?.find((err: ObjectType) => err?.path === 'email')?.msg || ''
            return setErrors({
                password: passwordError,
                email: emailError,
            })
        }
        return res
    }).catch(error => console.log(error))
};

export const checkAuth = async () => {
	const response = await checkAdmin()
	return response;
}

export const adminSignout = async () => {
	return await signoutAdmin()
};

export const getSuperAdminsList = async (dispatch: any) => {
	getSuperAdmins().then(res => {
        dispatch(setSuperAdmins(res))
    }).catch(err => console.log(err))
}