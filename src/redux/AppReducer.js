import { getAuthUserData } from "./AuthReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
	initialized: false
};


const AppReducer = (state = initialState, action) => {
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

export const setInitializedSuccess = () => ({ type: INITIALIZED_SUCCESS })
export const initializeAPP = () => (dispatch) => {
	let promise = dispatch(getAuthUserData());

	Promise.all([promise]).then(() => {
		dispatch(setInitializedSuccess());
	})
}


export default AppReducer;

// let stateCopyJSON = JSON.stringify(state); // deep copy
// let stateCopy = JSON.parse(stateCopyJSON);