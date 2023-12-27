import { COLORS_URL, PRINTS_URL, MANNEQUINS_URL, SILHOUETTES_URL, ADD_SILHOUETTE_URL, EDIT_SILHOUETTE_URL, COLORS_VARIANTS_URL, PRINTS_VARIANTS_URL, ADD_PRINT_URL, ADD_PRINT_VARIANT_URL, EDIT_PRINT_URL, SILHOUETTES_TYPES_URL, COLORS_PALETTES_URL, PRINTS_PALETTES_URL, SIZE_URL, ADD_SIZE_URL, EDIT_SIZE_URL, MANNEQUIN_WITH_SILHOUETTES_URL, GARMENTS_URL, GARMENT_URL, SEARCH_GARMENT_URL, SIGNIN_SHOPIFY_URL, GET_SHOPIFY_USER_URL, ADD_COLOR_URL, ADD_COLOR_VARIANT_URL, ADD_COLOR_PALETTE_URL, REMOVE_COLOR_URL, REMOVE_COLOR_PALETTE_URL, EDIT_COLOR_URL, ADD_PRINT_PALETTE_URL, REMOVE_PRINT_PALETTE_URL, REMOVE_PRINT_URL, SIGNIN_USER, SIGNUP_USER, USER_REFRESH_URL, USER_SIGNOUT_URL, USER_EDIT_URL, ADD_TO_CART_URL, REMOVE_FROM_CART_URL, EDIT_CART_URL, FORGOT_PASSWORD_URL, RECOVERY_PASSWORD_URL } from "shared/constants/genericApiRoutes";
import { BaseApi } from "./baseApi";

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

export const removeColor = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_COLOR_URL, body)
}

export const removeColorPalette = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_COLOR_PALETTE_URL, body)
}
export const updateColor = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(EDIT_COLOR_URL, body)
}
//print

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
	return http.post(EDIT_PRINT_URL, body, undefined)
}
export const addPrintPalette = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADD_PRINT_PALETTE_URL, body)
}

export const removePrintPalette = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_PRINT_PALETTE_URL, body)
}
export const removePrint = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_PRINT_URL, body)
}

export const getMannequins = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(MANNEQUINS_URL, body)
}

export const getMannequinWithSilhouettes = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	const { mannequin_id = '' } = body;
	return http.get(`${MANNEQUIN_WITH_SILHOUETTES_URL}${mannequin_id ? `?mannequin_id=${mannequin_id}` : ''}`, body)
}

export const getSilhouettes = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(SILHOUETTES_URL, body)
}

export const getSilhouettesByTypes = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(SILHOUETTES_TYPES_URL, body)
}

export const addSilhouette = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	http.removeDefaultHeader()
	return http.post(ADD_SILHOUETTE_URL, body, undefined)
}

export const updateSilhouette = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	http.removeDefaultHeader()
	return http.post(EDIT_SILHOUETTE_URL, body, undefined)
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

// Garment

export const getGarments = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(GARMENTS_URL, body)
}

export const getGarment = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(GARMENT_URL, body)
}

export const searchGarment = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(SEARCH_GARMENT_URL, body)
}

// Auth

export const signinShopify = () => {
	const http = new BaseApi('/api');
	return http.get(SIGNIN_SHOPIFY_URL)
}

export const getShopifyUser = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(GET_SHOPIFY_USER_URL, body)
}

export const signInUser=(body: Record<string, any> = {})=>{
	const http=new BaseApi('/api');
	return http.post(SIGNIN_USER,body)
}

export const signUpUser=(body: Record<string, any> = {})=>{
	const http=new BaseApi('/api');
	return http.post(SIGNUP_USER,body)
}

export const checkUser = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(USER_REFRESH_URL, body)
}
export const signoutUser = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(USER_SIGNOUT_URL, body)
}
export const editUser = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(USER_EDIT_URL, body)
}

export const addToCart = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADD_TO_CART_URL, body)
}

export const removeFromCart = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(REMOVE_FROM_CART_URL, body)
}

export const editCart = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(EDIT_CART_URL, body)
}

export const forgotPassword = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(FORGOT_PASSWORD_URL, body)
}

export const recoveryPassword = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(RECOVERY_PASSWORD_URL, body)
}