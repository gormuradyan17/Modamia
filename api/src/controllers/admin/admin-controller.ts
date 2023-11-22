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

    async addColorVariant(req: any, res: any, next: any) {
        try {
            const colorVariant = await adminService.addColorVariant(req.body);
            return res.json(colorVariant);
        } catch (error) {
            next(error);
        }
    }

    async addColorPalette(req: any, res: any, next: any) {
        try {
            const colorPalette = await adminService.addColorPalette(req.body);
            return res.json(colorPalette);
        } catch (error) {
            next(error);
        }
    }

    async removeColorPalette(req: any, res: any, next: any) {
        try {
            const colorPalette = await adminService.removeColorPalette(req.body);
            return res.json(colorPalette);
        } catch (error) {
            next(error);
        }
    }

    async orderPaletteColors(req: any, res: any, next: any) {
        try {
            const colorPalette = await adminService.orderPaletteColors(req.body);
            return res.json(colorPalette);
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

    async addPrintVariant(req: any, res: any, next: any) {
        try {
            const print = await adminService.addPrintVariant(req.body);
            return res.json(print);
        } catch (error) {
            next(error);
        }
    }

    // Mannequins

    async addManequin(req: any, res: any, next: any) {
        try {
            const mannequin = await adminService.addMannequin(req);
            return res.json(mannequin);
        } catch (error) {
            next(error);
        }
    }

    async editMannequin(req: any, res: any, next: any) {
        try {
            const mannequin = await adminService.editMannequin(req);
            return res.json(mannequin);
        } catch (error) {
            next(error);
        }
    }

    // Mannequins

    async addSilhouette(req: any, res: any, next: any) {
        try {
            const silhouette = await adminService.addSilhouette(req);
            return res.json(silhouette);
        } catch (error) {
            next(error);
        }
    }

    async editSilhouette(req: any, res: any, next: any) {
        try {
            const silhouette = await adminService.editSilhouette(req);
            return res.json(silhouette);
        } catch (error) {
            next(error);
        }
    }

    // Size

    async addSize(req: any, res: any, next: any) {
        try {
            const size = await adminService.addSize(req.body);
            return res.json(size);
        } catch (error) {
            next(error);
        }
    }

    async editSize(req: any, res: any, next: any) {
        try {
            const size = await adminService.editSize(req.body);
            return res.json(size);
        } catch (error) {
            next(error);
        }
    }

}

export default new AdminController()