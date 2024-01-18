import path from 'path';
import { getFileOriginalMimeType, createMannequinsDirsIfNotExists, createSilhouettesDirsIfNotExists, createGarmentsDirsIfNotExists } from '../helpers/helper';
import { ColorInterface } from '../models/Color'
import MannequinModel from '../models/Mannequin'
import SilhouetteModel from '../models/Silhouette'
import SizeModel from '../models/Size'
import AdminModel from '../models/Admin'
import GarmentModel from '../models/Garment'
import GarmentSilhouettesModel from '../models/GarmentSilhouettes'
import GarmentPalettesModel from '../models/GarmentPalettes'
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'
import mongoose from 'mongoose';

import AdminDto from '../dtos/admin-dto';
import tokenService from './token-service';
import ApiError from '../exceptions/api-error';
import bcrypt from 'bcryptjs'
import { getGarmentQuery, getGarmentsQuery, searchGarmentsQuery, updateGarmentPalettesQuery, updateGarmentsQuery } from '../queries/GarmentsQueries';

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

    // Mannequins

    async addMannequin(req: any) {
        try {
            const { name, width, height } = req.body
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
                backurl: backImage,
                width,
                height
            })
            return mannequin;

        } catch (error) {
            console.log(error)
        }
    }

    async editMannequin(req: Record<string, any>) {
        try {
            const { name, _id, width, height } = req.body
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
            await MannequinModel.findOneAndUpdate(query, {
                name,
                ...(frontImage && { fronturl: frontImage }),
                ...(backImage && { backurl: backImage }),
                width,
                height,
            }, { upsert: true });
            const mannequins = await MannequinModel.find({})
            return mannequins

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
            await MannequinModel.deleteOne(query);
            const mannequins = await MannequinModel.find({})
            return mannequins

        } catch (error) {
            console.log(error)
        }
    }

    // Silhouettes

    async addSilhouette(req: any) {
        try {
            const { name, price, tags = '', type, orientation, mannequin_id, width, height } = req.body
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
                mannequin_id,
                width,
                height
            })
            return silhouette;

        } catch (error) {
            console.log(error)
        }
    }

    async editSilhouette(req: Record<string, any>) {
        try {
            const { name, price, tags = '', type, orientation, _id, mannequin_id, width, height } = req.body
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
                    await SilhouetteModel.findOneAndUpdate(query, {
                        name,
                        price,
                        tags,
                        type,
                        orientation,
                        mannequin_id,
                        width,
                        height
                    }, { upsert: true });
                    return await SilhouetteModel.find({})
                }
                if (silhouetteurl) {
                    const newName = uuidv4()
                    const fileType = getFileOriginalMimeType(silhouetteurl.data)
                    silhouetteImage = newName + fileType
                    const pathName = type.toLowerCase() + 's'
                    const filePath = path.join(__dirname, `../../uploads/silhouettes/${pathName}`, silhouetteImage);
                    fs.writeFileSync(filePath, silhouetteurl.data);
                    await SilhouetteModel.findOneAndUpdate(query, {
                        name,
                        price,
                        tags,
                        type,
                        orientation,
                        mannequin_id,
                        width,
                        height,
                        ...(silhouetteImage && { silhouetteurl: silhouetteImage }),
                    }, { upsert: true });
                    return await SilhouetteModel.find({})
                }
                await SilhouetteModel.findOneAndUpdate(query, {
                    name,
                    price,
                    tags,
                    type,
                    orientation,
                    mannequin_id,
                    width,
                    height
                }, { upsert: true });
                return await SilhouetteModel.find({})
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
            await SilhouetteModel.deleteOne(query);
            return await SilhouetteModel.find({})

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
            await SizeModel.findOneAndUpdate(query, req, { upsert: true });
            const sizes = await SizeModel.find({})
            return sizes;
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
            await SizeModel.deleteOne(query);
            const sizes = await SizeModel.find({})
            return sizes;

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

    // Garment

    async addGarment(req: any) {
        try {
            const { bottoms = [], name = '', mannequin_id = '', sleeves = [], tops = [], palettes = {} } = req.body || {}
            
            const { background = '' } = req.files || {};
            if (mannequin_id) {
                const garment = await GarmentModel.create({
                    name,
                    mannequin_id
                })
                const query = { _id: garment?.id}
                if (background) {
                    if (typeof background === 'string') {
                        await GarmentModel.findOneAndUpdate(query, {
                            background: background,
                        }, { upsert: true })
                    } else {
                        await createGarmentsDirsIfNotExists()
                        const newName = uuidv4()
                        const fileType = getFileOriginalMimeType(background.data)
                        const garmentImage = newName + fileType
                        const filePath = path.join(__dirname, `../../uploads/garments`, garmentImage);
                        fs.writeFileSync(filePath, background.data);
                        await GarmentModel.findOneAndUpdate(query, {
                            background: garmentImage,
                        }, { upsert: true })
                    }
                }
                if (garment?._id) {
                    const queryMannequin = { _id: mannequin_id}
                    const mannequin = await MannequinModel.find(queryMannequin)
                    JSON.parse(tops)?.map(async (top: Record<string, any>) => {
                        await GarmentSilhouettesModel.create({
                            silhouette_id: top?.id,
                            garment_id: garment?._id,
                            order: top?.order || 1,
                            silhouetteType: 'tops'
                        })
                        const query = { _id: top?.id}
                        await SilhouetteModel.findOneAndUpdate(query, {
                            width: mannequin?.[0]?.width || '',
                            height: mannequin?.[0]?.height || '',
                        }, { upsert: true });
                    })

                    JSON.parse(bottoms)?.map(async (bottom: Record<string, any>) => {
                        await GarmentSilhouettesModel.create({
                            silhouette_id: bottom?.id,
                            garment_id: garment?._id,
                            order: bottom?.order || 1,
                            silhouetteType: 'bottoms'
                        })
                        const query = { _id: bottom?.id}
                        await SilhouetteModel.findOneAndUpdate(query, {
                            width: mannequin?.[0]?.width || '',
                            height: mannequin?.[0]?.height || '',
                        }, { upsert: true });
                    })

                    JSON.parse(sleeves)?.map(async (sleeve: Record<string, any>) => {
                        await GarmentSilhouettesModel.create({
                            silhouette_id: sleeve?.id,
                            garment_id: garment?._id,
                            order: sleeve?.order || 1,
                            silhouetteType: 'sleeves'
                        })
                        const query = { _id: sleeve?.id}
                        await SilhouetteModel.findOneAndUpdate(query, {
                            width: mannequin?.[0]?.width || '',
                            height: mannequin?.[0]?.height || '',
                        }, { upsert: true });
                    })

                    if(Object.keys(JSON.parse(palettes))?.length) {
                        const { colors = [], prints = []} = JSON.parse(palettes);
                        
                        colors?.map(async (palette_id: string) => {
                            await GarmentPalettesModel.create({
                                palette_id,
                                garment_id: garment?._id,
                                palette_type: 'colors'
                            })
                        })

                        prints?.map(async (palette_id: string) => {
                            await GarmentPalettesModel.create({
                                palette_id,
                                garment_id: garment?._id,
                                palette_type: 'prints'
                            })
                        })
                    }
                }
                return garment;
            }
            return false;

        } catch (error) {
            console.log(error)
        }
    }

    async getGarmentsAdmin() {
        const garments = await getGarmentsQuery(true)
        return garments
    }

    async getGarmentAdmin(garment_id: string = '') {
        const garment = await getGarmentQuery(garment_id, true)
        return garment
    }

    async editGarment(req: Record<string, any>) {
        try {
            const { bottoms = [], name = '', mannequin_id = '', sleeves = [], tops = [], id = '', palettes = {} } = req.body || {}
            const { background = '' } = req.files || {};
            if (id) {
                const query = { '_id': id };
                await GarmentModel.findOneAndUpdate(query, {
                    name,
                    mannequin_id
                }, { upsert: true });
                if (background) {
                    if (typeof background === 'string') {
                        await GarmentModel.findOneAndUpdate(query, {
                            background: background,
                        }, { upsert: true })
                    } else {
                        await createGarmentsDirsIfNotExists()
                        const newName = uuidv4()
                        const fileType = getFileOriginalMimeType(background.data)
                        const garmentImage = newName + fileType
                        const filePath = path.join(__dirname, `../../uploads/garments`, garmentImage);
                        fs.writeFileSync(filePath, background.data);
                        await GarmentModel.findOneAndUpdate(query, {
                            background: garmentImage,
                        }, { upsert: true })
                    }
                }
                await updateGarmentsQuery(id, JSON.parse(tops), 'tops', mannequin_id)
                await updateGarmentsQuery(id, JSON.parse(bottoms), 'bottoms', mannequin_id)
                await updateGarmentsQuery(id, JSON.parse(sleeves), 'sleeves', mannequin_id)
                const parsedPalettes = JSON.parse(palettes)
                if (Object.keys(parsedPalettes)?.length) {
                    await updateGarmentPalettesQuery(id, parsedPalettes?.colors, 'colors')
                    await updateGarmentPalettesQuery(id, parsedPalettes?.prints, 'prints')
                }
                const garments = await GarmentModel.find({})
                return garments
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
                throw new Error('Invalid garment_id');
            }

            const query = { '_id': _id };
            await GarmentModel.deleteOne(query);
            const garments = await GarmentModel.find({})
            return garments

        } catch (error) {
            console.log(error)
        }
    }

    async searchGarmentsAdmin(criteria: string) {
        const garments = await searchGarmentsQuery(criteria, true)
        return garments
    }

}

export default new AdminService();