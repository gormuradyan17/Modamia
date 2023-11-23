const router = require("express").Router();
import publicController from '../../controllers/public/public-controller'

// Color

router.get('/colors', publicController.getColors)
router.get('/colors-variants', publicController.getColorsVariants)
router.get('/colors-palettes', publicController.getColorsPalettes)

// Print

router.get('/prints', publicController.getPrints)
router.get('/prints-variants', publicController.getPrintsVariants)
router.get('/prints-palettes', publicController.getPrintsPalettes)

// Mannequin

router.get('/mannequins', publicController.getMannequins)

// Size

router.get('/sizes', publicController.getSizes)

// Silhouette

router.get('/silhouettes', publicController.getSilhouettes)
router.get('/silhouettes-types', publicController.getSilhouettesTypes)

export default router
