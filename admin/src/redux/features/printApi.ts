import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPrints } from "shared/api/dataApi";
import { PRINTS_URL } from "shared/constants/genericApiRoutes";

export const getAvailablePrints = createAsyncThunk(
	PRINTS_URL,
	async () => {
		const response = await getPrints();
		return response.data;
	}
)