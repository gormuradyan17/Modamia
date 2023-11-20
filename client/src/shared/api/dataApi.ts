import { COLORS_URL, PRINTS_URL, MANNEQUINS_URL } from "shared/constants/genericApiRoutes";
import { BaseApi } from "./baseApi";

export const getColors = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	const {colorVariant = ''} = body;
	return http.get(`${COLORS_URL}${colorVariant ? `?variant=${colorVariant}` : ''}`, body)
}

export const getPrints = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	const {printVariant = ''} = body;
	return http.get(`${PRINTS_URL}${printVariant ? `?variant=${printVariant}` : ''}`, body)
}

export const getMannequins = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(MANNEQUINS_URL, body)
}