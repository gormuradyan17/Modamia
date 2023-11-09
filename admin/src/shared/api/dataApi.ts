import { ADD_COLOR_URL, COLORS_URL, EDIT_COLOR_URL } from "shared/constants/genericApiRoutes";
import { BaseApi } from "./baseApi";

export const getColors = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(COLORS_URL, body)
}

export const addColor = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(ADD_COLOR_URL, body)
}

export const updateColor = (body: Record<string, any> = {}) => {
	const http = new BaseApi('/api');
	return http.post(EDIT_COLOR_URL, body)
}