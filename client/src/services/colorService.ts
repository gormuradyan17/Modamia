import { setColorData, setColorsPalettesData, setColorsVariantsData } from "redux/reducers/colorReducer"
import { getColors, getColorsPalettes, getColorsVariants } from "shared/api/dataApi"


export const getAvColors = (dispatch: any, variant: string = '', user_id: string = '') => {
    getColors({
        colorVariant: variant,
        user_id
    }).then(res => {
        dispatch(setColorData(res))
    }).catch(err => console.log(err))
}

export const getAvColorsVariants = (dispatch: any, user_id: string = '') => {
    getColorsVariants({user_id}).then(res => {
        dispatch(setColorsVariantsData(res))
    }).catch(err => console.log(err))
}

export const getAvColorsPalettes = (dispatch: any, user_id: string = '') => {
    getColorsPalettes({user_id}).then(res => {
        dispatch(setColorsPalettesData(res))
    }).catch(err => console.log(err))
}