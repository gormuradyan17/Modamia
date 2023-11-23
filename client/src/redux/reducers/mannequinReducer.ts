import { createSlice } from '@reduxjs/toolkit';
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
	activePrint: MannequinPrintInterface,
	activeCategory: string
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
	activeCategory: ''
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
	activeCategory: 'color'
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
		setActiveCategory: (state, action) => {
			state.activeCategory = action.payload;
		},
		setMannequinLoading: (state, action) => {
			state.loading = action.payload;
		},
	}
});

export const { 
	setMannequinData,
	setMannequinState, 
	resetMannequinState,
	setActiveMannequin,
	setActiveColor,
	setActivePrint,
	setActiveCategory,
	setMannequinLoading
} = mannequinSlice.actions;

export const availableMannequins = (state: ObjectType) => state.mannequinReducer.mannequins;
export const mannequinDetails = (state: ObjectType) => state.mannequinReducer.mannequinState;
export const getActiveMannequin = (state: ObjectType) => state.mannequinReducer.activeMannequin;
export const getMannequinActiveColor = (state: ObjectType) => state.mannequinReducer.activeColor;
export const getMannequinActivePrint = (state: ObjectType) => state.mannequinReducer.activePrint;
export const getMannequinActiveCategory = (state: ObjectType) => state.mannequinReducer.activeCategory;
export const getMannequinLoading = (state: ObjectType) => state.mannequinReducer.loading;

export default mannequinSlice.reducer;
