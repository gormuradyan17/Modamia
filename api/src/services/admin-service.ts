import path from 'path';
import { createPrintsDirsIfNotExists, getFileOriginalMimeType, createMannequinsDirsIfNotExists } from '../helpers/helper';
import ColorModel, { ColorInterface } from '../models/Color'
import PrintMotel from '../models/Print'
import MannequinModel from '../models/Mannequin'
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
        const prints = await PrintMotel.find({});
        return prints;
    }

    async addPrint(req: any) {
        try {
            const { name, price, tags } = req.body
            const { highresurl = '', previewurl = '' } = req.files || {}
            let highImage = '', previewImage = '';
            await createPrintsDirsIfNotExists()
            if (highresurl) {
                const newName = uuidv4()
                const type = getFileOriginalMimeType(highresurl.data)
                highImage = newName + type
                const filePath = path.join(__dirname, '../../uploads/prints/highs', highImage);
                fs.writeFileSync(filePath, highresurl.data);
            }
            if (previewurl) {
                const newName = uuidv4()
                const type = getFileOriginalMimeType(previewurl.data)
                previewImage = newName + type
                const filePath = path.join(__dirname, '../../uploads/prints/previews', previewImage);
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
            const { name, price, tags, _id } = req.body
            const { highresurl = '', previewurl = '' } = req.files || {}
            let highImage = '', previewImage = '';
            await createPrintsDirsIfNotExists()
            if (highresurl) {
                const newName = uuidv4()
                const type = getFileOriginalMimeType(highresurl.data)
                highImage = newName + type
                const filePath = path.join(__dirname, '../../uploads/prints/highs', highImage);
                fs.writeFileSync(filePath, highresurl.data);
            }
            if (previewurl) {
                const newName = uuidv4()
                const type = getFileOriginalMimeType(previewurl.data)
                previewImage = newName + type
                const filePath = path.join(__dirname, '../../uploads/prints/previews', previewImage);
                fs.writeFileSync(filePath, previewurl.data);
            }
            const query = {'_id': _id};
            return await PrintMotel.findOneAndUpdate(query, {
                name, 
                price, 
                tags, 
                ...(highImage && {highresurl: highImage}),
                ...(previewImage && {previewurl: previewImage})
            }, {upsert: true});

        } catch (error) {
            console.log(error)
        }
    }

    // Mannequins

    async getMannequins() {
        const mannequins = await MannequinModel.find({});
        return mannequins;
    }

    async addMannequin(req: any) {
        try {
            const { name } = req.body
            const { fronturl = '', backurl = '' } = req.files || {}
            let frontImage = '', backImage = '';
            await createMannequinsDirsIfNotExists()
            if (fronturl) {
                const newName = uuidv4()
                const type = getFileOriginalMimeType(fronturl.data)
                frontImage = newName + type
                const filePath = path.join(__dirname, '../../uploads/mannequins/fronts', frontImage);
                fs.writeFileSync(filePath, fronturl.data);
            }
            if (backurl) {
                const newName = uuidv4()
                const type = getFileOriginalMimeType(backurl.data)
                backImage = newName + type
                const filePath = path.join(__dirname, '../../uploads/mannequins/backs', backImage);
                fs.writeFileSync(filePath, backurl.data);
            }
            const mannequin = await MannequinModel.create({
                name, 
                fronturl: frontImage, 
                backurl: backImage
            })
            return mannequin;

        } catch (error) {
            console.log(error)
        }
    }

    async editMannequin(req: Record<string, any>) {
        try {
            const { name, _id } = req.body
            const { fronturl = '', backurl = '' } = req.files || {}
            let frontImage = '', backImage = '';
            await createMannequinsDirsIfNotExists()
            if (fronturl) {
                const newName = uuidv4()
                const type = getFileOriginalMimeType(fronturl.data)
                frontImage = newName + type
                const filePath = path.join(__dirname, '../../uploads/mannequins/fronts', frontImage);
                fs.writeFileSync(filePath, fronturl.data);
            }
            if (backurl) {
                const newName = uuidv4()
                const type = getFileOriginalMimeType(backurl.data)
                backImage = newName + type
                const filePath = path.join(__dirname, '../../uploads/mannequins/backs', backImage);
                fs.writeFileSync(filePath, backurl.data);
            }
            const query = {'_id': _id};
            return await MannequinModel.findOneAndUpdate(query, {
                name, 
                ...(frontImage && {fronturl: frontImage}),
                ...(backImage && {backurl: backImage})
            }, {upsert: true});

        } catch (error) {
            console.log(error)
        }
    }

}

export default new AdminService();