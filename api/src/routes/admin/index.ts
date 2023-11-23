const router = require("express").Router();
import adminController from '../../controllers/admin/admin-controller'

// Colors

router.post('/add-color', adminController.addColor)
router.post('/edit-color', adminController.editColor)
router.post('/add-color-variant', adminController.addColorVariant)
router.post('/add-color-palette', adminController.addColorPalette)
router.post('/remove-color-palette', adminController.removeColorPalette)
router.post('/order-palette-colors', adminController.orderPaletteColors)

// Prints

router.post('/add-print', adminController.addPrint)
router.post('/edit-print', adminController.editPrint)
router.post('/add-print-variant', adminController.addPrintVariant)
router.post('/add-print-palette', adminController.addPrintPalette)
router.post('/remove-print-palette', adminController.removePrintPalette)
router.post('/order-palette-prints', adminController.orderPalettePrints)

// Prints

router.post('/add-mannequin', adminController.addManequin)
router.post('/edit-mannequin', adminController.editMannequin)

// Silhouettes

router.post('/add-silhouette', adminController.addSilhouette)
router.post('/edit-silhouette', adminController.editSilhouette)

// Size

router.post('/add-size', adminController.addSize)
router.post('/edit-size', adminController.editSize)

export default router
