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