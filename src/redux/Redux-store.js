import { combineReducers, createStore } from "redux";
import dialogsReducer from './DialogsReducer';
import profileReducer from './ProfileReducer';
import sideBarReducer from './SideBarReducer';
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sidePage: sideBarReducer,
	usersPage: UsersReducer
});




let store = createStore(reducers);




window.store = store;

export default store;
