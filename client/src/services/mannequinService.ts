import { setMannequinData } from "redux/reducers/mannequinReducer"
import { getMannequins } from "shared/api/dataApi"


export const getAvMannequins = (dispatch: any) => {
    getMannequins().then(res => {
        dispatch(setMannequinData(res))
    }).catch(err => console.log(err))
}