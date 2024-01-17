import ColorModel from '../models/Color'
import ColorVariantModel from '../models/ColorVariant'
import ColorPaletteModel from '../models/ColorPalette'
import PrintModel from '../models/Print'
import PrintVariantMotel from '../models/PrintVariant'
import PrintPaletteModel from '../models/PrintPalette'
import MannequinModel from '../models/Mannequin'
import SilhouetteModel from '../models/Silhouette'
import SizeModel from '../models/Size'
import CartModel from '../models/Cart'
import { getGarmentQuery, getGarmentsByCartQuery, getGarmentsQuery, searchGarmentsQuery } from '../queries/GarmentsQueries'
import UserModel from '../models/User'
import UserDto from '../dtos/user-dto';
import tokenService from './token-service';
import ApiError from '../exceptions/api-error';
import bcrypt from 'bcryptjs';
import { ColorPaletteInterface } from '../models/ColorPalette';
import { PrintPaletteInterface } from '../models/PrintPalette';
import { ObjectId } from 'mongodb';
import PrintVariantModel from '../models/PrintVariant'
import { createPrintsDirsIfNotExists, getFileOriginalMimeType } from '../helpers/helper'
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import path from 'path'
import fs from 'fs'
import { forgotMail, signupMail } from './mail-service'
import { NODE_BASE_URL } from '../utils/constants/variables'

class PublicService {

    // Auth

    async signin(req: any) {
        try {
            const { email } = req

            const user = await UserModel.findOne({ email })
            const userDto = new UserDto(user);
            const tokens = tokenService.generateTokens({ ...userDto });
            await tokenService.saveTokenUser(userDto.id, tokens.refreshToken);
            return { ...tokens, user: userDto }

        } catch (error) {
            console.log(error)
        }
    }

    async signup(body: any) {
        try {
            const { email, password, name } = body;
            const activationLink = uuidv4();
            const hashPassword = await bcrypt.hash(password, 10)
            const user = await UserModel.create({ email, name, password: hashPassword, code: activationLink })

            // const userDto = new UserDto(user);
            // const tokens = tokenService.generateTokens({...userDto});
            // await tokenService.saveToken(userDto.id, false, tokens.refreshToken);

            // return {...tokens,user: userDto}

            await signupMail(email, `${NODE_BASE_URL}/api/activate/${activationLink}`)
            return true;
        } catch (error) {
            console.log(error)
        }
    }

    async refresh(refreshToken: any) {
        try {
            if (!refreshToken) {
                throw ApiError.UnauthorizedError();
            }
            const userData = tokenService.validateRefreshToken(refreshToken);
            const tokenFromDb = await tokenService.findTokenUser(refreshToken);
            if (!userData || !tokenFromDb) {
                throw ApiError.UnauthorizedError();
            }
            if (await tokenService.verifyExpiration(refreshToken) === true) {
                tokenService.removeTokenUser(refreshToken);
                throw ApiError.UnauthorizedError();
            }
            const user = await UserModel.findById(userData.id);
            const useDto = new UserDto(user);

            return { user: useDto }
        } catch (error) {
            throw ApiError.UnauthorizedError();
        }
    }

    async signout(refreshToken: any) {
        await tokenService.removeTokenUser(refreshToken);
        return true;
    }

    async activate(activationLink: string) {
        const user = await UserModel.findOne({ code: activationLink })
        if (!user) {
            throw ApiError.BadRequest('Incorrect activation link')
        }
        user.verified = true;
        user.code = ''
        await user.save();

        return true;
    }

    async forgot(email: string) {
        const user = await UserModel.findOne({ email })
        if (!user) {
            throw ApiError.BadRequest('Incorrect activation link')
        }
        const activationLink = uuidv4();
        user.code = activationLink;
        await user.save();
        await forgotMail(email, `${NODE_BASE_URL}/api/recovery/${activationLink}`)
        return true;
    }

