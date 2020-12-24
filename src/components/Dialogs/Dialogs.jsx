import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import onSendMessageClick from './DialogsContainer'
import { Redirect } from 'react-router-dom';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
	let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
	let newMessageBody = state.newMessageBody;
	/*	let newEl = React.createRef();
		let onSendMessageClick = () => {
			props.sendMessage();
		}
		let onNewMessageChange = (e) => {  //обновление каждого нажатия
			let body = e.target.value;
			props.updateNewMessageBody(body);
		}*/

	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	}

	// if (!props.isAuth) return <Redirect to={"/login"} /> ;  //!! Loginization

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>

			</div>
			<AddMessageForm onSubmit={addNewMessage} />
		</div>
	)
}
export default Dialogs;


// let maxLength50 = maxLengthCreator(50)

// const AddMessageForm = (props) => {
// 	return (
// 		<form onSubmit={props.handleSubmit}>
// 			<div>
// 				<Field component="textarea" validate={[required, maxLength50]}
// 					name="newMessageBody" placeholder="Enter your message" />
// 			</div>
// 			<div><button>Add message</button></div>
// 		</form>
// 	)
// }

// const AddMessageFormRedux = reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm)

{/* <textarea ref={newEl}
	placeholder="Enter your message"
	value={newMessageBody} //прокидываем введенные Данные в state (FLUX)
	onChange={onNewMessageChange} /> 
					</div >
	<div><button onClick={ }>Add message</button></div> */}

