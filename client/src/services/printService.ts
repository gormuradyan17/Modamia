import { setPrintData, setPrintsPalettesData, setPrintsVariantsData } from "redux/reducers/printReducer"
import { getPrints, getPrintsPalettes, getPrintsVariants } from "shared/api/dataApi"


export const getAvPrints = (dispatch: any, variant: string = '', user_id: string = '') => {
    getPrints({
        printVariant: variant,
        user_id
    }).then(res => {
        dispatch(setPrintData(res))
    }).catch(err => console.log(err))
}

export const getAvPrintsVariants = (dispatch: any, user_id: string = '') => {
    getPrintsVariants({user_id}).then(res => {
        dispatch(setPrintsVariantsData(res))
    }).catch(err => console.log(err))
}

export const getAvPrintsPalettes = (dispatch: any, user_id: string = '') => {
    getPrintsPalettes({user_id}).then(res => {
        dispatch(setPrintsPalettesData(res))
    }).catch(err => console.log(err))
}