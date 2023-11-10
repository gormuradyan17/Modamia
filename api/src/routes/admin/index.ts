const router = require("express").Router();
import adminController from '../../controllers/admin/admin-controller'

// Colors

router.post('/colors', adminController.getColors)
router.post('/add-color', adminController.addColor)
router.post('/edit-color', adminController.editColor)

// Prints

router.post('/prints', adminController.getPrints)
router.post('/add-print', adminController.addPrint)
router.post('/edit-print', adminController.editPrint)

export default router
