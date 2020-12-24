//reducer - Ф, принимаемая state action и возвращает новый измененный state

const SEND_MESSAGE = 'SEND_MESSAGE';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
	dialogs: [
		{ id: 1, name: 'Slavik' },
		{ id: 2, name: 'Kris' },
		{ id: 3, name: 'Vlad' },
		{ id: 4, name: 'Alex' },
		{ id: 5, name: 'He she it' },
		{ id: 6, name: 'Everything will be good' },
	],
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'Bye Bye' },
		{ id: 3, message: 'La la la' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo yo yo' },
		{ id: 6, message: 'Good' },
	],
	// newMessageBody: 'text from newMessageText',

};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		/*	case UPDATE_NEW_MESSAGE_BODY:
				// state = 	this._state.--- !!!!!
				// stateCopy = {
				return {
					...state,
					newMessageBody: action.body
				};
			// return stateCopy;
	*/
		case SEND_MESSAGE:    //ADD_Message
			// let body = state.newMessageBody; //считываем сообщение из txtA
			let body = action.newMessageBody; //считываем сообщение из txtA из action

			// stateCopy = {
			return {
				...state,
				messages: [...state.messages, { id: 8, message: body }],
				// newMessageBody: ""
			};
		// stateCopy.messages.push({ id: 7, message: body });
		// return stateCopy;
		default:
			return state;

	}
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE }, newMessageBody);

export default dialogsReducer;

// state.newMessageBody = action.body;
// return state;
// case SEND_MESSAGE:      //ADD_Message
// let body = state.newMessageBody; //считываем сообщение из txtA
// state.newMessageBody = "";
// state.messages.push({ id: 7, message: body });
// return state;
// default:
// return state;
// }
// }



// export const updateNewMessageBodyCreator = (body) => {  //обновление при нажатии клавиш
// 	return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
// }




