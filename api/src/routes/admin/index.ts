const router = require("express").Router();
import adminController from '../../controllers/admin/admin-controller'

// Colors

router.post('/add-color', adminController.addColor)
router.post('/edit-color', adminController.editColor)
router.post('/add-color-variant', adminController.addColorVariant)

// Prints

router.post('/add-print', adminController.addPrint)
router.post('/edit-print', adminController.editPrint)
router.post('/add-print-variant', adminController.addPrintVariant)

// Prints

router.post('/add-mannequin', adminController.addManequin)
router.post('/edit-mannequin', adminController.editMannequin)

// Silhouettes

router.post('/add-silhouette', adminController.addSilhouette)
router.post('/edit-silhouette', adminController.editSilhouette)

export default router
