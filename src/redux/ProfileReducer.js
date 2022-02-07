import { profileAPI, usersAPI } from './../API/Api';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
	posts: [
		{ id: 1, message: 'PonchoBoom', likesCount: 12 },
		{ id: 2, message: 'RickAss', likesCount: 19 },
	],
	profile: null,
	status: ""
};


const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD-POST": {
			let newPost = {
				id: 3,
				message: action.newPostText,
				likesCount: 0
			};

			let stateCopy = {
				...state,
				posts: [...state.posts, newPost],
			}
			return stateCopy;
		}
		case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.postId)
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			};
		}
		default:
			return state;
	}
}
export const addPostActionCreator = (newPostText) => {
	return {
		type: 'ADD-POST',
		newPostText
	}
}
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })//такая запись если есть константа с названием типа

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getUserProfile = (usersId) => async (dispatch) => {
	let response = await usersAPI.getProfile(usersId);
	dispatch(setUserProfile(response.data));
};
export const getStatus = (usersId) => async (dispatch) => {
	let response = await profileAPI.getStatus(usersId);
	dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};


export default profileReducer;

// let stateCopyJSON = JSON.stringify(state); // deep copy
// let stateCopy = JSON.parse(stateCopyJSON);