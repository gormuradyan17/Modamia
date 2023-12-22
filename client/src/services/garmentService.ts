import { setProductFullState } from "redux/reducers/addToCartReducer"
import { setGarmentData, setGarmentFullState } from "redux/reducers/garmentReducer"
import { setActivePrint, setTestModelData } from "redux/reducers/mannequinReducer"
import { getGarment, getGarments, searchGarment } from "shared/api/dataApi"

export const getAvGarments = (dispatch: any, userId: string) => {
    getGarments({ user_id: userId }).then(res => {        
        dispatch(setGarmentData(res))        
    }).catch(err => console.log(err))
}

export const getSelectedGarment = (dispatch: any, id: string) => {
    console.log(id,"iddd");
    
    getGarment({ garment_id: id }).then(res => {   
        const { details = {}, ...data } = res; 
        console.log(res,"ressss");
                 
        dispatch(setGarmentFullState(data))
        if (details?.details && Object.keys(details?.details).length) {
            dispatch(setTestModelData(details?.details?.modelData))
            // dispatch(setActivePrint(details?.details))
            // dispatch(setProductFullState(details?.details))
        }
    }).catch(err => console.log(err))
}

export const getAvSearchedGarments = (dispatch: any, criteria: string, userId: string) => {
    searchGarment({criteria, user_id: userId}).then(res => {
        dispatch(setGarmentData(res))
    }).catch(err => console.log(err))
}