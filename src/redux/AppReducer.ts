import { getAuthUserData } from "./AuthReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type initialStateType = {
	initialized: boolean
}


let initialState: initialStateType = {
	initialized: false
};


const AppReducer = (state = initialState, action: any): initialStateType => {
	switch (action.type) {
		case "INITIALIZED_SUCCESS":
			return {
				...state,
				initialized: true
			}
		default:
			return state;
	}
}

type initializedSuccessActionType = {
	type: typeof INITIALIZED_SUCCESS
}
export const setInitializedSuccess = (): initializedSuccessActionType => ({ type: INITIALIZED_SUCCESS });

export const initializeAPP = () => (dispatch: any) => {
	let promise = dispatch(getAuthUserData());

	Promise.all([promise]).then(() => {
		dispatch(setInitializedSuccess());
	})
}


export default AppReducer;

// let stateCopyJSON = JSON.stringify(state); // deep copy
// let stateCopy = JSON.parse(stateCopyJSON);