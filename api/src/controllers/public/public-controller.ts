import { validationResult } from 'express-validator';
import authService from '../../services/auth-service';
import publicService from '../../services/public-service'
import { REACT_BASE_URL } from '../../utils/constants/variables';
import ApiError from '../../exceptions/api-error';

class PublicController {

    async getColors(req: any, res: any, next: any) {
        try {
            const colors = await publicService.getColors();
            return res.json(colors);
        } catch (error) {
            next(error);
        }
    }

    async getColorsVariants(req: any, res: any, next: any) {
        try {
            const variants = await publicService.getColorsVariants();
            return res.json(variants);
        } catch (error) {
            next(error);
        }
    }

    async getColorsPalettes(req: any, res: any, next: any) {
        try {
            const { color_id = '', variant_id = '' } = req.query
            const palettes = await publicService.getColorsPalettes(color_id, variant_id);
            return res.json(palettes);
        } catch (error) {
            next(error);
        }
    }

    async getPrints(req: any, res: any, next: any) {
        try {
            const { variant = '' } = req.query
            const prints = await publicService.getPrints(variant);
            return res.json(prints);
        } catch (error) {
            next(error);
        }
    }

    async getPrintsVariants(req: any, res: any, next: any) {
        try {
            const prints = await publicService.getPrintsVariants();
            return res.json(prints);
        } catch (error) {
            next(error);
        }
    }

    async getPrintsPalettes(req: any, res: any, next: any) {
        try {
            const { print_id = '', variant_id = '' } = req.query
            const palettes = await publicService.getPrintsPalettes(print_id, variant_id);
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
            const garments = await publicService.getGarments();
            return res.json(garments);
        } catch (error) {
            next(error);
        }
    }

    async getGarment(req: any, res: any, next: any) {
        try {
            const { garment_id = '' } = req.body
            const garment = await publicService.getGarment(garment_id);
            return res.json(garment);
        } catch (error) {
            next(error);
        }
    }

    async searchGarments(req: any, res: any, next: any) {
        try {
            const { criteria = '' } = req.body
            const garments = await publicService.searchGarments(criteria);
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
                res.status(400).json({ msg: 'Validation error', errors: errors.array() });
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
                return next(ApiError.BadRequest('Validation error', errors.array()))
            }
            const userData = await publicService.signup(req.body);
            return res.json(userData);
        } catch (error) {
            next(error);
        }
    }

    async refresh(req: any, res: any, next: any) {
        try {
            const { refToken } = req.cookies;
            const data = await publicService.refresh(refToken);
            return res.json(data);
        } catch (error) {
            return res.status(400).json({ msg: 'User is not authentificated', errors: [] });
        }
    }

    async signout(req: any, res: any, next: any) {
        try {
            const { refToken } = req.cookies;
            const token = await publicService.signout(refToken)
            res.clearCookie('refToken');
            return res.json(token);
        } catch (error) {
            next(error);
        }
    }
}

export default new PublicController()
