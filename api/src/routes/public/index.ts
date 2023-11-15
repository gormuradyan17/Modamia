const router = require("express").Router();
import publicController from '../../controllers/public/public-controller'

router.get('/colors', publicController.getColors)
router.get('/prints', publicController.getPrints)
router.get('/mannequins', publicController.getMannequins)

export default router
