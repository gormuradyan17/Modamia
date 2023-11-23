import { createSlice } from '@reduxjs/toolkit';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type PrintStateInterface = Record<string, any>

interface stateProps {
    prints: ArrayType,
    loading: boolean,
	printState: PrintStateInterface,
	printsVariants: ArrayType,
	printsPalettes: ArrayType,
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
	printsPalettes: []
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
	}
});

export const { 
	setPrintData, 
	setPrintState, 
	resetPrintState, 
	setPrintsVariantsData,
	setPrintsPalettesData 
} = printSlice.actions;

export const availablePrints = (state: ObjectType) => state.printReducer.prints;
export const printDetails = (state: ObjectType) => state.printReducer.printState;
export const printsVariants = (state: ObjectType) => state.printReducer.printsVariants;
export const printsPalettes = (state: ObjectType) => state.printReducer.printsPalettes;

export default printSlice.reducer;