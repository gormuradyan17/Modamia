import { createSlice } from '@reduxjs/toolkit';
import { getAvailableColors } from 'redux/features/colorApi';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type PrintStateInterface = Record<string, string>

interface stateProps {
    colors: ArrayType,
    loading: boolean,
	colorState: PrintStateInterface
}

export const defaultColorState = {
	name: '',
	hexcode: '',
	pantonecode: '',
	tags: '',
}

const initialState: stateProps = {
	colors: [],
    loading: false,
	colorState: defaultColorState
}

export const colorSlice = createSlice({
	name: 'colorReducer',
	initialState,
	reducers: {
		setColorData: (state, action) => {
			state.colors = action.payload;
		},
		setColorState: (state, action) => {
			const {name, value} = action.payload
			state.colorState[name] = value;
		},
		setColorFullState: (state, action) => {
			state.colorState = action.payload;
		},
		resetColorState: (state) => {
			state.colorState = defaultColorState
		}
	},
	extraReducers: (builder) => {
		builder
            .addCase(getAvailableColors.pending, (state, action) => {
                state.colors = [];
                state.loading = true;
                colorSlice.caseReducers.setColorData(state, action);
            })
			.addCase(getAvailableColors.fulfilled, (state, action) => {
				state.colors = action.payload.data;
				state.loading = false;
				colorSlice.caseReducers.setColorData(state, action);
			})
			.addCase(getAvailableColors.rejected, (state) => {
				state.colors = [];
				state.loading = false;
			})
	},
});

export const { setColorData, setColorState, resetColorState, setColorFullState } = colorSlice.actions;

export const availableColors = (state: ObjectType) => state.colorReducer.colors;
export const colorDetails = (state: ObjectType) => state.colorReducer.colorState;

export default colorSlice.reducer;