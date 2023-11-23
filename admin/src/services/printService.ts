import { setPrintData, setPrintsPalettesData, setPrintsVariantsData } from "redux/reducers/printReducer"
import { getPrints, getPrintsPalettes, getPrintsVariants } from "shared/api/dataApi"


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

export const getAvPrintsPalettes = (dispatch: any) => {
    getPrintsPalettes().then(res => {
        dispatch(setPrintsPalettesData(res))
    }).catch(err => console.log(err))
}