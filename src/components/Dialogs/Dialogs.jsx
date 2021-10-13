import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';





const Dialogs = (props) => {



	let dialogsElements = props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
	let messagesElements = props.messagesPage.messages.map(message => <Message message={message.message} />);


	let newMessageElement = React.createRef();
	let onMessageChange = () => {
		let newMessage = newMessageElement.current.value;
		props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage });

	}
	let addMessage = () => {
		props.dispatch({ type: 'ADD-MESSAGE', });

	};




	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<div>
					{dialogsElements}
				</div>
			</div>

			<div className={classes.messages}>
				<div>
					{messagesElements}
				</div>
				<div className={classes.send}>
					<textarea ref={newMessageElement} onChange={onMessageChange} value={props.messagesPage.newMessageText} />

					<button onClick={addMessage} className={classes.btn}>Send</button>
				</div>
			</div>



		</div>
	);
};



export default Dialogs;