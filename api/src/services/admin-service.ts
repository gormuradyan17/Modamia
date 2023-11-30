import path from 'path';
import { createPrintsDirsIfNotExists, getFileOriginalMimeType, createMannequinsDirsIfNotExists, createSilhouettesDirsIfNotExists } from '../helpers/helper';
import ColorModel, { ColorInterface } from '../models/Color'
import ColorVariantModel from '../models/ColorVariant'
import ColorPaletteModel from '../models/ColorPalette'
import PrintPaletteModel from '../models/PrintPalette'
import PrintVariantModel from '../models/PrintVariant'
import PrintModel from '../models/Print'
import MannequinModel from '../models/Mannequin'
import SilhouetteModel from '../models/Silhouette'
import SizeModel from '../models/Size'
import AdminModel from '../models/Admin'
import GarmentModel from '../models/Garment'
import GarmentSilhouettesModel from '../models/GarmentSilhouettes'
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'
import mongoose from 'mongoose';
import { ColorPaletteInterface } from '../models/ColorPalette';
import { PrintPaletteInterface } from '../models/PrintPalette';
import { ObjectId } from 'mongodb';
import AdminDto from '../dtos/admin-dto';
import tokenService from './token-service';
import ApiError from '../exceptions/api-error';
import bcrypt from 'bcryptjs'
import { getGarmentQuery, getGarmentsQuery, updateGarments } from '../queries/GarmentsQueries';

class AdminService {

    // Auth

    async signin(req: any) {
        try {
            const { email } = req

            var admin = await AdminModel.findOne({ email })
            const adminDto = new AdminDto(admin);
            const tokens = tokenService.generateTokens({ ...adminDto });
            await tokenService.saveToken(adminDto.id, tokens.refreshToken);

            return { ...tokens, admin: adminDto }

        } catch (error) {
            console.log(error)
        }
    }

    async refresh(refreshToken: any) {
        try {
            if (!refreshToken) {
                throw ApiError.UnauthorizedError();
            }
            const adminData = tokenService.validateRefreshToken(refreshToken);
            const tokenFromDb = await tokenService.findToken(refreshToken);
            if (!adminData || !tokenFromDb) {
                throw ApiError.UnauthorizedError();
            }
            if (await tokenService.verifyExpiration(refreshToken) === true) {
                tokenService.removeToken(refreshToken);
                throw ApiError.UnauthorizedError();
            }
            const admin = await AdminModel.findById(adminData.id);
            const adminDto = new AdminDto(admin);

            return { admin: adminDto }
        } catch (error) {
            throw ApiError.UnauthorizedError();
        }
    }

