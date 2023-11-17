import { setSilhouetteData } from "redux/reducers/silhouetteReducer"
import { getSilhouettes } from "shared/api/dataApi"


export const getAvSilhouettes = (dispatch: any) => {
    getSilhouettes().then(res => {
        dispatch(setSilhouetteData(res))
    }).catch(err => console.log(err))
}