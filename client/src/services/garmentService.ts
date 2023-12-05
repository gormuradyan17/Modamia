import { setGarmentData, setGarmentFullState } from "redux/reducers/garmentReducer"
import { getGarment, getGarments } from "shared/api/dataApi"

export const getAvGarments = (dispatch: any) => {
    getGarments().then(res => {        
        dispatch(setGarmentData(res))        
    }).catch(err => console.log(err))
}

export const getSelectedGarment = (dispatch: any, id: string) => {
    getGarment({ garment_id: id }).then(res => {                
        dispatch(setGarmentFullState(res))
    }).catch(err => console.log(err))
}

// export const getAvGarmentsAdmin = (dispatch: any) => {
//     getGarmentsAdmin().then(res => {
//         dispatch(setGarmentData(res))
//     }).catch(err => console.log(err))
// }