import { usersAPI, profileAPI } from '../api/api';

//reducer - Ф, принимаемая state action и возвращает новый измененный state
//взяли if из state.js из dispatch(action)
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {  //изначальные данные, если state не придет 
	posts: [
		{ id: 1, message: 'Hi! How are you?', likesCount: 3 },
		{ id: 2, message: "It's my first post", likesCount: 15 },
		{ id: 3, message: 'La la la', likesCount: 20 },
		{ id: 4, message: 'Slavik molodec', likesCount: 12 },
		{ id: 5, message: 'Yo yo yo' },
		{ id: 6, message: 'Good' },
	],
	// newPostText: 'text from newPostText',
	profile: null,
	status: "",
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 7,
				// message: state.newPostText,
				message: action.newPostText,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			}
		}
		case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter(p => p.id != action.postId)
			}
		}
		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText }) //создали экшн
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile }) //создали экшн

export const setStatus = (status) => ({ type: SET_STATUS, status }) //создали экшн
export const deletePost = (postId) => ({ type: DELETE_POST, postId }) //создали экшн
export const getStatus = (userId) => async (dispatch) => {//thunk
	let response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {//thunk
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
}

export const getUserProfile = (userId) => async (dispatch) => {//thunk
	let response = await usersAPI.getProfile(userId)
	dispatch(setUserProfile(response.data));
}
// export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;




