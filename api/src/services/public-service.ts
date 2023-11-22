import ColorModel from '../models/Color'
import ColorVariantModel from '../models/ColorVariant'
import ColorPaletteModel from '../models/ColorPalette'
import PrintModel from '../models/Print'
import PrintVariantMotel from '../models/PrintVariant'
import MannequinModel from '../models/Mannequin'
import SilhouetteModel from '../models/Silhouette'
import SizeModel from '../models/Size'

class PublicService {

    async getColors() {
        const colors = await ColorModel.find({})
        return colors;
    }

    async getColorsVariants() {
        const colorsVariants = await ColorVariantModel.find({}).sort({ createdAt: 1 });
        return colorsVariants;
    }

    async getColorsPalettes(color_id: string = '', variant_id: string = '') {
        const colorsPalettes = await ColorPaletteModel.aggregate([
            {
                $match: {
                    ...(color_id && { color_id }),
                    ...(variant_id && { variant_id })
                }
            },
            { $sort : { order : 1 } },
            {
                $group: {
                    _id: {
                        variant_id: "$variant_id",
                    },
                    grouped: {
                        $push: {
                            color_id: "$color_id",
                            _id: "$_id",
                            order: "$order",
                            createdAt: "$createdAt",
                        }
                    }
                }
            },
        ])

        return colorsPalettes;
    }

    async getPrints(variant: string = '') {
        const prints = await PrintModel.find({
            ...(variant && { printVariant: variant })
        })
        return prints;
    }

    async getPrintsVariants() {
        const prints = await PrintVariantMotel.find({});
        return prints;
    }

    async getSizes() {
        const sizes = await SizeModel.find({});
        return sizes;
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