import { createSlice } from '@reduxjs/toolkit';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';

type SigninDataInterface = Record<string, string>

const defaultSigninData = {
	email: '',
	password: ''
}

interface stateProps {
    isAuth: boolean,
	signinData: SigninDataInterface,
	superAdmins: ArrayType,
	activeSuperAdmin: ObjectType
}

const initialState: stateProps = {
	isAuth: false,
	signinData: defaultSigninData,
	superAdmins: [],
	activeSuperAdmin: {}
}

export const authSlice = createSlice({
	name: 'authReducer',
	initialState,
	reducers: {
		setIsAuth: (state, action) => {
			state.isAuth = action.payload;
		},
		resetSigninState: (state) => {
			state.signinData = defaultSigninData
		},
		setSigninData: (state, action) => {
			const {name = '', value = ''} = action.payload
			state.signinData[name] = value;
		},
		setSuperAdmins: (state, action) => {
			state.superAdmins = action.payload;
		},
		setActiveSuperAdmin: (state, action) => {
			state.activeSuperAdmin = action.payload;
		}
	},
});

export const { 
	setIsAuth,
	resetSigninState,
	setSigninData,
	setSuperAdmins,
	setActiveSuperAdmin
} = authSlice.actions;

export const isLoggedIn = (state: ObjectType) => state.authReducer.isAuth;
export const getSigninData = (state: ObjectType) => state.authReducer.signinData;
export const getSuperAdmins = (state: ObjectType) => state.authReducer.superAdmins;
export const getActiveSuperAdmin = (state: ObjectType) => state.authReducer.activeSuperAdmin;

export default authSlice.reducer;