import adminService from '../../services/admin-service'

class AdminController {

    // Colors

    async getColors(req: any, res: any, next: any) {
        try {
            const colors = await adminService.getColors();
            return res.json(colors);
        } catch (error) {
            next(error);
        }
    }

    async addColor(req: any, res: any, next: any) {
        try {
            const color = await adminService.addColor(req.body);
            return res.json(color);
        } catch (error) {
            next(error);
        }
    }

    async editColor(req: any, res: any, next: any) {
        try {
            const color = await adminService.editColor(req.body);
            return res.json(color);
        } catch (error) {
            next(error);
        }
    }

    // Prints

    async getPrints(req: any, res: any, next: any) {
        try {
            const prints = await adminService.getPrints();
            return res.json(prints);
        } catch (error) {
            next(error);
        }
    }

    async addPrint(req: any, res: any, next: any) {
        try {
            const print = await adminService.addPrint(req);
            return res.json(print);
        } catch (error) {
            next(error);
        }
    }

    async editPrint(req: any, res: any, next: any) {
        try {
            const print = await adminService.editPrint(req);
            return res.json(print);
        } catch (error) {
            next(error);
        }
    }

}

export default new AdminController()