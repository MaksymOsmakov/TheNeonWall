const SEND_MESSAGE = 'SEND_MESSAGE';

type dialogType = {
	id: number
	name: string
}

type messageType = {
	id: number
	message: string
}

let initialState = {
	messages: [
		{ id: 2, message: 'low' },
		{ id: 1, message: 'hi' },
		{ id: 3, message: 'mid' },
		{ id: 4, message: 'lol' },
		{ id: 5, message: 'senior' },
		{ id: 6, message: 'jun' },
	] as Array<messageType>,

	dialogs: [
		{ id: 1, name: 'Poncho' },
		{ id: 2, name: 'Rick' },
		{ id: 3, name: 'Morty' },
		{ id: 4, name: 'Max' },
		{ id: 5, name: 'Birdperson' },
		{ id: 6, name: 'Mr.Poopybutthole' },
	] as Array<dialogType>,
};

export type initialStateType = typeof initialState


const dialogsReducer = (state = initialState, action: any): initialStateType => {

	let stateCopy;

	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			stateCopy = {
				...state,
				messages: [...state.messages, { id: 7, message: body }]
			};

			return stateCopy;
		default:
			return state;
	}

}
type sendMessageCreatorType = {
	type: typeof SEND_MESSAGE
	newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorType => {
	return {
		type: 'SEND_MESSAGE', newMessageBody
	}
}

export default dialogsReducer;