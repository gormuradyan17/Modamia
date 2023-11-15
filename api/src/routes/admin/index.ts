const router = require("express").Router();
import adminController from '../../controllers/admin/admin-controller'

// Colors

router.post('/add-color', adminController.addColor)
router.post('/edit-color', adminController.editColor)

// Prints

router.post('/add-print', adminController.addPrint)
router.post('/edit-print', adminController.editPrint)

// Prints

router.post('/add-mannequin', adminController.addManequin)
router.post('/edit-mannequin', adminController.editMannequin)

export default router
