import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSilhouettes } from "shared/api/dataApi";
import { SILHOUETTES_URL } from "shared/constants/genericApiRoutes";

export const getAvailableSilhouettes = createAsyncThunk(
	SILHOUETTES_URL,
	async () => {
		const response = await getSilhouettes();
		return response.data;
	}
)