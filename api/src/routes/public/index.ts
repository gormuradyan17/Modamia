const router = require("express").Router();
import publicController from '../../controllers/public/public-controller'

router.get('/colors', publicController.getColors)
router.get('/colors-variants', publicController.getColorsVariants)
router.get('/prints', publicController.getPrints)
router.get('/prints-variants', publicController.getPrintsVariants)
router.get('/mannequins', publicController.getMannequins)
router.get('/silhouettes', publicController.getSilhouettes)
router.get('/silhouettes-types', publicController.getSilhouettesTypes)

export default router
