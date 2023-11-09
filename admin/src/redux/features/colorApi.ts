import { createAsyncThunk } from "@reduxjs/toolkit";
import { getColors } from "shared/api/dataApi";
import { COLORS_URL } from "shared/constants/genericApiRoutes";

export const getAvailableColors = createAsyncThunk(
	COLORS_URL,
	async () => {
		const response = await getColors();
		console.log('response => ', response)
		return response.data;
	}
)