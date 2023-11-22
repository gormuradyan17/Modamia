import { createSlice } from '@reduxjs/toolkit';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type SizeStateInterface = Record<string, string>

interface stateProps {
    sizes: ArrayType,
    loading: boolean,
	sizeState: SizeStateInterface,
}

export const defaultSizeState = {
	name: '',
}

const initialState: stateProps = {
	sizes: [],
    loading: false,
	sizeState: defaultSizeState,
}

export const sizeSlice = createSlice({
	name: 'sizeReducer',
	initialState,
	reducers: {
		setSizeData: (state, action) => {
			state.sizes = action.payload;
		},
		setSizeState: (state, action) => {
			const {name, value} = action.payload
			state.sizeState[name] = value;
		},
		resetSizeState: (state) => {
			state.sizeState = defaultSizeState
		},
	}
});

export const { 
	setSizeData, 
	setSizeState,
	resetSizeState
} = sizeSlice.actions;

export const availableSizes = (state: ObjectType) => state.sizeReducer.sizes;
export const sizeDetails = (state: ObjectType) => state.sizeReducer.sizeState;

export default sizeSlice.reducer;