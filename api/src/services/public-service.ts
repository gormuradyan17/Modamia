import ColorModel from '../models/Color'
import ColorVariantModel from '../models/ColorVariant'
import ColorPaletteModel from '../models/ColorPalette'
import PrintModel from '../models/Print'
import PrintVariantMotel from '../models/PrintVariant'
import PrintPaletteModel from '../models/PrintPalette'
import MannequinModel from '../models/Mannequin'
import SilhouetteModel from '../models/Silhouette'
import SizeModel from '../models/Size'
import GarmentModel from '../models/Garment'
import GarmentSilhouettesModel from '../models/GarmentSilhouettes'
import { getGarmentsQuery } from '../queries/GarmentsQueries'
import mongoose from 'mongoose';

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
            {
                $lookup: {
                    from: "colors",
                    localField: "color_id",
                    foreignField: "_id",
                    as: "colors"
                },
            },
            { $sort: { order: 1 } },
            {
                $lookup: {
                    from: "colors_variants",
                    localField: "variant_id",
                    foreignField: "_id",
                    as: "variant"
                },
            },
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
                            colors: "$colors",
                            variant: "$variant"
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

    async getPrintsPalettes(print_id: string = '', variant_id: string = '') {
        const printsPalettes = await PrintPaletteModel.aggregate([
            {
                $match: {
                    ...(print_id && { print_id }),
                    ...(variant_id && { variant_id })
                }
            },
            {
                $lookup: {
                    from: "prints",
                    localField: "print_id",
                    foreignField: "_id",
                    as: "prints"
                },
            },
            { $sort: { order: 1 } },
            {
                $lookup: {
                    from: "prints_variants",
                    localField: "variant_id",
                    foreignField: "_id",
                    as: "variant"
                },
            },
            {
                $group: {
                    _id: {
                        variant_id: "$variant_id",
                    },
                    grouped: {
                        $push: {
                            print_id: "$print_id",
                            _id: "$_id",
                            order: "$order",
                            createdAt: "$createdAt",
                            prints: "$prints",
                            variant: "$variant"
                        }
                    }
                }
            },
        ])

        return printsPalettes;
    }

    async getSizes() {
        const sizes = await SizeModel.find({});
        return sizes;
    }

    async getMannequins() {
        const mannequins = await MannequinModel.find({});
        return mannequins;
    }

    async getGarments() {
        const garments = await getGarmentsQuery(true)
        return garments
    }

    async getSilhouettes() {
        const silhouettes = await SilhouetteModel.find({});
        return silhouettes;
    }

    async getSilhouettesTypes() {
        const silhouettesFront = await SilhouetteModel.find({
            orientation: 'Front'
        });
        const silhouettesBack = await SilhouetteModel.find({
            orientation: 'Back'
        });
        const silhouettesSleeve = await SilhouetteModel.find({
            type: 'Sleeve'
        });

        return {
            front: silhouettesFront,
            back: silhouettesBack,
            sleeve: silhouettesSleeve
        };
    }

}

export default new PublicService();