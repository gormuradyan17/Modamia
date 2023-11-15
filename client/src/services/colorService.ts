import { setColorData } from "redux/reducers/colorReducer"
import { getColors } from "shared/api/dataApi"


export const getAvColors = (dispatch: any) => {
    getColors().then(res => {
        dispatch(setColorData(res))
    }).catch(err => console.log(err))
}