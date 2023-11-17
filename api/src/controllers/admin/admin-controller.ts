import adminService from '../../services/admin-service'

class AdminController {

    // Colors

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

    // Mannequins

    async addManequin(req: any, res: any, next: any) {
        try {
            const print = await adminService.addMannequin(req);
            return res.json(print);
        } catch (error) {
            next(error);
        }
    }

    async editMannequin(req: any, res: any, next: any) {
        try {
            const print = await adminService.editMannequin(req);
            return res.json(print);
        } catch (error) {
            next(error);
        }
    }

    // Mannequins

    async addSilhouette(req: any, res: any, next: any) {
        try {
            const print = await adminService.addSilhouette(req);
            return res.json(print);
        } catch (error) {
            next(error);
        }
    }

    async editSilhouette(req: any, res: any, next: any) {
        try {
            const print = await adminService.editSilhouette(req);
            return res.json(print);
        } catch (error) {
            next(error);
        }
    }

}

export default new AdminController()