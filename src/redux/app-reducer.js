import { getAuthUserData } from './auth-reducer';
//reducer - Ф, принимаемая state action и возвращает новый измененный state
//взяли if из state.js из dispatch(action)
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
	// initialized: false,//! было фолс
	initialized: true,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		default:
			return state;
	}
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuthUserData());

	Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess());
		})
}


export default appReducer;
