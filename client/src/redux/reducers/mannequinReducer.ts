import { createSlice } from '@reduxjs/toolkit';
import { getAvailableMannequins } from 'redux/features/mannequinApi';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type MannequinStateInterface = Record<string, any>

interface MannequinInterface {
	fronturl: string,
	backurl: string,
}

interface MannequinPrintInterface {
	highresurl: string,
	previewurl: string,
}

interface stateProps {
    mannequins: ArrayType,
    loading: boolean,
	mannequinState: MannequinStateInterface,
	activeMannequin: MannequinInterface,
	activeColor: string,
	activePrint: MannequinPrintInterface
}

export const defaultMannequinState: MannequinStateInterface = {
	name: '',
	fronturl: '',
	backurl: '',
	activeMannequin: {
		fronturl: '',
		backurl: ''
	},
	activeColor: '',
	activePrint: {
		highresurl: '',
		previewurl: ''
	},
}

const initialState: stateProps = {
	mannequins: [],
    loading: false,
	mannequinState: defaultMannequinState,
	activeMannequin: {
		fronturl: '',
		backurl: ''
	},
	activeColor: '',
	activePrint: {
		highresurl: '',
		previewurl: ''
	},
}

export const mannequinSlice = createSlice({
	name: 'mannequinReducer',
	initialState,
	reducers: {
		setMannequinData: (state, action) => {
			state.mannequins = action.payload;
		},
		setMannequinState: (state, action) => {
			const {name, value} = action.payload
			state.mannequinState[name] = value;
		},
		resetMannequinState: (state) => {
			state.mannequinState = defaultMannequinState
		},
		setActiveMannequin: (state, action) => {
			state.activeMannequin = action.payload;
		},
		setActiveColor: (state, action) => {
			state.activeColor = action.payload;
		},
		setActivePrint: (state, action) => {
			state.activePrint = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
            .addCase(getAvailableMannequins.pending, (state, action) => {
                state.mannequins = [];
                state.loading = true;
                mannequinSlice.caseReducers.setMannequinData(state, action);
            })
			.addCase(getAvailableMannequins.fulfilled, (state, action) => {
				state.mannequins = action.payload.data;
				state.loading = false;
				mannequinSlice.caseReducers.setMannequinData(state, action);
			})
			.addCase(getAvailableMannequins.rejected, (state) => {
				state.mannequins = [];
				state.loading = false;
			})
	},
});

export const { 
	setMannequinData,
	setMannequinState, 
	resetMannequinState,
	setActiveMannequin,
	setActiveColor,
	setActivePrint,
} = mannequinSlice.actions;

export const availableMannequins = (state: ObjectType) => state.mannequinReducer.mannequins;
export const mannequinDetails = (state: ObjectType) => state.mannequinReducer.mannequinState;
export const getActiveMannequin = (state: ObjectType) => state.mannequinReducer.activeMannequin;
export const getMannequinActiveColor = (state: ObjectType) => state.mannequinReducer.activeColor;
export const getMannequinActivePrint = (state: ObjectType) => state.mannequinReducer.activePrint;

export default mannequinSlice.reducer;