import { createSlice } from '@reduxjs/toolkit';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type PrintStateInterface = Record<string, string | number>

interface stateProps {
    prints: ArrayType,
    loading: boolean,
	printState: PrintStateInterface,
	printsVariants: ArrayType
}

export const defaultPrintState: PrintStateInterface = {
	name: '',
	price: 0,
	tags: '',
	highresurl: '',
	previewurl: '',
	printVariant: ''
}

const initialState: stateProps = {
	prints: [],
    loading: false,
	printState: defaultPrintState,
	printsVariants: []
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
	}
});

export const { setPrintData, setPrintState, resetPrintState, setPrintsVariantsData } = printSlice.actions;

export const availablePrints = (state: ObjectType) => state.printReducer.prints;
export const printDetails = (state: ObjectType) => state.printReducer.printState;
export const printsVariants = (state: ObjectType) => state.printReducer.printsVariants;

export default printSlice.reducer;