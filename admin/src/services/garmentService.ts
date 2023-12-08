import { setGarmentData, setGarmentFullState } from "redux/reducers/garmentReducer"
import { getGarmentAdmin, getGarments, getGarmentsAdmin, searchGarment } from "shared/api/dataApi"
import { ObjectType } from "shared/helpers/helpers"


export const getAvGarments = (dispatch: any) => {
    getGarments().then(res => {
        dispatch(setGarmentData(res))
    }).catch(err => console.log(err))
}

export const getSelectedGarment = (dispatch: any, id: string) => {
    getGarmentAdmin({garment_id: id}).then(res => {
        const { silhouettes: {
            bottoms = [],
            tops = [],
            sleeves = [],
        } = {}, palettes = {
            colors: [],
            prints: []
        }, mannequin: { _id: mannequin_id = '' } = {}, garment: { name = ''} = {} } = res || {}

        const toDispatch = {
            name,
            mannequin_id,
            tops: [],
            bottoms: [],
            sleeves: [],
            palettes: {
                colors: [],
                prints: []
            }
        }

        toDispatch.tops = tops.reduce((acc: any, item: ObjectType) => {
            acc.push({
                id: item?._id,
                order: item?.order || 1
            })
            return acc
        },[])

        toDispatch.bottoms = bottoms.reduce((acc: any, item: ObjectType) => {
            acc.push({
                id: item?._id,
                order: item?.order || 1
            })
            return acc
        },[])

        toDispatch.sleeves = sleeves.reduce((acc: any, item: ObjectType) => {
            acc.push({
                id: item?._id,
                order: item?.order || 1
            })
            return acc
        },[])
        toDispatch.palettes = palettes

        dispatch(setGarmentFullState(toDispatch))

    }).catch(err => console.log(err))
}

export const getAvGarmentsAdmin = (dispatch: any) => {
    getGarmentsAdmin().then(res => {
        dispatch(setGarmentData(res))
    }).catch(err => console.log(err))
}

export const getAvSearchedGarments = (dispatch: any, criteria: string) => {
    searchGarment({criteria}).then(res => {
        dispatch(setGarmentData(res))
    }).catch(err => console.log(err))
}