import { createSlice } from '@reduxjs/toolkit';
import { getAvailablePrints } from 'redux/features/printApi';
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
			console.log(1);
			
			state.prints = action.payload;
		},
		setPrintState: (state, action) => {
			console.log(action.payload,"j");
			
			const {name, value} = action.payload
			state.printState[name] = value;
		},
		resetPrintState: (state) => {
			console.log(3);

			state.printState = defaultPrintState
		},
		setPrintsVariantsData: (state, action) => {
			state.printsVariants = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
            .addCase(getAvailablePrints.pending, (state, action) => {
                state.prints = [];
                state.loading = true;
                printSlice.caseReducers.setPrintData(state, action);
            })
			.addCase(getAvailablePrints.fulfilled, (state, action) => {
				state.prints = action.payload.data;
				state.loading = false;
				printSlice.caseReducers.setPrintData(state, action);
			})
			.addCase(getAvailablePrints.rejected, (state) => {
				state.prints = [];
				state.loading = false;
			})
	},
});

export const { setPrintData, setPrintState, resetPrintState, setPrintsVariantsData } = printSlice.actions;

export const availablePrints = (state: ObjectType) => state.printReducer.prints;
export const printDetails = (state: ObjectType) => state.printReducer.printState;
export const printsVariants = (state: ObjectType) => state.printReducer.printsVariants;

export default printSlice.reducer;