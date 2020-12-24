
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";


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

	dispatch(action) {  //action ={ type: '... :ADD-POST'}приходят извне
		this._state.profilePage = profileReducer(this._state.profilePage, action) //вызвать редьюсер и отдать часть своего state
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sideBarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state);
	}
}

export default store;

window.store = store;