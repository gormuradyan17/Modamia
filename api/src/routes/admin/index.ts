const router = require("express").Router();
import adminController from '../../controllers/admin/admin-controller'
import { authMiddleware } from '../../middlewares/auth';

import { adminSigninValidators, newAdminValidators } from '../../utils/validators/validators'


router.post('/signin', adminSigninValidators, adminController.signin)

// auth

router.use(authMiddleware);

router.post('/refresh', adminController.refresh)
router.post('/signout', adminController.signout)

// Colors

router.post('/add-color', adminController.addColor)
router.post('/edit-color', adminController.editColor)
router.post('/add-color-variant', adminController.addColorVariant)
router.post('/add-color-palette', adminController.addColorPalette)
router.post('/remove-color-palette', adminController.removeColorPalette)
router.post('/order-palette-colors', adminController.orderPaletteColors)
router.post('/remove-color', adminController.removeColor)

// Prints

router.post('/add-print', adminController.addPrint)
router.post('/edit-print', adminController.editPrint)
router.post('/add-print-variant', adminController.addPrintVariant)
router.post('/add-print-palette', adminController.addPrintPalette)
router.post('/remove-print-palette', adminController.removePrintPalette)
router.post('/order-palette-prints', adminController.orderPalettePrints)
router.post('/remove-print', adminController.removePrint)

// Prints

router.post('/add-mannequin', adminController.addManequin)
router.post('/edit-mannequin', adminController.editMannequin)
router.post('/remove-mannequin', adminController.removeMannequin)

// Silhouettes

router.post('/add-silhouette', adminController.addSilhouette)
router.post('/edit-silhouette', adminController.editSilhouette)
router.post('/remove-silhouette', adminController.removeSilhouette)

// Size

router.post('/add-size', adminController.addSize)
router.post('/edit-size', adminController.editSize)
router.post('/remove-size', adminController.removeSize)

// Super Admins

router.post('/add-super-admin', newAdminValidators, adminController.addSuperAdmin)
router.post('/edit-super-admin', adminController.editSuperAdmin)
router.post('/get-super-admins', adminController.getSuperAdmins)
router.post('/remove-super-admin', adminController.removeSuperAdmin)

// Garment

router.post('/add-garment', adminController.addGarment)
router.post('/edit-garment', adminController.editGarment)
router.post('/remove-garment', adminController.removeGarment)
router.post('/garments-admin', adminController.getGarmentsAdmin)
router.post('/garment-admin', adminController.getGarmentAdmin)

export default router
