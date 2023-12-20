const router = require("express").Router();
import publicController from '../../controllers/public/public-controller'
import { authMiddleware } from '../../middlewares/auth';
import { signinValidators, signupValidators } from '../../utils/validators/validators';


// Auth 

router.get('/shopify/authorize', publicController.signinShopify)
router.get('/shopify/redirect', publicController.redirectShopify)
router.post('/shopify/getUser', publicController.getShopifyUser)

router.post('/signin', signinValidators, publicController.signin)
router.post('/signup', signupValidators, publicController.signup)

// router.use(authMiddleware);

router.post('/refresh', publicController.refresh)
router.post('/signout', publicController.signout)

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

// Garment

router.get('/garments', publicController.getGarments)
router.post('/garment', publicController.getGarment)
router.post('/search-garment', publicController.searchGarments)

export default router
