import { COLORS_URL, PRINTS_URL, MANNEQUINS_URL } from "shared/constants/genericApiRoutes";
import { BaseApi } from "./baseApi";

export const getColors = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(COLORS_URL, body)
}

export const getPrints = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(PRINTS_URL, body)
}

export const getMannequins = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.get(MANNEQUINS_URL, body)
}