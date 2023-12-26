import { setProductFullState } from "redux/reducers/addToCartReducer"
import { setGarmentData, setGarmentFullState } from "redux/reducers/garmentReducer"
import { setDetailsData, setDetailsDataLoading, setDetailsModelData } from "redux/reducers/mannequinReducer"
import { getGarment, getGarments, searchGarment } from "shared/api/dataApi"

export const getAvGarments = (dispatch: any, userId: string) => {
    getGarments({ user_id: userId }).then(res => {        
        dispatch(setGarmentData(res))        
    }).catch(err => console.log(err))
}

export const getSelectedGarment =  async (dispatch: any, id: string) => {
    getGarment({ garment_id: id }).then(async (res) => {   
        const { details = {}, ...data } = res; 
        await dispatch(setGarmentFullState(data))
        if (details?.details && Object.keys(details?.details).length) {
            await dispatch(setDetailsModelData(details?.details?.modelData))
            await dispatch(setDetailsData(details))
            await dispatch(setProductFullState({...details?.details}))
            await dispatch(setDetailsDataLoading(false))
        }
        await dispatch(setDetailsDataLoading(false))
    }).catch(err => {
        console.log(err)
        dispatch(setDetailsDataLoading(false))
    })
}

export const getAvSearchedGarments = (dispatch: any, criteria: string, userId: string) => {
    searchGarment({criteria, user_id: userId}).then(res => {
        dispatch(setGarmentData(res))
    }).catch(err => console.log(err))
}