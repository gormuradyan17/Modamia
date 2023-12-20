import { createSlice } from '@reduxjs/toolkit';
import { ObjectType } from 'shared/helpers/helpers';

interface stateProps {
	isLogged: boolean,
	userData: Record<string, any>
}

const initialState: stateProps = {
	isLogged: false,
	userData: {}
}

export const userSlice = createSlice({
	name: 'userReducer',
	initialState,
	reducers: {
		setIsLogged: (state, action) => {
			state.isLogged = action.payload;
		},
		setUserData: (state, action) => {
			if(Object.keys(action.payload).length){
				const { name , value } = action.payload
				state.userData[name] = value;
			}
		},
	},
});

export const { setIsLogged, setUserData } = userSlice.actions;

export const isLogged = (state: ObjectType) => state.userReducer.isLogged;
export const getUserData = (state: ObjectType) => state.userReducer.userData;

export default userSlice.reducer;