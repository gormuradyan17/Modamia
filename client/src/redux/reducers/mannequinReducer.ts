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
	activeCategory: string,
	url:'',
	type:'',
	position:string,
	mannequinWithSilhouettes: ObjectType,
	activeMannequinDetails: ObjectType,
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
	activeCategory: '',
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
	activeCategory: 'silhouette',
	url:'',
	type:'',
	position:'front',
	mannequinWithSilhouettes: {},
	activeMannequinDetails: {},
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
		setMannequinUrl: (state, action) => {
			state.url = action.payload;
		},
		setMannequinType: (state, action) => {
		   state.type = action.payload;
		},
		setMannequinPosition: (state, action) => {
			state.position = action.payload;
		},
		setMannequinWithSilhouettes: (state, action) => {
			state.mannequinWithSilhouettes = action.payload;
		},
		setActiveMannequinDetails: (state, action) => {
			state.activeMannequinDetails = action.payload;
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
	setMannequinLoading,
	setMannequinUrl,
	setMannequinType,
	setMannequinPosition,
	setMannequinWithSilhouettes,
	setActiveMannequinDetails
} = mannequinSlice.actions;

export const availableMannequins = (state: ObjectType) => state.mannequinReducer.mannequins;
export const mannequinDetails = (state: ObjectType) => state.mannequinReducer.mannequinState;
export const getActiveMannequin = (state: ObjectType) => state.mannequinReducer.activeMannequin;
export const getMannequinActiveColor = (state: ObjectType) => state.mannequinReducer.activeColor;
export const getMannequinActivePrint = (state: ObjectType) => state.mannequinReducer.activePrint;
export const getMannequinActiveCategory = (state: ObjectType) => state.mannequinReducer.activeCategory;
export const getMannequinLoading = (state: ObjectType) => state.mannequinReducer.loading;
export const getMannequinUrl= (state: ObjectType) => state.mannequinReducer.url;
export const getMannequinType= (state: ObjectType) => state.mannequinReducer.type;
export const getMannequinPosition= (state: ObjectType) => state.mannequinReducer.position;
export const getMannequinWithSilhouettesData = (state: ObjectType) => state.mannequinReducer.mannequinWithSilhouettes;
export const getActiveMannequinDetails = (state: ObjectType) => state.mannequinReducer.activeMannequinDetails;

export default mannequinSlice.reducer;
