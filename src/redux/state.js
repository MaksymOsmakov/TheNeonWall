import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';
import sideBarReducer from './SideBarReducer';


let store = {

	_state: {

		profilePage: {
			posts: [
				{ id: 1, message: 'PonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoom', likesCount: 12 },
				{ id: 2, message: 'RickAss', likesCount: 19 },
			],

			newPostText: 'it-kamasutra',
		},

		dialogsPage: {
			messages: [
				{ id: 2, message: 'low' },
				{ id: 1, message: 'hi' },
				{ id: 3, message: 'mid' },
				{ id: 4, message: 'lol' },
				{ id: 5, message: 'senior' },
				{ id: 6, message: 'jun' },
			],
			newMessageBody: '',

			dialogs: [
				{ id: 1, name: 'Poncho' },
				{ id: 2, name: 'Rick' },
				{ id: 3, name: 'Morty' },
				{ id: 4, name: 'Max' },
				{ id: 5, name: 'Birdperson' },
				{ id: 6, name: 'Mr.Poopybutthole' },
			],
		},

		sidePage: {
			friends: [
				{ id: 1, name: 'Octopus Man', avatar: 'https://rickandmortyapi.com/api/character/avatar/254.jpeg' },
				{ id: 2, name: 'Amish Cyborg', avatar: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg' },
				{ id: 3, name: 'Baby Wizard', avatar: 'https://rickandmortyapi.com/api/character/avatar/31.jpeg' },
				{ id: 4, name: 'M. Queen', avatar: 'https://rickandmortyapi.com/api/character/avatar/533.jpeg' },
			],
		},
	},



	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidePage = sideBarReducer(this._state.sidePage, action);
		this._callSubscriber(this._state);
	},



	
	_callSubscriber() {
		//plug
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	getState() {
		return this._state;
	},

}

// export default store;