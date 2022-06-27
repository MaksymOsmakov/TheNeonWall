import { postType, profileType } from './../types/Types';
import { profileAPI, usersAPI } from '../API/Api';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';




let initialState = {
	posts: [
		{ id: 1, message: 'PonchoBoom', likesCount: 12 },
		{ id: 2, message: 'RickAss', likesCount: 19 },
	] as Array<postType>,
	profile: null as profileType | null,
	status: ""
};

export type initialStateType = typeof initialState;


const profileReducer = (state = initialState, action: any): initialStateType => {
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



type addPostActionCreatorType = {
	type: "ADD-POST"
	newPostText: string
}


export const addPostActionCreator = (newPostText: string): addPostActionCreatorType => {
	return {
		type: 'ADD-POST',
		newPostText
	}
}

type setStatusActionType = {
	type: typeof SET_STATUS
	status: string
}
export const setStatus = (status: string): setStatusActionType => ({ type: SET_STATUS, status })

type setUserProfileActionType = {
	type: typeof SET_USER_PROFILE
	profile: profileType
}
export const setUserProfile = (profile: profileType): setUserProfileActionType => ({ type: SET_USER_PROFILE, profile })


type deletePostActionType = {
	type: typeof DELETE_POST
	postId: number
}
export const deletePost = (postId: number): deletePostActionType => ({ type: DELETE_POST, postId })


export const getUserProfile = (usersId: number) => async (dispatch: any) => {
	let response = await usersAPI.getProfile(usersId);
	dispatch(setUserProfile(response.data));
};
export const getStatus = (usersId: number) => async (dispatch: any) => {
	let response = await profileAPI.getStatus(usersId);
	dispatch(setStatus(response.data));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
	let response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};


export default profileReducer;

// let stateCopyJSON = JSON.stringify(state); // deep copy
// let stateCopy = JSON.parse(stateCopyJSON);