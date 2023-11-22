import { createSlice } from '@reduxjs/toolkit';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type ColorStateInterface = Record<string, any>

interface stateProps {
    colors: ArrayType,
    loading: boolean,
	colorState: ColorStateInterface,
	colorsVariants: ArrayType,
	colorsPalettes: ArrayType,
}

export const defaultColorState = {
	name: '',
	hexcode: '',
	pantonecode: '',
	tags: '',
	colorPalettes: []
}

const initialState: stateProps = {
	colors: [],
    loading: false,
	colorState: defaultColorState,
	colorsVariants: [],
	colorsPalettes: []
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
		setColorsPalettesData: (state, action) => {
			state.colorsPalettes = action.payload;
		},
	}
});

export const { 
	setColorData, 
	setColorState, 
	resetColorState, 
	setColorFullState,
	setColorsVariantsData,
	setColorsPalettesData
} = colorSlice.actions;

export const availableColors = (state: ObjectType) => state.colorReducer.colors;
export const colorDetails = (state: ObjectType) => state.colorReducer.colorState;
export const colorsVariants = (state: ObjectType) => state.colorReducer.colorsVariants;
export const colorsPalettes = (state: ObjectType) => state.colorReducer.colorsPalettes;

export default colorSlice.reducer;