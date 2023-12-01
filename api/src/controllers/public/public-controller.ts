import publicService from '../../services/public-service'

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
            const {color_id = '', variant_id = ''} = req.query
            const palettes = await publicService.getColorsPalettes(color_id, variant_id);
            return res.json(palettes);
        } catch (error) {
            next(error);
        }
    }

    async getPrints(req: any, res: any, next: any) {
        try {
            const {variant = ''} = req.query
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
            const {print_id = '', variant_id = ''} = req.query
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
}

export default new PublicController()
