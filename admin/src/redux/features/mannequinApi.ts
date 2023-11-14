import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMannequins } from "shared/api/dataApi";
import { MANNEQUINS_URL } from "shared/constants/genericApiRoutes";

export const getAvailableMannequins = createAsyncThunk(
	MANNEQUINS_URL,
	async () => {
		const response = await getMannequins();
		return response.data;
	}
)