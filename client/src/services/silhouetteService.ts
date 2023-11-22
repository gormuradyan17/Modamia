import { setSilhouetteData } from "redux/reducers/silhouetteReducer"
import { getSilhouettes, getSilhouettesByTypes } from "shared/api/dataApi"


export const getAvSilhouettes = (dispatch: any) => {
    getSilhouettesByTypes().then(res => {
        dispatch(setSilhouetteData(res))
    }).catch(err => console.log(err))
}