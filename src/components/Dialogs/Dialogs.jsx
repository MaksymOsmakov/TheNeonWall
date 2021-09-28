import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';





const Dialogs = (props) => {


	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
	let messagesElements = props.state.messages.map(message => <Message message={message.message} />);



	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<div>
					{dialogsElements}
				</div>
			</div>

			<div className={classes.messages}>
				{messagesElements}
			</div>

		</div>
	);
};



export default Dialogs;