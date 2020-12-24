import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';
//reducer - Ф, принимаемая state action и возвращает новый измененный state
//взяли if из state.js из dispatch(action)

const SET_USER_DATA = 'network/auth/SET_USER_DATA';
//! AUTH-REDUCER
let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload, //{userId,email,login} 
			}
		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth }
})
export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.me();
	// .then(response => { // получаем сразу пользоваталей при загрузке страницы
	if (response.data.resultCode === 0) {
		let { id, login, email } = response.data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
};

export const login = (email, password, rememberMe) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe)
	// .then(response => {
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData()); //*если залогинились
	} else {
		let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
		dispatch(stopSubmit("login", { _error: message }));
	}
}

export const logout = () => async (dispatch) => {
	let response = await authAPI.logout()
	// .then(response => { // получаем сразу пользоваталей при загрузке страницы
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false)); //*если разлогинились
	}
}


export default authReducer;
