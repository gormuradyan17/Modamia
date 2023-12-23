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
	url: '',
	type: '',
	position: string,
	mannequinWithSilhouettes: ObjectType,
	price: number,
	size: any,
	detailsModelData: ObjectType,
	detailsData: ObjectType,
	detailsDataLoading: boolean,
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
	url: '',
	type: '',
	position: 'fronts',
	mannequinWithSilhouettes: {},
	price: 0,
	size: {
		width: "",
		height: ""
	},
	detailsModelData: {},
	detailsData: {},
	detailsDataLoading: true
}

export const mannequinSlice = createSlice({
	name: 'mannequinReducer',
	initialState,
	reducers: {
		setMannequinData: (state, action) => {
			state.mannequins = action.payload;
		},
		setMannequinState: (state, action) => {
			const { name, value } = action.payload
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
		setMannequinPrice: (state, action) => {
			state.price = action.payload;
		},
		setMannequinPosition: (state, action) => {
			state.position = action.payload;
		},
		setMannequinWithSilhouettes: (state, action) => {
			state.mannequinWithSilhouettes = action.payload;
		},
		setSize: (state, action) => {
			state.size = action.payload;
		},
		setDetailsModelData: (state, action) => {
			state.detailsModelData = action.payload
		},
		setDetailsData: (state, action) => {
			state.detailsData = action.payload;
		},
		setDetailsDataLoading: (state, action) => {
			state.detailsDataLoading = action.payload
		}
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
	setMannequinPrice,
	setSize,
	setDetailsModelData,
	setDetailsData,
	setDetailsDataLoading,
} = mannequinSlice.actions;

export const availableMannequins = (state: ObjectType) => state.mannequinReducer.mannequins;
export const mannequinDetails = (state: ObjectType) => state.mannequinReducer.mannequinState;
export const getActiveMannequin = (state: ObjectType) => state.mannequinReducer.activeMannequin;
export const getMannequinActiveColor = (state: ObjectType) => state.mannequinReducer.activeColor;
export const getMannequinActivePrint = (state: ObjectType) => state.mannequinReducer.activePrint;
export const getMannequinActiveCategory = (state: ObjectType) => state.mannequinReducer.activeCategory;
export const getMannequinLoading = (state: ObjectType) => state.mannequinReducer.loading;
export const getMannequinUrl = (state: ObjectType) => state.mannequinReducer.url;
export const getMannequinType = (state: ObjectType) => state.mannequinReducer.type;
export const getMannequinPosition = (state: ObjectType) => state.mannequinReducer.position;
export const getMannequinWithSilhouettesData = (state: ObjectType) => state.mannequinReducer.mannequinWithSilhouettes;
export const getMannequinPrice = (state: ObjectType) => state.mannequinReducer?.price;
export const getSize = (state: ObjectType) => state.mannequinReducer?.size;
export const getDetailsModelData = (state: ObjectType) => state.mannequinReducer?.detailsModelData;
export const getDetailsData = (state: ObjectType) => state.mannequinReducer?.detailsData;
export const getDetailsDataLoading = (state: ObjectType) => state.mannequinReducer?.detailsDataLoading;

export default mannequinSlice.reducer;
