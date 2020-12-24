// import { rerenderEntireTree } from "../renderrrr";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
	//REDUX DATE
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi! How are you?', likesCount: 3 },
				{ id: 2, message: "It's my first post", likesCount: 15 },
				{ id: 3, message: 'La la la', likesCount: 20 },
				{ id: 4, message: 'Slavik molodec', likesCount: 12 },
				{ id: 5, message: 'Yo yo yo' },
				{ id: 6, message: 'Good' },
			],
			newPostText: 'text from newPostText'
		},
		dialogsPage: {
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
			// newMessageText: 'text from newMessageText',
			newMessageBody: 'text from newMessageText',
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log('State changed');
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {  //наблюдатель
		this._callSubscriber = observer; //обрабатываем событие (то, что произошло)
	},

	// addPost() {
	// 	let newPost = {
	// 		id: 5,
	// 		// message: postMessage,		
	// 		message: this._state.profilePage.newPostText,
	// 		likesCount: 0
	// 	};
	// 	this._state.profilePage.posts.push(newPost);
	// 	this._state.profilePage.newPostText = ''; //после добавления поста обнуляем txtA
	// 	this._callSubscriber(this._state);
	// },
	// updateNewPostText(newText) {  //Ф ловит change на txtarea и возвр новые значения
	// 	this._state.profilePage.newPostText = newText;
	// 	this._callSubscriber(this._state);
	// },
	// updateNewMessageText(newText) {  //Ф ловит change на txtarea и возвр новые значения
	// 	this._state.dialogsPage.newMessageText = newText;
	// 	this._callSubscriber(this._state);
	// },
	// addMessage() {
	// 	let newMess = {
	// 		id: 7,
	// 		message: this._state.dialogsPage.newMessageText,
	// 	};
	// 	this._state.dialogsPage.messages.push(newMess);
	// 	this._state.dialogsPage.newMessageText = ''; //после добавления поста обнуляем txtA
	// 	this._callSubscriber(this._state);
	// },
	dispatch(action) {  //action ={ type: '... :ADD-POST'}приходят извне
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				// message: postMessage,		
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost); //считываем сообщение из txtA
			this._state.profilePage.newPostText = ''; //после добавления поста обнуляем txtA
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_MESSAGE) {//ADD_Message
			let body = this._state.dialogsPage.newMessageBody; //считываем сообщение из txtA
			this._state.dialogsPage.newMessageBody = "";
			this._state.dialogsPage.messages.push({ id: 7, message: body });
			this._callSubscriber(this._state);
		}
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const updateNewMessageBodyCreator = (text) => {
	return { type: UPDATE_NEW_MESSAGE_BODY, body: text }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });


export default store;

window.store = store;