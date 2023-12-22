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
import bcrypt from 'bcryptjs'

class PublicService {

    // Auth

    async signin(req: any) {
        try {
            const { email } = req

            var user = await UserModel.findOne({ email })
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
            const hashPassword = await bcrypt.hash(password, 10)
            const user = await UserModel.create({email, name, password: hashPassword})
            
            // const userDto = new UserDto(user);
            // const tokens = tokenService.generateTokens({...userDto});
            // await tokenService.saveToken(userDto.id, false, tokens.refreshToken);
            
            // return {...tokens,user: userDto}

            return user;
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

    async edit(req: any) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await tokenService.findUserByToken(refreshToken);
            const query = { _id: userData?._id};
            await UserModel.findOneAndUpdate(query, req.body, { upsert: true });
            const data = await UserModel.find({})
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async getColors() {
        const colors = await ColorModel.find({})
        return colors;
    }

    async getColorsVariants() {
        const colorsVariants = await ColorVariantModel.find({}).sort({ createdAt: 1 });
        return colorsVariants;
    }

    async getColorsPalettes(color_id: string = '', variant_id: string = '') {
        const colorsPalettes = await ColorPaletteModel.aggregate([
            {
                $match: {
                    ...(color_id && { color_id }),
                    ...(variant_id && { variant_id })
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

    async getPrints(variant: string = '') {
        const prints = await PrintModel.find({
            ...(variant && { printVariant: variant })
        })
        return prints;
    }

    async getPrintsVariants() {
        const prints = await PrintVariantMotel.find({});
        return prints;
    }

    async getPrintsPalettes(print_id: string = '', variant_id: string = '') {
        const printsPalettes = await PrintPaletteModel.aggregate([
            {
                $match: {
                    ...(print_id && { print_id }),
                    ...(variant_id && { variant_id })
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
            const data = await CartModel.create({ user_id: userData?._id , details })
            return data
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async removeCart(body: any) {
        try {
            const { cart_id } = body;
            const query = { '_id': cart_id}
            await ColorVariantModel.deleteOne(query);
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

}

export default new PublicService();