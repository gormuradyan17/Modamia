import { setIsLogged, setUserData } from "redux/reducers/userReducer"
import { checkUser, editUser, getShopifyUser, signInUser, signUpUser, signoutUser } from "shared/api/dataApi"
import { ObjectType } from "shared/helpers/helpers"
import { CallbackSkeletonType } from "shared/objectModels/GenericModel"

export const checkAuth = async () => {
    const response = await checkUser()
    return response;
}

export const getUserShopify = (dispatch: any, token: string) => {    
    getShopifyUser({ token }).then(res => {
        if (res && res?._id) {
            dispatch(setUserData(res))
            return dispatch(setIsLogged(true))
        }
        dispatch(setUserData({}))
        dispatch(setIsLogged(false))
    }).catch(err => {
        console.log(err)
        dispatch(setUserData({}))
        dispatch(setIsLogged(false))
    })
}

export const authUserSignin = (signinData: ObjectType, setErrors: CallbackSkeletonType) => {
    return signInUser(signinData).then((res) => {
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

export const authUserSignUp = (signupData: ObjectType, setErrors: CallbackSkeletonType) => {
    return signUpUser(signupData).then((res) => {
        if (res?.errors) {
            const passwordError = res?.errors?.find((err: ObjectType) => err?.path === 'password')?.msg || ''
            const nameError = res?.errors?.find((err: ObjectType) => err?.path === 'name')?.msg || ''
            const emailError = res?.errors?.find((err: ObjectType) => err?.path === 'email')?.msg || ''
            return setErrors({
                password: passwordError,
                email: emailError,
                name:nameError,
            })
        }
        return res
    }).catch(error => console.log(error))
}

export const userSignout = async () => {
	return await signoutUser()
};
export const editUserData = (data: ObjectType, setErrors: CallbackSkeletonType) => {
    return editUser(data).then((res) => {
        if (res?.errors) {
            const passwordError = res?.errors?.find((err: ObjectType) => err?.path === 'password')?.msg || ''
            const emailError = res?.errors?.find((err: ObjectType) => err?.path === 'email')?.msg || ''
            const nameError = res?.errors?.find((err: ObjectType) => err?.path === 'name')?.msg || ''
            return setErrors({
                password: passwordError,
                email: emailError,
                name: nameError
            })
        }
        return res
    }).catch(error => console.log(error))
}
