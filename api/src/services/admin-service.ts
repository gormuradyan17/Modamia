import path from 'path';
import { getFileOriginalMimeType } from '../helpers/helper';
import ColorModel, { ColorInterface } from '../models/Color'
import PrintMotel, { PrintInterface } from '../models/Print'
// const ApiError = require('../exceptions/api-error')
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'

class AdminService {

    // Colors 

    async getColors() {
        const colors = await ColorModel.find({});
        return colors;
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

    // Prints

    async getPrints() {
        const users = await PrintMotel.find({});
        return users;
    }

    async addPrint(req: any) {
        try {
            const { name, price, tags } = req.body
            const { highresurl, previewurl } = req.files
            let highImage = '', previewImage = '';
            if (highresurl) {
                const newName = uuidv4()
                const type = getFileOriginalMimeType(highresurl.data)
                highImage = newName + type
                const filePath = path.join(__dirname, '../../uploads', highImage);
                fs.writeFileSync(filePath, highresurl.data);
            }
            if (previewurl) {
                const newName = uuidv4()
                const type = getFileOriginalMimeType(previewurl.data)
                previewImage = newName + type
                const filePath = path.join(__dirname, '../../uploads', previewImage);
                fs.writeFileSync(filePath, previewurl.data);
            }
            const print = await PrintMotel.create({
                name, 
                price, 
                tags, 
                highresurl: highImage, 
                previewurl: previewImage
            })
            return print;

        } catch (error) {
            console.log(error)
        }
    }

    async editPrint(req: Record<string, any>) {
        try {
            console.log(req.body)
            console.log(req.files)
            // const { name, price, tags, _id } = req.body
            // const { highresurl, previewurl } = req.files
            // let highImage = '', previewImage = '';
            // if (highresurl) {
            //     const newName = uuidv4()
            //     const type = getFileOriginalMimeType(highresurl.data)
            //     highImage = newName + type
            //     const filePath = path.join(__dirname, '../../uploads', highImage);
            //     fs.writeFileSync(filePath, highresurl.data);
            // }
            // if (previewurl) {
            //     const newName = uuidv4()
            //     const type = getFileOriginalMimeType(previewurl.data)
            //     previewImage = newName + type
            //     const filePath = path.join(__dirname, '../../uploads', previewImage);
            //     fs.writeFileSync(filePath, previewurl.data);
            // }
            // const query = {'_id': _id};
            // return await PrintMotel.findOneAndUpdate(query, {
            //     name, 
            //     price, 
            //     tags, 
            //     highresurl: highImage, 
            //     previewurl: previewImage
            // }, {upsert: true});

        } catch (error) {
            console.log(error)
        }
    }

}

export default new AdminService();