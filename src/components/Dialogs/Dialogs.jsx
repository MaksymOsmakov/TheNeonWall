import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';





const Dialogs = (props) => {


	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
	let messagesElements = props.state.messages.map(message => <Message message={message.message} />);


	let newMessageElement = React.createRef();
	let messageText = () => {
		let text = newMessageElement.current.value;
		alert(text);
	}



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
				<div>
					<textarea ref={newMessageElement} />
					<button onClick={messageText} >Send</button>
				</div>
			</div>



		</div>
	);
};



export default Dialogs;