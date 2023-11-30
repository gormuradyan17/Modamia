import { setSizeData } from "redux/reducers/sizeReducer"
import { getSizes } from "shared/api/dataApi"

export const getAvSizes = (dispatch: any) => {
    getSizes().then(res => {
        dispatch(setSizeData(res))
    }).catch(err => console.log(err))
}
