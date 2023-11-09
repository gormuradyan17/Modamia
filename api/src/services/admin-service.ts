import ColorModel, { ColorInterface } from '../models/Color'
// const ApiError = require('../exceptions/api-error')

class AdminService {

    async getColors() {
        const users = await ColorModel.find({});
        return users;
    }

    async addColor(req: ColorInterface) {
        try {
            const { name, hexcode, pantonecode, tags } = req
            const color = await ColorModel.create({
                name,
                hexcode,
                pantonecode,
                tags
            })
            return color;

        } catch (error) {
            console.log(error)
        }
    }

    async editColor(req: Record<string, any>) {
        try {
            const query = {'_id': req._id};
            return await ColorModel.findOneAndUpdate(query, req, {upsert: true});
        } catch (error) {
            console.log(error)
        }
    }

}

export default new AdminService();