import { 
	ADD_COLOR_URL, 
	COLORS_URL, 
	EDIT_COLOR_URL, 
	PRINTS_URL,
	ADD_PRINT_URL,
	EDIT_PRINT_URL,
	MANNEQUINS_URL,
	ADD_MANNEQUIN_URL,
	EDIT_MANNEQUIN_URL,
	SILHOUETTES_URL,
	ADD_SILHOUETTE_URL,
	EDIT_SILHOUETTE_URL,
	COLORS_VARIANTS_URL,
	ADD_COLOR_VARIANT_URL,
	PRINTS_VARIANTS_URL,
	ADD_PRINT_VARIANT_URL,
	SIZE_URL,
	ADD_SIZE_URL,
	EDIT_SIZE_URL,
	COLORS_PALETTES_URL,
	REMOVE_COLOR_PALETTE_URL,
	ADD_COLOR_PALETTE_URL,
	ORDER_PALETTE_COLORS_URL,
	PRINTS_PALETTES_URL,
	ADD_PRINT_PALETTE_URL,
	REMOVE_PRINT_PALETTE_URL,
	ORDER_PALETTE_PRINTS_URL,
	ADMIN_SIGNIN_URL,
	ADMIN_REFRESH_URL,
	ADMIN_SIGNOUT_URL,
	ADD_SUPER_ADMIN_URL,
	EDIT_SUPER_ADMIN_URL,
	GET_SUPER_ADMINS_URL,
	REMOVE_SUPER_ADMIN_URL,
	REMOVE_COLOR_URL,
	REMOVE_PRINT_URL,
	REMOVE_MANNEQUIN_URL,
	REMOVE_SILHOUETTE_URL,
	REMOVE_SIZE_URL,
	GARMENTS_URL,
	EDIT_GARMENT_URL,
	REMOVE_GARMENT_URL,
	ADD_GARMENT_URL,
	GARMENTS_ADMIN_URL,
	GARMENT_URL,
	GARMENT_ADMIN_URL,
	SEARCH_GARMENT_ADMIN_URL,
} from "shared/constants/genericApiRoutes";
import { BaseApi } from "./baseApi";


export const signinAdmin = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADMIN_SIGNIN_URL, body)
}

export const checkAdmin = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADMIN_REFRESH_URL, body)
}

export const signoutAdmin = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADMIN_SIGNOUT_URL, body)
}

export const addNewSAdmin = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADD_SUPER_ADMIN_URL, body)
}

export const editSuperAdmin = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(EDIT_SUPER_ADMIN_URL, body)
}

export const removeSAdmin = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_SUPER_ADMIN_URL, body)
}

export const getSuperAdmins = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(GET_SUPER_ADMINS_URL, body)
}

// Color

export const getColors = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(COLORS_URL, body)
}

export const getColorsVariants = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(COLORS_VARIANTS_URL, body)
}

export const getColorsPalettes = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(COLORS_PALETTES_URL, body)
}

export const addColor = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADD_COLOR_URL, body)
}
export const addColorVariant = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADD_COLOR_VARIANT_URL, body)
}

export const addColorPalette = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADD_COLOR_PALETTE_URL, body)
}

export const removeColorPalette = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_COLOR_PALETTE_URL, body)
}

export const orderPaletteColors = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ORDER_PALETTE_COLORS_URL, body)
}

export const updateColor = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(EDIT_COLOR_URL, body)
}

export const removeColor = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_COLOR_URL, body)
}

// Print

export const getPrints = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(PRINTS_URL, body)
}

export const getPrintsVariants = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(PRINTS_VARIANTS_URL, body)
}

export const getPrintsPalettes = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(PRINTS_PALETTES_URL, body)
}
// addPrintPalette, removePrint, removePrintPalette, updatePrint
export const addPrintPalette = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADD_PRINT_PALETTE_URL, body)
}

export const removePrintPalette = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_PRINT_PALETTE_URL, body)
}


export const orderPalettePrints = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ORDER_PALETTE_PRINTS_URL, body)
}

export const addPrint = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	http.removeDefaultHeader()
	return http.post(ADD_PRINT_URL, body, undefined, true)
}

export const addPrintVariant = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADD_PRINT_VARIANT_URL, body)
}

export const updatePrint = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	http.removeDefaultHeader()
	return http.post(EDIT_PRINT_URL, body, undefined, true)
}

export const removePrint = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_PRINT_URL, body)
}

// Mannequin

export const getMannequins = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(MANNEQUINS_URL, body)
}

export const addMannequin = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	http.removeDefaultHeader()
	return http.post(ADD_MANNEQUIN_URL, body, undefined, true)
}

export const updateMannequin = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	http.removeDefaultHeader()
	return http.post(EDIT_MANNEQUIN_URL, body, undefined, true)
}

export const removeMannequin = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_MANNEQUIN_URL, body)
}

// Silhouette

export const getSilhouettes = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(SILHOUETTES_URL, body)
}

export const addSilhouette = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	http.removeDefaultHeader()
	return http.post(ADD_SILHOUETTE_URL, body, undefined, true)
}

export const updateSilhouette = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	http.removeDefaultHeader()
	return http.post(EDIT_SILHOUETTE_URL, body, undefined, true)
}

export const removeSilhouette = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_SILHOUETTE_URL, body)
}

// Size

export const getSizes = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(SIZE_URL, body)
}

export const addSize = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADD_SIZE_URL, body)
}

export const updateSize = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(EDIT_SIZE_URL, body)
}

export const removeSize = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_SIZE_URL, body)
}

// Garment

export const getGarments = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(GARMENTS_URL, body)
}

export const getGarmentsAdmin = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(GARMENTS_ADMIN_URL, body)
}

export const getGarment = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(GARMENT_URL, body)
}

export const getGarmentAdmin = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(GARMENT_ADMIN_URL, body)
}

export const addGarment = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	http.removeDefaultHeader()
	return http.post(ADD_GARMENT_URL, body, undefined, true)
}

export const editGarment = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	http.removeDefaultHeader()
	return http.post(EDIT_GARMENT_URL, body, undefined, true)
}

export const removeGarment = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_GARMENT_URL, body)
}

export const searchGarment = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(SEARCH_GARMENT_ADMIN_URL, body)
}