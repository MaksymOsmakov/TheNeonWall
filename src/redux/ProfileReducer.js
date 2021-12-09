let initialState = {
	posts: [
		{ id: 1, message: 'PonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoom', likesCount: 12 },
		{ id: 2, message: 'RickAss', likesCount: 19 },
	],

	newPostText: 'it-kamasutra',
};


const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD-POST": {
			let newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0
			};

			let stateCopy = {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ""
			}
			return stateCopy;
		}
		case "UPDATE-NEW-POST-TEXT": {
			return {
				...state,
				newPostText: action.newText
			};
		}
		default:
			return state;
	}
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
export default profileReducer;

// let stateCopyJSON = JSON.stringify(state); // deep copy
// let stateCopy = JSON.parse(stateCopyJSON);