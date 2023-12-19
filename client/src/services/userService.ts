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
    console.log(55);
    
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

export const authUserSignUp=(signinData: ObjectType, setErrors: CallbackSkeletonType)=>{
    return signUpUser(signinData).then((res) => {
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
}