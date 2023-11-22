import { createSlice } from '@reduxjs/toolkit';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type MannequinStateInterface = Record<string, string | number>

interface stateProps {
    mannequins: ArrayType,
    loading: boolean,
	mannequinState: MannequinStateInterface
}

export const defaultMannequinState: MannequinStateInterface = {
	name: '',
	fronturl: '',
	backurl: '',
}

const initialState: stateProps = {
	mannequins: [],
    loading: false,
	mannequinState: defaultMannequinState
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
		}
	}
});

export const { setMannequinData, setMannequinState, resetMannequinState } = mannequinSlice.actions;

export const availableMannequins = (state: ObjectType) => state.mannequinReducer.mannequins;
export const mannequinDetails = (state: ObjectType) => state.mannequinReducer.mannequinState;

export default mannequinSlice.reducer;