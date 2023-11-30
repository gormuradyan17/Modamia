import { setActiveMannequinDetails, setMannequinData } from "redux/reducers/mannequinReducer"
import { getMannequinWithSilhouettes, getMannequins } from "shared/api/dataApi"


export const getAvMannequins = (dispatch: any) => {
    getMannequins().then(res => {
        dispatch(setMannequinData(res))
    }).catch(err => console.log(err))
}

export const getMannequinWithSill = (dispatch: any, mannequin_id: string = '') => {
    getMannequinWithSilhouettes({
        mannequin_id
    }).then(res => {
        dispatch(setActiveMannequinDetails(res))
    }).catch(err => console.log(err))
}