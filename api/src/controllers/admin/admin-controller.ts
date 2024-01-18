import adminService from '../../services/admin-service'

import { validationResult } from 'express-validator'
import ApiError from '../../exceptions/api-error'

class AdminController {

    // Auth

    async signin(req: any, res: any, next: any) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                res.status(400).json({ msg: 'Validation error', errors: errors.array() });
            }
            const adminData = await adminService.signin(req.body);
            res.cookie('refreshToken', adminData?.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            })
            return res.json(adminData);
        } catch (error) {
            next(error);
        }
    }

    async refresh(req: any, res: any, next: any) {
        try {
            const { refreshToken } = req.cookies;
            const adminData = await adminService.refresh(refreshToken);
            return res.json(adminData);
        } catch (error) {
            return res.status(400).json({ msg: 'User is not authentificated', errors: [] });
        }
    }

    async signout(req: any, res: any, next: any) {
        try {
            const { refreshToken } = req.cookies;
            const token = await adminService.signout(refreshToken)
            res.clearCookie('refreshToken');
            return res.json(token);
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

    async removeMannequin(req: any, res: any, next: any) {
        try {
            const color = await adminService.removeMannequin(req.body);
            return res.json(color);
        } catch (error) {
            next(error);
        }
    }

    // Silhouette

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

    async removeSilhouette(req: any, res: any, next: any) {
        try {
            const color = await adminService.removeSilhouette(req.body);
            return res.json(color);
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

    async removeSize(req: any, res: any, next: any) {
        try {
            const color = await adminService.removeSize(req.body);
            return res.json(color);
        } catch (error) {
            next(error);
        }
    }

    // Super Admins

    async getSuperAdmins(req: any, res: any, next: any) {
        try {
            const superAdmins = await adminService.getSuperAdmins(req.body);
            return res.json(superAdmins);
        } catch (error) {
            next(error);
        }
    }

    async addSuperAdmin(req: any, res: any, next: any) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                res.status(400).json({ msg: 'Validation error', errors: errors.array() });
            }
            const superAdmin = await adminService.addSuperAdmin(req.body);
            return res.json(superAdmin);
        } catch (error) {
            next(error);
        }
    }

    async editSuperAdmin(req: any, res: any, next: any) {
        try {
            const superAdmin = await adminService.editSuperAdmin(req.body);
            return res.json(superAdmin);
        } catch (error) {
            next(error);
        }
    }

    async removeSuperAdmin(req: any, res: any, next: any) {
        try {
            const admin = await adminService.removeSuperAdmin(req.body);
            return res.json(admin)
        } catch (error) {
            next(error);
        }
    }

    // Garment

    async addGarment(req: any, res: any, next: any) {
        try {
            const garment = await adminService.addGarment(req);
            return res.json(garment);
        } catch (error) {
            next(error);
        }
    }

    async getGarmentsAdmin(req: any, res: any, next: any) {
        try {
            const garments = await adminService.getGarmentsAdmin();
            return res.json(garments);
        } catch (error) {
            next(error);
        }
    }

    async getGarmentAdmin(req: any, res: any, next: any) {
        try {
            const { garment_id = '' } = req.body
            const garment = await adminService.getGarmentAdmin(garment_id);
            return res.json(garment);
        } catch (error) {
            next(error);
        }
    }

    async editGarment(req: any, res: any, next: any) {
        try {
            const garment = await adminService.editGarment(req);
            return res.json(garment);
        } catch (error) {
            next(error);
        }
    }

    async removeGarment(req: any, res: any, next: any) {
        try {
            const garment = await adminService.removeGarment(req.body);
            return res.json(garment);
        } catch (error) {
            next(error);
        }
    }

    async searchGarmentsAdmin(req: any, res: any, next: any) {
        try {
            const { criteria = '' } = req.body
            const garments = await adminService.searchGarmentsAdmin(criteria);
            return res.json(garments);
        } catch (error) {
            next(error);
        }
    }

}

export default new AdminController()