    async signout(refreshToken: any) {
        await tokenService.removeToken(refreshToken);
        return true;
    }

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
                variant_id: new ObjectId(variant_id)
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
            const { _id = '' } = req
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                throw new Error('Invalid palette_id');
            }
            const query = { '_id': _id };
            const queryPalette = { 'variant_id': _id };
            await ColorVariantModel.deleteOne(query);
            return await ColorPaletteModel.deleteMany(queryPalette)

        } catch (error) {
            console.log(error)
        }
    }

    async orderPaletteColors(req: any) {
        try {
            const { fromElement = {}, toElement = {} } = req
            const { _id = '', order = undefined } = fromElement;
            const { _id: id_to = '', order: order_to = undefined } = toElement;
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
                { $sort: { order: 1 } },
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

    async removeColor(req: any) {
        try {
            const { _id = '' } = req
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                throw new Error('Invalid palette_id');
            }

            const query = { '_id': _id };
            const queryPalette = { 'color_id': _id };
            await ColorModel.deleteOne(query);
            return await ColorPaletteModel.deleteMany(queryPalette)

        } catch (error) {
            console.log(error)
        }
    }

    // Prints

    async addPrint(req: any) {
        try {
            const { name, price, tags, printsPalettes = '[]' } = req.body
            const parsedPrints = JSON.parse(printsPalettes);
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
            const print = await PrintModel.create({
                name,
                price,
                tags,
                highresurl: highImage,
                previewurl: previewImage,
            })

            const { id } = print;
            parsedPrints?.length && id && parsedPrints.forEach((print: string) => {
                const obj = {
                    print_id: id,
                    variant_id: print
                }
                this.addPrintPalette(obj)
            });

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
            return await PrintModel.findOneAndUpdate(query, {
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

    async addPrintPalette(req: PrintPaletteInterface) {
        try {
            const { print_id, variant_id } = req
            const count = await PrintPaletteModel.find({
                variant_id: new ObjectId(variant_id)
            }).count()
            const printPalette = await PrintPaletteModel.create({
                print_id,
                variant_id,
                order: count + 1
            })
            return printPalette;

        } catch (error) {
            console.log(error)
        }
    }

    async removePrintPalette(req: any) {
        try {
            const { _id = '' } = req
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                throw new Error('Invalid palette_id');
            }

            const query = { '_id': _id };
            const queryPalette = { 'variant_id': _id };
            await PrintVariantModel.deleteOne(query);
            return await PrintPaletteModel.deleteMany(queryPalette)

        } catch (error) {
            console.log(error)
        }
    }

    async orderPalettePrints(req: any) {
        try {
            const { fromElement = {}, toElement = {} } = req
            const { _id = '', order = undefined } = fromElement;
            const { _id: id_to = '', order: order_to = undefined } = toElement;
            if (_id && order && id_to && order_to) {
                const queryFrom = {
                    _id,
                    order
                }
                await PrintPaletteModel.findOneAndUpdate(queryFrom, {
                    order: order_to,
                }, { upsert: true });

                const queryTo = {
                    _id: id_to,
                    order: order_to
                }

                await PrintPaletteModel.findOneAndUpdate(queryTo, {
                    order,
                }, { upsert: true });
            }
            const printPalettes = await PrintPaletteModel.aggregate([
                { $sort: { order: 1 } },
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
                            }
                        }
                    }
                },
            ])

            return printPalettes;

        } catch (error) {
            console.log(error)
        }
    }

    async removePrint(req: any) {
        try {
            const { _id = '' } = req
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                throw new Error('Invalid palette_id');
            }

            const query = { '_id': _id };
            const queryPalette = { 'print_id': _id };
            await PrintModel.deleteOne(query);
            return await PrintPaletteModel.deleteMany(queryPalette)

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

    async removeMannequin(req: any) {
        try {
            const { _id = '' } = req
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                throw new Error('Invalid palette_id');
            }

            const query = { '_id': _id };
            return await MannequinModel.deleteOne(query);

        } catch (error) {
            console.log(error)
        }
    }

    // Silhouettes

    async addSilhouette(req: any) {
        try {
            const { name, price, tags = '', type, orientation, mannequin_id } = req.body
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
                silhouetteurl: silhouetteImage || '',
                mannequin_id
            })
            return silhouette;

        } catch (error) {
            console.log(error)
        }
    }

    async editSilhouette(req: Record<string, any>) {
        try {
            const { name, price, tags = '', type, orientation, silhouetteurl: silhouetteurlB, _id, mannequin_id } = req.body
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
                        mannequin_id
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
                        mannequin_id,
                        ...(silhouetteImage && { silhouetteurl: silhouetteImage }),
                    }, { upsert: true });
                }
                return await SilhouetteModel.findOneAndUpdate(query, {
                    name,
                    price,
                    tags,
                    type,
                    orientation,
                    mannequin_id
                }, { upsert: true });
            }
            return false
        } catch (error) {
            console.log(error)
        }
    }

    async removeSilhouette(req: any) {
        try {
            const { _id = '' } = req
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                throw new Error('Invalid palette_id');
            }

            const query = { '_id': _id };
            return await SilhouetteModel.deleteOne(query);

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

    async removeSize(req: any) {
        try {
            const { _id = '' } = req
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                throw new Error('Invalid palette_id');
            }

            const query = { '_id': _id };
            return await SizeModel.deleteOne(query);

        } catch (error) {
            console.log(error)
        }
    }

    // Super Admins

    async addSuperAdmin(req: any) {
        try {
            const { email = '', password = '' } = req;
            const hashPassword = await bcrypt.hash(password, 10)
            const admin = await AdminModel.create({
                email,
                password: hashPassword
            })
            return admin;
        } catch (error) {
            console.log(error)
        }
    }

    async editSuperAdmin(req: any) {
        try {
            const query = { '_id': req._id };
            return await AdminModel.findOneAndUpdate(query, req, { upsert: true });

        } catch (error) {
            console.log(error)
        }
    }

    async getSuperAdmins(req: any) {
        try {
            return await AdminModel.find({});
        } catch (error) {
            console.log(error)
        }
    }

    async removeSuperAdmin(req: any) {
        try {
            const { removableAdmin: { _id = '' } = {} } = req
            const query = { '_id': _id };
            await AdminModel.deleteOne(query);
            return true
        } catch (error) {
            console.log(error)
        }
    }

    // Size

    async addGarment(req: any) {
        try {
            const { bottoms = [], name = '', mannequin_id = '', sleeves = [], tops = [] } = req || {}
            if (mannequin_id) {
                const garment = await GarmentModel.create({
                    name,
                    mannequin_id
                })
                if (garment?._id) {

                    tops?.map(async (bottom: any) => {
                        await GarmentSilhouettesModel.create({
                            silhouette_id: bottom,
                            garment_id: garment?._id,
                            silhouetteType: 'tops'
                        })
                    })

                    bottoms?.map(async (bottom: any) => {
                        await GarmentSilhouettesModel.create({
                            silhouette_id: bottom,
                            garment_id: garment?._id,
                            silhouetteType: 'bottoms'
                        })
                    })

                    sleeves?.map(async (bottom: any) => {
                        await GarmentSilhouettesModel.create({
                            silhouette_id: bottom,
                            garment_id: garment?._id,
                            silhouetteType: 'sleeves'
                        })
                    })
                }
                return garment;
            }
            return false;

        } catch (error) {
            console.log(error)
        }
    }

    async getGarmentAdmin(garment_id: string = '') {
        const garment = await getGarmentQuery(garment_id)
        return garment?.[0] || {}
    }

    async getGarmentsAdmin() {
        const garments = await getGarmentsQuery(true)
        return garments
    }

    async editGarment(req: Record<string, any>) {
        try {
            const { bottoms = [], name = '', mannequin_id = '', sleeves = [], tops = [], id = '' } = req || {}
            if (id) {
                const query = { '_id': id };
                await GarmentModel.findOneAndUpdate(query, {
                    name,
                    mannequin_id
                }, { upsert: true });

                await updateGarments(id, tops, 'tops')
                await updateGarments(id, bottoms, 'bottoms')
                await updateGarments(id, sleeves, 'sleeves')

                return true
            }
            return false
        } catch (error) {
            console.log(error)
        }
    }

    async removeGarment(req: any) {
        try {
            const { _id = '' } = req
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                throw new Error('Invalid palette_id');
            }

            const query = { '_id': _id };
            return await SizeModel.deleteOne(query);

        } catch (error) {
            console.log(error)
        }
    }

}

export default new AdminService();