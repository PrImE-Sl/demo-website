import React from 'react';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from 'redux';


let mapStateToProps = (state) => { //данные, которые берем из State
	return {
		dialogsPage: state.dialogsPage,
		// isAuth: state.auth.isAuth
	}
}
let mapDispatchToProps = (dispatch) => {  //коллбэки, которые будем отправлять в презентационную компоненту
	return {
		sendMessage: (newMessageBody) => {
			dispatch(sendMessageCreator(newMessageBody));
		},

		// updateNewMessageBody: (body) => {  
		// 	dispatch(updateNewMessageBodyCreator(body));
		// }
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	//* withAuthRedirect  
)(Dialogs)