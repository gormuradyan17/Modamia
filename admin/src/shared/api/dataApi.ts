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
} from "shared/constants/genericApiRoutes";
import { BaseApi } from "./baseApi";

// Color

export const getColors = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(COLORS_URL, body)
}

export const getColorsVariants = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(COLORS_VARIANTS_URL, body)
}

export const addColor = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADD_COLOR_URL, body)
}

export const addColorVariant = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADD_COLOR_VARIANT_URL, body)
}

export const updateColor = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(EDIT_COLOR_URL, body)
}

// Print

export const getPrints = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(PRINTS_URL, body)
}

export const getPrintsVariants = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(PRINTS_VARIANTS_URL, body)
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