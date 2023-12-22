const router = require("express").Router();
import publicController from '../../controllers/public/public-controller'
import { authMiddleware } from '../../middlewares/auth';
import { editValidators, signinValidators, signupValidators } from '../../utils/validators/validators';


// Auth 

router.get('/shopify/authorize', publicController.signinShopify)
router.get('/shopify/redirect', publicController.redirectShopify)
router.post('/shopify/getUser', publicController.getShopifyUser)

router.post('/signin', signinValidators, publicController.signin)
router.post('/signup', signupValidators, publicController.signup)

// router.use(authMiddleware);

router.post('/refresh', publicController.refresh)
router.post('/signout', publicController.signout)
router.post('/edit', editValidators, publicController.edit)

// Color

router.post('/colors', publicController.getColors)
router.post('/colors-variants', publicController.getColorsVariants)
router.post('/colors-palettes', publicController.getColorsPalettes)
router.post('/add-color', publicController.addColor)
router.post('/edit-color', publicController.editColor)
router.post('/add-color-variant', publicController.addColorVariant)
router.post('/add-color-palette', publicController.addColorPalette)
router.post('/remove-color-palette', publicController.removeColorPalette)
router.post('/order-palette-colors', publicController.orderPaletteColors)
router.post('/remove-color', publicController.removeColor)

// Print

router.post('/prints', publicController.getPrints)
router.post('/prints-variants', publicController.getPrintsVariants)
router.post('/prints-palettes', publicController.getPrintsPalettes)
router.post('/add-print', publicController.addPrint)
router.post('/edit-print', publicController.editPrint)
router.post('/add-print-variant', publicController.addPrintVariant)
router.post('/add-print-palette', publicController.addPrintPalette)
router.post('/remove-print-palette', publicController.removePrintPalette)
router.post('/order-palette-prints', publicController.orderPalettePrints)
router.post('/remove-print', publicController.removePrint)

// Mannequin

router.get('/mannequins', publicController.getMannequins)

// Size

router.get('/sizes', publicController.getSizes)

// Silhouette

router.get('/silhouettes', publicController.getSilhouettes)
router.get('/silhouettes-types', publicController.getSilhouettesTypes)

// Garment

router.post('/garments', publicController.getGarments)
router.post('/garment', publicController.getGarment)
router.post('/search-garment', publicController.searchGarments)

// Cart

router.post('/add-cart', publicController.addCart)
router.post('/remove-cart', publicController.removeCart)

export default router
