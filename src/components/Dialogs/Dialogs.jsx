import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';





const Dialogs = (props) => {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.name} id={dialog.id} />);
	let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);
	let newMessageBody = state.newMessageBody;

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}
	// e в свойствах функции значит event - событие условное обозначение что бы понять у чего берем значение

	let onSendMessageClick = () => {
		props.sendMessage();
	};




	return (
		<div className={classes.dialogs}>

			<div className={classes.dialogsItems}>

				{dialogsElements}

			</div>

			<div className={classes.messages}>
				<div className={classes.dialogWindow}>
					{messagesElements}
				</div>

				<div className={classes.send}>
					<textarea placeholder='Your message' onChange={onNewMessageChange} value={newMessageBody} />
					<button onClick={onSendMessageClick} className={classes.btn}>Send</button>
				</div>

			</div>
		</div>
	);
};



export default Dialogs;