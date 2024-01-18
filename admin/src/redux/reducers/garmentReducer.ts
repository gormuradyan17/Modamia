import { createSlice } from '@reduxjs/toolkit';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type GarmentsStateInterface = Record<string, any>

interface stateProps {
    garments: ArrayType,
    loading: boolean,
	garmentsState: GarmentsStateInterface,
}

export const defaultGarmentState = {
	name: '',
    mannequin_id: '',
    tops: [],
    bottoms: [],
    sleeves: [],
	palettes: {
		colors: [],
		prints: []
	},
	background: ''
}

const initialState: stateProps = {
	garments: [],
    loading: false,
	garmentsState: defaultGarmentState,
}

export const garmentSlice = createSlice({
	name: 'garmentReducer',
	initialState,
	reducers: {
		setGarmentData: (state, action) => {
			state.garments = action.payload;
		},
		setGarmentState: (state, action) => {
			const {name, value} = action.payload
			state.garmentsState[name] = value;
		},
		setGarmentFullState: (state, action) => {
			state.garmentsState = action.payload;
		},
		resetGarmentState: (state) => {
			state.garmentsState = defaultGarmentState
		},
	}
});

export const { 
	setGarmentData, 
	setGarmentState,
	resetGarmentState,
	setGarmentFullState
} = garmentSlice.actions;

export const availableGarments = (state: ObjectType) => state.garmentReducer.garments;
export const garmentDetails = (state: ObjectType) => state.garmentReducer.garmentsState;

export default garmentSlice.reducer;