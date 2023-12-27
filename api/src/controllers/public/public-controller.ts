import { body, validationResult } from 'express-validator';
import authService from '../../services/auth-service';
import publicService from '../../services/public-service'
import { REACT_BASE_URL } from '../../utils/constants/variables';
import ApiError from '../../exceptions/api-error';

class PublicController {

    // Colors

    async addColor(req: any, res: any, next: any) {
        try {
            const color = await publicService.addColor(req);
            return res.json(color);
        } catch (error) {
            next(error);
        }
    }

    async editColor(req: any, res: any, next: any) {
        try {
            const color = await publicService.editColor(req);
            return res.json(color);
        } catch (error) {
            next(error);
        }
    }

    async addColorVariant(req: any, res: any, next: any) {
        try {
            const colorVariant = await publicService.addColorVariant(req);
            return res.json(colorVariant);
        } catch (error) {
            next(error);
        }
    }

    async addColorPalette(req: any, res: any, next: any) {
        try {
            const colorPalette = await publicService.addColorPalette(req);
            return res.json(colorPalette);
        } catch (error) {
            next(error);
        }
    }

    async removeColorPalette(req: any, res: any, next: any) {
        try {
            const colorPalette = await publicService.removeColorPalette(req);
            return res.json(colorPalette);
        } catch (error) {
            next(error);
        }
    }

    async orderPaletteColors(req: any, res: any, next: any) {
        try {
            const colorPalette = await publicService.orderPaletteColors(req);
            return res.json(colorPalette);
        } catch (error) {
            next(error);
        }
    }

    async removeColor(req: any, res: any, next: any) {
        try {
            const color = await publicService.removeColor(req);
            return res.json(color);
        } catch (error) {
            next(error);
        }
    }

    async getColors(req: any, res: any, next: any) {
        try {
            // const { user_id = '' } = req.body;
            const { refreshToken } = req.cookies;
            const colors = await publicService.getColors(refreshToken);
            return res.json(colors);
        } catch (error) {
            next(error);
        }
    }

    async getColorsVariants(req: any, res: any, next: any) {
        try {
            // const { user_id = '' } = req.body
            const { refreshToken } = req.cookies;
            const variants = await publicService.getColorsVariants(refreshToken);
            return res.json(variants);
        } catch (error) {
            next(error);
        }
    }

    async getColorsPalettes(req: any, res: any, next: any) {
        try {
            const { color_id = '', variant_id = '', user_id = '' } = req.body;
            const { refreshToken } = req.cookies;
            const palettes = await publicService.getColorsPalettes(color_id, variant_id, refreshToken);
            return res.json(palettes);
        } catch (error) {
            next(error);
        }
    }

    // Prints

    async addPrint(req: any, res: any, next: any) {
        try {
            const print = await publicService.addPrint(req);
            return res.json(print);
        } catch (error) {
            next(error);
        }
    }

    async editPrint(req: any, res: any, next: any) {
        try {
            const print = await publicService.editPrint(req);
            return res.json(print);
        } catch (error) {
            next(error);
        }
    }

    async addPrintVariant(req: any, res: any, next: any) {
        try {
            const print = await publicService.addPrintVariant(req);
            return res.json(print);
        } catch (error) {
            next(error);
        }
    }

    async addPrintPalette(req: any, res: any, next: any) {
        try {
            const printPalette = await publicService.addPrintPalette(req);
            return res.json(printPalette);
        } catch (error) {
            next(error);
        }
    }

    async removePrintPalette(req: any, res: any, next: any) {
        try {
            const printPalette = await publicService.removePrintPalette(req);
            return res.json(printPalette);
        } catch (error) {
            next(error);
        }
    }

    async orderPalettePrints(req: any, res: any, next: any) {
        try {
            const printPalette = await publicService.orderPalettePrints(req);
            return res.json(printPalette);
        } catch (error) {
            next(error);
        }
    }

    async removePrint(req: any, res: any, next: any) {
        try {
            const color = await publicService.removePrint(req);
            return res.json(color);
        } catch (error) {
            next(error);
        }
    }

    async getPrints(req: any, res: any, next: any) {
        try {
            const { variant = '', user_id = '' } = req.body
            const { refreshToken } = req.cookies;
            const prints = await publicService.getPrints(variant, refreshToken);
            return res.json(prints);
        } catch (error) {
            next(error);
        }
    }

    async getPrintsVariants(req: any, res: any, next: any) {
        try {
            // const { user_id = '' } = req.body
            const { refreshToken } = req.cookies;
            const prints = await publicService.getPrintsVariants(refreshToken);
            return res.json(prints);
        } catch (error) {
            next(error);
        }
    }

    async getPrintsPalettes(req: any, res: any, next: any) {
        try {
            const { print_id = '', variant_id = '', user_id = '' } = req.body
            const { refreshToken } = req.cookies;
            const palettes = await publicService.getPrintsPalettes(print_id, variant_id, refreshToken);
            return res.json(palettes);
        } catch (error) {
            next(error);
        }
    }

    async getSizes(req: any, res: any, next: any) {
        try {
            const sizes = await publicService.getSizes();
            return res.json(sizes);
        } catch (error) {
            next(error);
        }
    }

