import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import authReducer from "./AuthReducer";
import dialogsReducer from './DialogsReducer';
import profileReducer from './ProfileReducer';
import sideBarReducer from './SideBarReducer';
import UsersReducer from "./UsersReducer";
import { reducer as formReducer } from 'redux-form'
import AppReducer from './AppReducer';

let reducers = combineReducers({
	app: AppReducer,
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sidePage: sideBarReducer,
	usersPage: UsersReducer,
	auth: authReducer,
	form: formReducer
});




let store = createStore(reducers, applyMiddleware(thunk));




window.store = store;

export default store;
