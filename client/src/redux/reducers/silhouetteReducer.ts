import { createSlice } from '@reduxjs/toolkit';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type SilhouetteInterface = Record<string, any>

interface stateProps {
    silhouettes: ArrayType,
    loading: boolean,
	silhouetteState: SilhouetteInterface
}

export const defaultSilhouetteState: SilhouetteInterface = {
	name: '',
	price: 0,
	tags: '',
	type: '',
	orientation: '',
}

const initialState: stateProps = {
	silhouettes: [],
    loading: false,
	silhouetteState: defaultSilhouetteState
}

export const silhouetteSlice = createSlice({
	name: 'silhouetteReducer',
	initialState,
	reducers: {
		setSilhouetteData: (state, action) => {			
			state.silhouettes = action.payload;
		},
		setSilhouetteState: (state, action) => {
			const {name, value} = action.payload
			state.silhouetteState[name] = value;
		},
		resetSilhouetteState: (state) => {
			state.silhouetteState = defaultSilhouetteState
		}
	}
});

export const { setSilhouetteData, setSilhouetteState, resetSilhouetteState } = silhouetteSlice.actions;

export const availableSilhouettes = (state: ObjectType) => state.silhouetteReducer.silhouettes;
export const silhouetteDetails = (state: ObjectType) => state.silhouetteReducer.silhouetteState;

export default silhouetteSlice.reducer;