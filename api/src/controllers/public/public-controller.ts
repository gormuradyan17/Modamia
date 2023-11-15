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

    async getPrints(req: any, res: any, next: any) {
        try {
            const prints = await publicService.getPrints();
            return res.json(prints);
        } catch (error) {
            next(error);
        }
    }

    async getMannequins(req: any, res: any, next: any) {
        try {
            const prints = await publicService.getMannequins();
            return res.json(prints);
        } catch (error) {
            next(error);
        }
    }
}

export default new PublicController()
