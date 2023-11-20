import { createSlice } from '@reduxjs/toolkit';
import { getAvailableColors } from 'redux/features/colorApi';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type ColorStateInterface = Record<string, string>

interface stateProps {
    colors: ArrayType,
    loading: boolean,
	colorState: ColorStateInterface,
	colorsVariants: ArrayType
}

export const defaultColorState = {
	name: '',
	hexcode: '',
	pantonecode: '',
	tags: '',
	colorVariant: ''
}

const initialState: stateProps = {
	colors: [],
    loading: false,
	colorState: defaultColorState,
	colorsVariants: []
}

export const colorSlice = createSlice({
	name: 'colorReducer',
	initialState,
	reducers: {
		setColorData: (state, action) => {
			state.colors = action.payload;
		},
		setColorState: (state, action) => {
			const {name, value} = action.payload
			state.colorState[name] = value;
		},
		setColorFullState: (state, action) => {
			state.colorState = action.payload;
		},
		resetColorState: (state) => {
			state.colorState = defaultColorState
		},
		setColorsVariantsData: (state, action) => {
			state.colorsVariants = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
            .addCase(getAvailableColors.pending, (state, action) => {
                state.colors = [];
                state.loading = true;
                colorSlice.caseReducers.setColorData(state, action);
            })
			.addCase(getAvailableColors.fulfilled, (state, action) => {
				state.colors = action.payload.data;
				state.loading = false;
				colorSlice.caseReducers.setColorData(state, action);
			})
			.addCase(getAvailableColors.rejected, (state) => {
				state.colors = [];
				state.loading = false;
			})
	},
});

export const { 
	setColorData, 
	setColorState, 
	resetColorState, 
	setColorFullState,
	setColorsVariantsData
} = colorSlice.actions;

export const availableColors = (state: ObjectType) => state.colorReducer.colors;
export const colorDetails = (state: ObjectType) => state.colorReducer.colorState;
export const colorsVariants = (state: ObjectType) => state.colorReducer.colorsVariants;

export default colorSlice.reducer;