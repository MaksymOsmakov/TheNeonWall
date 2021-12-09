const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

	let stateCopy;

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			stateCopy = {
				...state,
				newMessageBody: action.body
			};
			return stateCopy;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			stateCopy = {
				...state,
				newMessageBody: "",//for clear the line
				messages: [...state.messages, {id:7, message: body} ]
			};
			
			return stateCopy;
		default:
			return state;
	}

}

export const sendMessageCreator = () => {
	return {
		type: 'SEND_MESSAGE'
	}
}
export const updateNewMessageBodyCreator = (body) => {
	return {
		type: 'UPDATE_NEW_MESSAGE_BODY', body: body
	}
}
export default dialogsReducer;