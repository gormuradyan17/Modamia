const router = require("express").Router();
import adminController from '../../controllers/admin/admin-controller'

router.post('/colors', adminController.getColors)
router.post('/add-color', adminController.addColor)
router.post('/edit-color', adminController.editColor)

export default router
