import { createSlice } from '@reduxjs/toolkit';
import { ObjectType } from 'shared/helpers/helpers';

interface stateProps {
    isExpanded: boolean
}

const initialState: stateProps = {
	isExpanded: true,
}

export const asideSlice = createSlice({
	name: 'asideReducer',
	initialState,
	reducers: {
		setIsExpanded: (state, action) => {
			state.isExpanded = action.payload;
		},
	},
});

export const { setIsExpanded } = asideSlice.actions;

export const isExpanded = (state: ObjectType) => state.asideReducer.isExpanded;

export default asideSlice.reducer;