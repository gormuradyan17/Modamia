import adminService from '../../services/admin-service'

class AdminController {
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

}

export default new AdminController()