    async getMannequins(req: any, res: any, next: any) {
        try {
            const mannequins = await publicService.getMannequins();
            return res.json(mannequins);
        } catch (error) {
            next(error);
        }
    }

    async getGarments(req: any, res: any, next: any) {
        try {
            const { user_id = '' } = req.body;
            const garments = await publicService.getGarments(user_id);
            return res.json(garments);
        } catch (error) {
            next(error);
        }
    }

    async getGarment(req: any, res: any, next: any) {
        try {
            const { garment_id = '' } = req.body;
            const { refreshToken } = req.cookies;
            const garment = await publicService.getGarment(garment_id, refreshToken);
            return res.json(garment);
        } catch (error) {
            next(error);
        }
    }

    async searchGarments(req: any, res: any, next: any) {
        try {
            const { criteria = '', user_id = '' } = req.body
            const garments = await publicService.searchGarments(criteria, user_id);
            return res.json(garments);
        } catch (error) {
            next(error);
        }
    }

    async getSilhouettes(req: any, res: any, next: any) {
        try {
            const silhouettes = await publicService.getSilhouettes();
            return res.json(silhouettes);
        } catch (error) {
            next(error);
        }
    }

    async getSilhouettesTypes(req: any, res: any, next: any) {
        try {
            const silhouettes = await publicService.getSilhouettesTypes();
            return res.json(silhouettes);
        } catch (error) {
            next(error);
        }
    }

    // Auth

    async signinShopify(req: any, res: any, next: any) {
        try {
            return res.redirect(await authService.signinShopify())
        } catch (err: any) {
            console.log(err)
        }
    }

    async redirectShopify(req: any, res: any, next: any) {
        const user = await authService.fetchShopifyUser(req.query.code)
        if (user && user?.token) {
            res.cookie('shopifyToken', user?.token, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
            })
        }
        return res.redirect(REACT_BASE_URL)
    }

    async getShopifyUser(req: any, res: any, next: any) {
        try {
            const { token = '' } = req.body
            const user = await authService.getShopifyUser(token);
            return res.json(user?.[0] || null);
        } catch (err: any) {
            console.log(err)
        }
    }

    async signin(req: any, res: any, next: any) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ msg: 'Validation error', errors: errors.array() });
            }
            const data = await publicService.signin(req.body);
            res.cookie('refreshToken', data?.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            })

            return res.json(data);
        } catch (error) {
            next(error);
        }
    }

    async signup(req: any, res: any, next: any) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ msg: 'Validation error', errors: errors.array() });
            }
            const userData = await publicService.signup(req.body);
            return res.json(userData);
        } catch (error) {
            next(error);
        }
    }

    async refresh(req: any, res: any, next: any) {
        try {
            const { refreshToken } = req.cookies;
            const data = await publicService.refresh(refreshToken);
            return res.json(data);
        } catch (error) {
            return res.status(400).json({ msg: 'User is not authentificated', errors: [] });
        }
    }

    async signout(req: any, res: any, next: any) {
        try {
            const { refreshToken } = req.cookies;
            const token = await publicService.signout(refreshToken)
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (error) {
            next(error);
        }
    }

    async activate(req: any, res: any, next: any) {
        try {
            const activationLink = req.params.link;
            await publicService.activate(activationLink);
            return res.redirect(`${REACT_BASE_URL}/signin`)
        } catch (error) {
            next(error);
        }
    }

    async forgot(req: any, res: any, next: any) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ msg: 'Validation error', errors: errors.array() });
            }
            const { email } = req.body;
            await publicService.forgot(email);
            return res.json(true);
        } catch (error) {
            next(error);
        }
    }

    async recovery(req: any, res: any, next: any) {
        try {
            const activationLink = req.params.link;
            const data = await publicService.recovery(activationLink);
            return data
                ? res.redirect(`${REACT_BASE_URL}/recovery/${activationLink}`)
                : res.redirect(`${REACT_BASE_URL}/signin`)
        } catch (error) {
            next(error);
        }
    }

    async recoveryPassword(req: any, res: any, next: any) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ msg: 'Validation error', errors: errors.array() });
            }
            await publicService.recoveryPassword(req.body);
            return res.json(true);
        } catch (error) {
            next(error);
        }
    }

    async edit(req: any, res: any, next: any) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ msg: 'Validation error', errors: errors.array() });
            }
            const data = await publicService.edit(req)
            return res.json(data);
        } catch (error) {
            next(error);
        }
    }

    async addCart(req: any, res: any, next: any) {
        try {
            const { refreshToken } = req.cookies;
            const data = await publicService.addCart(req.body, refreshToken)
            return res.json(data);
        } catch (error) {
            next(error);
        }
    }

    async removeCart(req: any, res: any, next: any) {
        try {
            const data = await publicService.removeCart(req.body)
            return res.json(data);
        } catch (error) {
            next(error);
        }
    }

    async editCart(req: any, res: any, next: any) {
        try {
            const { refreshToken } = req.cookies;
            const data = await publicService.editCart(req.body, refreshToken)
            return res.json(data);
        } catch (error) {
            next(error);
        }
    }
}

export default new PublicController()
