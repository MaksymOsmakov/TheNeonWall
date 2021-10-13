let store = {

	_state: {

		profilePage: {
			posts: [
				{ id: 1, message: 'PonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoom', likesCount: 12 },
				{ id: 2, message: 'RickAss', likesCount: 19 },
			],

			newPostText: 'it-kamasutra',
		},

		messagesPage: {
			messages: [
				{ id: 2, message: 'low' },
				{ id: 1, message: 'hi' },
				{ id: 3, message: 'mid' },
				{ id: 4, message: 'lol' },
				{ id: 5, message: 'senior' },
				{ id: 6, message: 'jun' },
			],

			newMessageText: 'rickandmorty',

			dialogs: [
				{ id: 1, name: 'Poncho' },
				{ id: 2, name: 'Rick' },
				{ id: 3, name: 'Morty' },
				{ id: 4, name: 'Max' },
				{ id: 5, name: 'Birdperson' },
				{ id: 6, name: 'Mr.Poopybutthole' },
			],
		},

		navbarPage: {
			friends: [
				{ id: 1, name: 'Octopus Man', avatar: 'https://rickandmortyapi.com/api/character/avatar/254.jpeg' },
				{ id: 2, name: 'Amish Cyborg', avatar: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg' },
				{ id: 3, name: 'Baby Wizard', avatar: 'https://rickandmortyapi.com/api/character/avatar/31.jpeg' },
				{ id: 4, name: 'M. Queen', avatar: 'https://rickandmortyapi.com/api/character/avatar/533.jpeg' },
			],
		},
	},



	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 3,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = "";//передаем пустую строку чтобы после поста очистить поле ввода
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === 'ADD-MESSAGE') {
			let newMessage = {
				id: 7,
				message: this._state.messagesPage.newMessageText,
			};
			this._state.messagesPage.messages.push(newMessage);
			this._state.messagesPage.newMessageText = "";//передаем пустую строку чтобы после поста очистить поле ввода
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
			this._state.messagesPage.newMessageText = action.newMessage;
			this._callSubscriber(this._state);
		}
	},



	//section for getting rid of circular dependency
	// теперь _callSubscriber заменяет reranderEntireThree
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


export const addPostActionCreator = () => {
	return {
		type: 'ADD-POST'
	}
}
export const updateNewPostTextActionCreator = (text) => {
	return {
		type: 'UPDATE-NEW-POST-TEXT', newText: text
	}
}








export default store;