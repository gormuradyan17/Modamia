import { setColorData, setColorsVariantsData } from "redux/reducers/colorReducer"
import { getColors, getColorsVariants } from "shared/api/dataApi"


export const getAvColors = (dispatch: any, variant: string = '') => {
    getColors({
        colorVariant: variant
    }).then(res => {
        dispatch(setColorData(res))
    }).catch(err => console.log(err))
}

export const getAvColorsVariants = (dispatch: any) => {
    getColorsVariants().then(res => {
        dispatch(setColorsVariantsData(res))
    }).catch(err => console.log(err))
}