import path from 'path';
import { createPrintsDirsIfNotExists, getFileOriginalMimeType, createMannequinsDirsIfNotExists, createSilhouettesDirsIfNotExists } from '../helpers/helper';
import ColorModel, { ColorInterface } from '../models/Color'
import ColorVariantModel from '../models/ColorVariant'
import ColorPaletteModel from '../models/ColorPalette'
import PrintVariantModel from '../models/PrintVariant'
import PrintMotel from '../models/Print'
import MannequinModel from '../models/Mannequin'
import SilhouetteModel from '../models/Silhouette'
import SizeModel from '../models/Size'
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'
import mongoose from 'mongoose';
import { ColorPaletteInterface } from '../models/ColorPalette';

class AdminService {

    // Colors 

    async addColor(req: any) {
        try {
            const { name, hexcode, pantonecode, tags, colorPalettes = [] } = req
            const color = await ColorModel.create({
                name,
                hexcode,
                pantonecode,
                tags,
            })
            const { id } = color;
            colorPalettes?.length && id && colorPalettes.forEach((color: string) => {
                const obj = {
                    color_id: id,
                    variant_id: color
                }
                this.addColorPalette(obj)
            });
            return color;

        } catch (error) {
            console.log(error)
        }
    }

    async editColor(req: Record<string, any>) {
        try {
            const query = { '_id': req._id };
            return await ColorModel.findOneAndUpdate(query, req, { upsert: true });
        } catch (error) {
            console.log(error)
        }
    }

    async addColorVariant(req: Record<string, any>) {
        try {
            const { name } = req
            const colorVariant = await ColorVariantModel.create({
                name,
            })
            return colorVariant;

        } catch (error) {
            console.log(error)
        }
    }

    async addColorPalette(req: ColorPaletteInterface) {
        try {
            const { color_id, variant_id } = req
            const count = await ColorPaletteModel.find({
                variant_id
            }).count()
            const colorPalette = await ColorPaletteModel.create({
                color_id,
                variant_id,
                order: count + 1
            })
            return colorPalette;

        } catch (error) {
            console.log(error)
        }
    }

    async removeColorPalette(req: any) {
        try {
            const { palette_id = '' } = req
            if (!mongoose.Types.ObjectId.isValid(palette_id)) {
                throw new Error('Invalid palette_id');
            }

            const query = { '_id': palette_id };
            return await ColorPaletteModel.deleteOne(query);

        } catch (error) {
            console.log(error)
        }
    }

    async orderPaletteColors(req: any) {
        try {
            const { fromElement = {}, toElement = {} } = req
            const { _id = '', order = undefined} = fromElement;
            const { _id: id_to = '', order: order_to = undefined} = toElement;
            if (_id && order && id_to && order_to) {
                const queryFrom = {  
                    _id,
                    order
                }
                await ColorPaletteModel.findOneAndUpdate(queryFrom, {
                    order: order_to,
                }, { upsert: true });

                const queryTo = {
                    _id: id_to,
                    order: order_to
                }

                await ColorPaletteModel.findOneAndUpdate(queryTo, {
                    order,
                }, { upsert: true });
            }
            const colorsPalettes = await ColorPaletteModel.aggregate([
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

        } catch (error) {
            console.log(error)
        }
    }

    // Prints

    async addPrint(req: any) {
        try {
            const { name, price, tags, printVariant = '' } = req.body
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
                previewurl: previewImage,
                printVariant
            })
            return print;

        } catch (error) {
            console.log(error)
        }
    }

    async editPrint(req: Record<string, any>) {
        try {
            const { name, price, tags, _id, printVariant = '' } = req.body
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
            const query = { '_id': _id };
            return await PrintMotel.findOneAndUpdate(query, {
                name,
                price,
                tags,
                printVariant,
                ...(highImage && { highresurl: highImage }),
                ...(previewImage && { previewurl: previewImage })
            }, { upsert: true });

        } catch (error) {
            console.log(error)
        }
    }

