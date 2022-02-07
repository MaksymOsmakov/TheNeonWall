import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from './../Common/FormsControls';
import { required, maxLengthCreator } from './../../Utils/Validators/Formvalidators';





const Dialogs = (props) => {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.name} id={dialog.id} />);
	let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);

	if (props.isAuth === false) return <Redirect to="/login" />

	// const onSubmit = (formData) => {
	// 	console.log(formData);
	// }// use for see data
	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
		console.log(values.newMessageBody);
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>

			<div className={classes.messages}>
				<div className={classes.dialogWindow}>
					{messagesElements}
				</div>
				<AddMessageReduxForm onSubmit={addNewMessage} />
			</div>
		</div>
	);
};
const maxLength100 = maxLengthCreator(100);
const AddMessageForm = (props) => {
	const { handleSubmit } = props
	return (
		<form action="" onSubmit={handleSubmit}>
			<div className={classes.send}>
				<Field name='newMessageBody' component={Textarea} placeholder='Your message' validate={[required, maxLength100]} />
				<button className={classes.btn}>Send</button>
			</div>
		</form>
	)
}
const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)


export default Dialogs;