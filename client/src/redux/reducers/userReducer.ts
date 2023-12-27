import { createSlice } from '@reduxjs/toolkit';
import { ObjectType } from 'shared/helpers/helpers';

interface stateProps {
	isLogged: boolean,
	userData: Record<string, any>,
	userState: Record<string, any>,
	isPageLoading: boolean
}

const initialState: stateProps = {
	isLogged: false,
	userData: {},
	userState: {},
	isPageLoading: true
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
		},
		setIsPageLoading: (state, action) => {
			state.isPageLoading = action.payload
		}
	},
});

export const { 
	setIsLogged, 
	setUserData, 
	setUserState, 
	setUserFullState,
	setIsPageLoading
} = userSlice.actions;

export const isLogged = (state: ObjectType) => state.userReducer.isLogged;
export const getUserData = (state: ObjectType) => state.userReducer.userData;
export const getUserId = (state: ObjectType) => state.userReducer.userData?.id || '';
export const getUserState = (state: ObjectType) => state.userReducer.userState;
export const getIsPageLoading = (state: ObjectType) => state.userReducer.isPageLoading;

export default userSlice.reducer;