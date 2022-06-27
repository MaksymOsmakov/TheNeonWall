import { stopSubmit } from "redux-form";
import { authAPI } from "../API/Api";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
	userId: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
	switch (action.type) {
		case "auth/SET_USER_DATA":
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
}


type setAuthUserDataActionPayloadType = {
	userId: number | null
	email: string | null
	login: string | null
	isAuth: boolean
}
type setAuthUserDataActionType = {
	type: typeof SET_USER_DATA
	payload: setAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const getAuthUserData = () => async (dispatch: any) => {
	let response = await authAPI.me();

	if (response.resultCode === 0) {
		let { id, email, login } = response.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
	let response = await authAPI.login(email, password, rememberMe);

	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData());
	} else {
		dispatch(stopSubmit("login", { _error: "email or password is wrong" }));
	}
}
export const logout = () => async (dispatch: any) => {
	let response = await authAPI.logout();

	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
}

export default authReducer;

// let stateCopyJSON = JSON.stringify(state); // deep copy
// let stateCopy = JSON.parse(stateCopyJSON);