import { COLORS_URL, PRINTS_URL, MANNEQUINS_URL, SILHOUETTES_URL, ADD_SILHOUETTE_URL, EDIT_SILHOUETTE_URL, COLORS_VARIANTS_URL, PRINTS_VARIANTS_URL, ADD_PRINT_URL, ADD_PRINT_VARIANT_URL, EDIT_PRINT_URL, SILHOUETTES_TYPES_URL, COLORS_PALETTES_URL, PRINTS_PALETTES_URL, MANNEQUIN_WITH_SILHOUETTES_URL } from "shared/constants/genericApiRoutes";
import { BaseApi } from "./baseApi";

export const getColors = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	const {colorVariant = ''} = body;
	return http.get(`${COLORS_URL}${colorVariant ? `?variant=${colorVariant}` : ''}`, body)
}

export const getColorsVariants = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(COLORS_VARIANTS_URL, body)
}

export const getColorsPalettes = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(COLORS_PALETTES_URL, body)
}

export const getPrints = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	const {printVariant = ''} = body;
	return http.get(`${PRINTS_URL}${printVariant ? `?variant=${printVariant}` : ''}`, body)
}


export const getPrintsVariants = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(PRINTS_VARIANTS_URL, body)
}

export const getPrintsPalettes = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(PRINTS_PALETTES_URL, body)
}

export const addPrint = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	http.removeDefaultHeader()
	return http.post(ADD_PRINT_URL, body, undefined)
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
export const getMannequins = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(MANNEQUINS_URL, body)
}

export const getMannequinWithSilhouettes = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	const {mannequin_id = ''} = body;
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