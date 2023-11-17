import ColorModel from '../models/Color'
import PrintMotel from '../models/Print'
import MannequinModel from '../models/Mannequin'
import SilhouetteModel from '../models/Silhouette'

class PublicService {

    async getColors() {
        const colors = await ColorModel.find({});
        return colors;
    }

    async getPrints() {
        const prints = await PrintMotel.find({});
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