import { setColorData, setColorsPalettesData, setColorsVariantsData } from "redux/reducers/colorReducer"
import { getColors, getColorsPalettes, getColorsVariants } from "shared/api/dataApi"


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

export const getAvColorsPalettes = (dispatch: any) => {
    getColorsPalettes().then(res => {
        dispatch(setColorsPalettesData(res))
    }).catch(err => console.log(err))
}