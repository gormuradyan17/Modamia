import { createSlice } from '@reduxjs/toolkit';
import { getAvailablePrints } from 'redux/features/printApi';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type PrintStateInterface = Record<string, string | number>

interface stateProps {
    prints: ArrayType,
    loading: boolean,
	printState: PrintStateInterface
}

export const defaultPrintState: PrintStateInterface = {
	name: '',
	price: 0,
	tags: '',
	highresurl: '',
	previewurl: '',
}

const initialState: stateProps = {
	prints: [],
    loading: false,
	printState: defaultPrintState
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
		}
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

export const { setPrintData, setPrintState, resetPrintState } = printSlice.actions;

export const availablePrints = (state: ObjectType) => state.printReducer.prints;
export const printDetails = (state: ObjectType) => state.printReducer.printState;

export default printSlice.reducer;