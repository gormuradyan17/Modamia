import { createSlice } from '@reduxjs/toolkit';
import { ObjectType } from 'shared/helpers/helpers';

interface stateProps {
	isLogged: boolean,
	userData: Record<string, any>,
	userState: Record<string, any>
}

const initialState: stateProps = {
	isLogged: false,
	userData: {},
	userState: {},
}

export const userSlice = createSlice({
	name: 'userReducer',
	initialState,
	reducers: {
		setIsLogged: (state, action) => {
			state.isLogged = action.payload;
		},
		setUserData: (state, action) => {
			state.userData = action.payload;
		},
		setUserState: (state, action) => {
			if(Object.keys(action.payload).length){
				const { name , value } = action.payload
				state.userState[name] = value;
			}
		},
		setUserFullState: (state, action) => {
			state.userState = action.payload;
		}
	},
});

export const { setIsLogged, setUserData, setUserState, setUserFullState } = userSlice.actions;

export const isLogged = (state: ObjectType) => state.userReducer.isLogged;
export const getUserData = (state: ObjectType) => state.userReducer.userData;
export const getUserState = (state: ObjectType) => state.userReducer.userState;

export default userSlice.reducer;