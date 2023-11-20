import ColorModel from '../models/Color'
import ColorVariantModel from '../models/ColorVariant'
import PrintModel from '../models/Print'
import PrintVariantMotel from '../models/PrintVariant'
import MannequinModel from '../models/Mannequin'
import SilhouetteModel from '../models/Silhouette'

class PublicService {

    async getColors(variant: string = '') {
        const colors = await ColorModel.find({
            ...(variant && {colorVariant: variant})
        })
        return colors;
    }

    async getColorsVariants() {
        const colors = await ColorVariantModel.find({});
        return colors;
    }

    async getPrints(variant: string = '') {
        const prints = await PrintModel.find({
            ...(variant && {printVariant: variant})
        })
        return prints;
    }

    async getPrintsVariants() {
        const prints = await PrintVariantMotel.find({});
        return prints;
    }

    async getMannequins() {
        const mannequins = await MannequinModel.find({});
        return mannequins;
    }

    async getSilhouettes() {
        const silhouettes = await SilhouetteModel.find({});
        return silhouettes;
    }

}

export default new PublicService();