    async addPrintVariant(req: Record<string, any>) {
        try {
            const { name } = req
            const printVariant = await PrintVariantModel.create({
                name,
            })
            return printVariant;

        } catch (error) {
            console.log(error)
        }
    }

    // Mannequins

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
            const query = { '_id': _id };
            return await MannequinModel.findOneAndUpdate(query, {
                name,
                ...(frontImage && { fronturl: frontImage }),
                ...(backImage && { backurl: backImage })
            }, { upsert: true });

        } catch (error) {
            console.log(error)
        }
    }

    // Silhouettes

    async addSilhouette(req: any) {
        try {
            const { name, price, tags = '', type, orientation } = req.body
            const { silhouetteurl } = req.files || {}
            let silhouetteImage = ''
            await createSilhouettesDirsIfNotExists()
            if (silhouetteurl) {
                const newName = uuidv4()
                const fileType = getFileOriginalMimeType(silhouetteurl.data)
                silhouetteImage = newName + fileType
                const pathName = type.toLowerCase() + 's'
                const filePath = path.join(__dirname, `../../uploads/silhouettes/${pathName}`, silhouetteImage);
                fs.writeFileSync(filePath, silhouetteurl.data);
            }
            const silhouette = await SilhouetteModel.create({
                name,
                price,
                tags,
                type,
                orientation,
                silhouetteurl: silhouetteImage,
            })
            return silhouette;

        } catch (error) {
            console.log(error)
        }
    }

    async editSilhouette(req: Record<string, any>) {
        try {
            const { name, price, tags = '', type, orientation, silhouetteurl: silhouetteurlB, _id } = req.body
            const { silhouetteurl } = req.files || {}
            let silhouetteImage = ''
            await createSilhouettesDirsIfNotExists()
            const currentSilhouette = await SilhouetteModel.findById(_id)

            if (currentSilhouette) {
                const currentUrl = currentSilhouette?.silhouetteurl;
                const currentType = currentSilhouette?.type;
                const query = { '_id': _id };

                if (!silhouetteurl && currentType !== type) {
                    const newType = type.toLowerCase() + 's'
                    const oldType = currentType.toLowerCase() + 's'
                    const oldFilePath = path.join(__dirname, `../../uploads/silhouettes/${oldType}`, currentUrl);
                    const newFilePath = path.join(__dirname, `../../uploads/silhouettes/${newType}`, currentUrl);
                    fs.rename(oldFilePath, newFilePath, (err) => {
                        if (err) throw err
                    })
                    return await SilhouetteModel.findOneAndUpdate(query, {
                        name,
                        price,
                        tags,
                        type,
                        orientation,
                    }, { upsert: true });
                }
                if (silhouetteurl) {
                    const newName = uuidv4()
                    const fileType = getFileOriginalMimeType(silhouetteurl.data)
                    silhouetteImage = newName + fileType
                    const pathName = type.toLowerCase() + 's'
                    const filePath = path.join(__dirname, `../../uploads/silhouettes/${pathName}`, silhouetteImage);
                    fs.writeFileSync(filePath, silhouetteurl.data);
                    return await SilhouetteModel.findOneAndUpdate(query, {
                        name,
                        price,
                        tags,
                        type,
                        orientation,
                        ...(silhouetteImage && { silhouetteurl: silhouetteImage }),
                    }, { upsert: true });
                }
                return await SilhouetteModel.findOneAndUpdate(query, {
                    name,
                    price,
                    tags,
                    type,
                    orientation,
                }, { upsert: true });
            }
            return false
        } catch (error) {
            console.log(error)
        }
    }

    // Size

    async addSize(req: ColorInterface) {
        try {
            const { name } = req
            const size = await SizeModel.create({
                size: name,
            })
            return size;

        } catch (error) {
            console.log(error)
        }
    }

    async editSize(req: Record<string, any>) {
        try {
            const query = { '_id': req._id };
            return await SizeModel.findOneAndUpdate(query, req, { upsert: true });
        } catch (error) {
            console.log(error)
        }
    }

}

export default new AdminService();