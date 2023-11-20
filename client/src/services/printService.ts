import { setPrintData } from "redux/reducers/printReducer"
import { getPrints } from "shared/api/dataApi"


export const getAvPrints = (dispatch: any, variant: string = '') => {
    getPrints({
        printVariant: variant
    }).then(res => {
        dispatch(setPrintData(res))
    }).catch(err => console.log(err))
}