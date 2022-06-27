import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { usersAPI } from './../API/Api';
import { UserType } from './../types/Types';
import { AppStateType } from './Redux-store';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
	users: [] as Array<UserType>,
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followInProgress: [] as Array<number>// array of users id
};

type initialStateType = typeof initialState;

const UsersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}
		case SET_USERS: {
			return { ...state, users: action.users }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.count }
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followInProgress: action.followInProgress
					? [...state.followInProgress, action.userId]
					: state.followInProgress.filter(id => id !== action.userId)
			}
		}
		default:
			return state;
	}
}

type ActionsTypes = followSuccessActionType | unfollowSuccessActionType | setUsersActionType | currentPageActionType | setTotalUsersCountActionType |
	setFollowInProgressActionType | toggleIsFetchingActionType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
type DispatchType = Dispatch<ActionsTypes>

type toggleIsFetchingActionType = {
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}
export const toggleIsFetching = (isFetching: any): toggleIsFetchingActionType => ({ type: 'TOGGLE_IS_FETCHING', isFetching });

type followSuccessActionType = {
	type: typeof FOLLOW
	userId: number
}
export const followSuccess = (userId: number): followSuccessActionType => ({ type: 'FOLLOW', userId });
type unfollowSuccessActionType = {
	type: typeof UNFOLLOW
	userId: number
}
export const unfollowSuccess = (userId: number): unfollowSuccessActionType => ({ type: 'UNFOLLOW', userId });

type setUsersActionType = {
	type: typeof SET_USERS
	users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): setUsersActionType => ({ type: SET_USERS, users })


type currentPageActionType = {
	type: typeof SET_CURRENT_PAGE
	currentPage: number
}
export const setCurrentPage = (currentPage: number): currentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
type setTotalUsersCountActionType = {
	type: typeof SET_TOTAL_USERS_COUNT
	count: number
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

type setFollowInProgressActionType = {
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
	followInProgress: boolean
	userId: number
}
export const setFollowInProgress = (followInProgress: boolean, userId: number): setFollowInProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followInProgress, userId })




export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => {
	return async (dispatch, getState) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(currentPage));

		let data = await usersAPI.getUsers(currentPage, pageSize);

		dispatch(toggleIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
	}
}
const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => followSuccessActionType | unfollowSuccessActionType) => {
	dispatch(setFollowInProgress(true, userId));
	let response = await apiMethod(userId)
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(setFollowInProgress(false, userId));
}



export const follow = (userId: number): ThunkType => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
	}
}
export const unfollow = (userId: number): ThunkType => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
	}
}




export default UsersReducer;