    async recovery(activationLink: string) {
        const user = await UserModel.findOne({ code: activationLink })
        if (!user) {
            throw ApiError.BadRequest('Incorrect recovery link')
        }
        return true;
    }

    async recoveryPassword(req: any) {
        const { password = '', code = '' } = req;
        if (!password || !code) throw ApiError.BadRequest('Incorrect recovery link')

        const hashPassword = await bcrypt.hash(password, 10)
        const query = { code };

        await UserModel.findOneAndUpdate(query, {
            code: '',
            password: hashPassword
        }, { upsert: true });

        return true;
    }


    async edit(req: any) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const query = { _id: userData?._id };
            await UserModel.findOneAndUpdate(query, req.body, { upsert: true });
            const data = await UserModel.find({})
            return data
        } catch (error) {
            console.log(error)
        }
    }


    // Colors 

    async addColor(req: any) {
        try {
            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id = '' } = userData;
            const { name, hexcode, pantonecode, tags, colorPalettes = [] } = req.body;
            const color = await ColorModel.create({
                name,
                hexcode,
                pantonecode,
                tags,
                ...(_id && { user_id: _id })
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
            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id = '' } = userData;
            const query = { '_id': req.body._id, ...(_id && { user_id: _id }) };
            await ColorModel.findOneAndUpdate(query, req.body, { upsert: true });
            const colors = await ColorModel.find({ ...(_id && { user_id: _id }) })
            return colors
        } catch (error) {
            console.log(error)
        }
    }

    async addColorVariant(req: Record<string, any>) {
        try {
            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id = '' } = userData;
            const { name } = req.body
            const colorVariant = await ColorVariantModel.create({
                name,
                ...(_id && { user_id: _id })
            })
            return colorVariant;

        } catch (error) {
            console.log(error)
        }
    }

    async addColorPalette(req: Record<string, any>) {
        try {
            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id = '' } = userData;
            const { color_id, variant_id } = req.body
            const count = await ColorPaletteModel.find({
                variant_id: new ObjectId(variant_id),
                ...(_id && { user_id: _id })
            }).count()
            const colorPalette = await ColorPaletteModel.create({
                color_id,
                variant_id,
                order: count + 1,
                ...(_id && { user_id: _id })
            })
            return colorPalette;

        } catch (error) {
            console.log(error)
        }
    }

    async removeColorPalette(req: any) {
        try {
            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id: user_id = '' } = userData;

            const { _id = '' } = req.body
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                throw new Error('Invalid palette_id');
            }
            const query = { '_id': _id, ...(user_id && { user_id }) };
            const queryPalette = { 'variant_id': _id, ...(user_id && { user_id }) };
            await ColorVariantModel.deleteOne(query);
            return await ColorPaletteModel.deleteMany(queryPalette)

        } catch (error) {
            console.log(error)
        }
    }

    async orderPaletteColors(req: any) {
        try {
            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id: user_id = '' } = userData;

            const { fromElement = {}, toElement = {} } = req.body
            const { _id = '', order = undefined } = fromElement;
            const { _id: id_to = '', order: order_to = undefined } = toElement;
            if (_id && order && id_to && order_to) {
                const queryFrom = {
                    _id,
                    order,
                    ...(user_id && { user_id })
                }
                await ColorPaletteModel.findOneAndUpdate(queryFrom, {
                    order: order_to,
                }, { upsert: true });

                const queryTo = {
                    _id: id_to,
                    order: order_to,
                    ...(user_id && { user_id })
                }

                await ColorPaletteModel.findOneAndUpdate(queryTo, {
                    order,
                }, { upsert: true });
            }
            const colorsPalettes = await ColorPaletteModel.aggregate([
                { $sort: { order: 1 } },
                {
                    $match: {
                        ...(user_id && { user_id }),
                    }
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
            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id: user_id = '' } = userData;

            const { _id = '' } = req.body
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                throw new Error('Invalid palette_id');
            }

            const query = { '_id': _id, ...(user_id && { user_id }) };
            const queryPalette = { 'color_id': _id, ...(user_id && { user_id }) };
            await ColorModel.deleteOne(query);
            await ColorPaletteModel.deleteMany(queryPalette)
            const colors = ColorModel.find({ ...(user_id && { user_id }) })
            return colors;
        } catch (error) {
            console.log(error)
        }
    }

    async getColors(refreshToken: any = '') {

        const userData = await tokenService.findUserByToken(refreshToken);

        const colors = await ColorModel.find({
            $or: [
                { user_id: userData?._id },
                { user_id: { $exists: false } }
            ]
        })
        return colors;
    }

    async getColorsVariants(refreshToken: any = '') {

        const userData = await tokenService.findUserByToken(refreshToken);

        const colorsVariants = await ColorVariantModel.find({
            $or: [
                { user_id: userData?._id },
                { user_id: { $exists: false } }
            ]
        }).sort({ createdAt: 1 });
        return colorsVariants;
    }

    async getColorsPalettes(color_id: string = '', variant_id: string = '', refreshToken: any = '') {

        const userData = await tokenService.findUserByToken(refreshToken);

        const colorsPalettes = await ColorPaletteModel.aggregate([
            {
                $match: {
                    ...(color_id && { color_id }),
                    ...(variant_id && { variant_id }),
                    $or: [
                        { user_id: userData?._id },
                        { user_id: { $exists: false } }
                    ]
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

    // Prints

    async addPrint(req: any) {
        try {
            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id: user_id = '' } = userData;

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
                ...(user_id && { user_id })
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

            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id: user_id = '' } = userData;

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
            const query = { '_id': _id, ...(user_id && { user_id }) };
            await PrintModel.findOneAndUpdate(query, {
                name,
                price,
                tags,
                printVariant,
                ...(highImage && { highresurl: highImage }),
                ...(previewImage && { previewurl: previewImage }),
                ...(user_id && { user_id })
            }, { upsert: true });
            const prints = await PrintModel.find({})
            return prints;

        } catch (error) {
            console.log(error)
        }
    }

    async addPrintVariant(req: Record<string, any>) {
        try {

            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id: user_id = '' } = userData;

            const { name } = req.body
            const printVariant = await PrintVariantModel.create({
                name,
                ...(user_id && { user_id })
            })
            return printVariant;
        } catch (error) {
            console.log(error)
        }
    }

    async addPrintPalette(req: any) {
        try {

            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id: user_id = '' } = userData;

            const { print_id, variant_id } = req.body
            const count = await PrintPaletteModel.find({
                variant_id: new ObjectId(variant_id),
                ...(user_id && { user_id })
            }).count()
            const printPalette = await PrintPaletteModel.create({
                print_id,
                variant_id,
                order: count + 1,
                ...(user_id && { user_id })
            })
            return printPalette;

        } catch (error) {
            console.log(error)
        }
    }

    async removePrintPalette(req: any) {
        try {

            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id: user_id = '' } = userData;

            const { _id = '' } = req.body
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                throw new Error('Invalid palette_id');
            }

            const query = { '_id': _id, ...(user_id && { user_id }) };
            const queryPalette = { 'variant_id': _id, ...(user_id && { user_id }) };
            await PrintVariantModel.deleteOne(query);
            await PrintPaletteModel.deleteMany(queryPalette)
            const palettes = await PrintPaletteModel.find({ ...(user_id && { user_id }) })
            return palettes

        } catch (error) {
            console.log(error)
        }
    }

    async orderPalettePrints(req: any) {
        try {

            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id: user_id = '' } = userData;

            const { fromElement = {}, toElement = {} } = req.body
            const { _id = '', order = undefined } = fromElement;
            const { _id: id_to = '', order: order_to = undefined } = toElement;
            if (_id && order && id_to && order_to) {
                const queryFrom = {
                    _id,
                    order,
                    ...(user_id && { user_id })
                }
                await PrintPaletteModel.findOneAndUpdate(queryFrom, {
                    order: order_to,
                }, { upsert: true });

                const queryTo = {
                    _id: id_to,
                    order: order_to,
                    ...(user_id && { user_id })
                }

                await PrintPaletteModel.findOneAndUpdate(queryTo, {
                    order,
                }, { upsert: true });
            }
            const printPalettes = await PrintPaletteModel.aggregate([
                { $sort: { order: 1 } },
                {
                    $match: {
                        ...(user_id && { user_id }),
                    }
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

            const { refreshToken = '' } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const { _id: user_id = '' } = userData;

            const { _id = '' } = req.body
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                throw new Error('Invalid palette_id');
            }

            const query = { '_id': _id, ...(user_id && { user_id }) };
            const queryPalette = { 'print_id': _id, ...(user_id && { user_id }) };
            await PrintModel.deleteOne(query);
            await PrintPaletteModel.deleteMany(queryPalette)
            const prints = await PrintModel.find({ ...(user_id && { user_id }) })
            return prints;

        } catch (error) {
            console.log(error)
        }
    }

    async getPrints(variant: string = '', refreshToken: any = '') {

        const userData = await tokenService.findUserByToken(refreshToken);

        const prints = await PrintModel.find({
            ...(variant && { printVariant: variant }),
            $or: [
                { user_id: userData?._id },
                { user_id: { $exists: false } }
            ]
        })
        return prints;
    }

    async getPrintsVariants(refreshToken: any = '') {

        const userData = await tokenService.findUserByToken(refreshToken);

        const prints = await PrintVariantMotel.find({
            $or: [
                { user_id: userData?._id },
                { user_id: { $exists: false } }
            ]
        });
        return prints;
    }

    async getPrintsPalettes(print_id: string = '', variant_id: string = '', refreshToken: any = '') {

        const userData = await tokenService.findUserByToken(refreshToken);
        const printsPalettes = await PrintPaletteModel.aggregate([
            {
                $match: {
                    ...(print_id && { print_id }),
                    ...(variant_id && { variant_id }),
                    $or: [
                        { user_id: userData?._id },
                        { user_id: { $exists: false } }
                    ]
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

    async getGarments(user_id: string = '') {
        if (user_id) {
            const garments = await getGarmentsByCartQuery(false, user_id)
            return garments;
        }
        return await getGarmentsQuery(false)
    }

    async getGarment(garment_id: string = '', refreshToken: any) {
        const userData = await tokenService.findUserByToken(refreshToken);
        const garment = await getGarmentQuery(garment_id, false, false, userData?._id)
        return garment
    }

    async searchGarments(criteria: string, user_id: string) {
        const garments = await searchGarmentsQuery(criteria, false, user_id)
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

    async addCart(body: any, refreshToken: any) {
        try {
            const { details } = body;
            const userData = await tokenService.findUserByToken(refreshToken);
            const data = await CartModel.create({ user_id: userData?._id, details })
            return data
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async removeCart(body: any, refreshToken: any) {
        try {
            const { cart_id } = body;
            const userData = await tokenService.findUserByToken(refreshToken);
            const query = { 'details.id': cart_id, user_id: userData.id }
            await CartModel.deleteOne(query);
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async editCart(body: any, refreshToken: any) {
        try {
            const { details, _id } = body;
            const userData = await tokenService.findUserByToken(refreshToken);
            const query = { user_id: new ObjectId(userData?._id), _id }
            const data = await CartModel.find(query)
            if (data && data.length) {
                return await CartModel.findOneAndUpdate(query, { details }, { upsert: true });
            }
            return false
        } catch (error) {
            console.log(error)
            return false;
        }
    }

}

export default new PublicService();