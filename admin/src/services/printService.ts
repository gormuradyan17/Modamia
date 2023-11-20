import { setPrintData, setPrintsVariantsData } from "redux/reducers/printReducer"
import { getPrints, getPrintsVariants } from "shared/api/dataApi"


export const getAvPrints = (dispatch: any) => {
    getPrints().then(res => {
        dispatch(setPrintData(res))
    }).catch(err => console.log(err))
}

export const getAvPrintsVariants = (dispatch: any) => {
    getPrintsVariants().then(res => {
        dispatch(setPrintsVariantsData(res))
    }).catch(err => console.log(err))
}