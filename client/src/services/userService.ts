import { setIsLogged, setUserData } from "redux/reducers/userReducer"
import { getShopifyUser, signInUser, signUpUser } from "shared/api/dataApi"
import { ObjectType } from "shared/helpers/helpers"
import { CallbackSkeletonType } from "shared/objectModels/GenericModel"


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

export const authUserSignUp=(signupData: ObjectType, setErrors: CallbackSkeletonType)=>{ 
    console.log(signUpUser(signupData),"signupData");
    
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