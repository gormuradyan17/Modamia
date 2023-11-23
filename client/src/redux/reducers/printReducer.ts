import { createSlice } from '@reduxjs/toolkit';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type PrintStateInterface = Record<string, any>

interface stateProps {
    prints: ArrayType,
    loading: boolean,
	printState: PrintStateInterface,
	printsVariants: ArrayType,
	printsPalettes: ArrayType,
	activePaletteItem: ObjectType
}

export const defaultPrintState: PrintStateInterface = {
	name: '',
	price: 0,
	tags: '',
	highresurl: '',
	previewurl: '',
	printsPalettes: []
}

const initialState: stateProps = {
	prints: [],
    loading: false,
	printState: defaultPrintState,
	printsVariants: [],
	printsPalettes: [],
	activePaletteItem: {
		name: 'parisian you',
		prints: [],
		_id: ''
	}
}

export const printSlice = createSlice({
	name: 'printReducer',
	initialState,
	reducers: {
		setPrintData: (state, action) => {
			state.prints = action.payload;
		},
		setPrintState: (state, action) => {
			const {name, value} = action.payload
			state.printState[name] = value;
		},
		resetPrintState: (state) => {
			state.printState = defaultPrintState
		},
		setPrintsVariantsData: (state, action) => {
			state.printsVariants = action.payload;
		},
		setPrintsPalettesData: (state, action) => {
			state.printsPalettes = action.payload;
		},
		setActivePaletteItem: (state, action) => {
			state.activePaletteItem = {
				name: action.payload?.name,
				prints: action.payload?.prints,
				_id: action.payload?._id,
			};
		},
	}
});

export const { 
	setPrintData, 
	setPrintState, 
	resetPrintState, 
	setPrintsVariantsData,
	setPrintsPalettesData,
	setActivePaletteItem
} = printSlice.actions;

export const availablePrints = (state: ObjectType) => state.printReducer.prints;
export const printDetails = (state: ObjectType) => state.printReducer.printState;
export const printsVariants = (state: ObjectType) => state.printReducer.printsVariants;
export const printsPalettes = (state: ObjectType) => state.printReducer.printsPalettes;
export const activePaletteItem = (state: ObjectType) => state.printReducer.activePaletteItem;

export default printSlice.reducer;