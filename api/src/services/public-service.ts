import ColorModel from '../models/Color'
import PrintMotel from '../models/Print'
import MannequinModel from '../models/Mannequin'

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

}

export default new PublicService();