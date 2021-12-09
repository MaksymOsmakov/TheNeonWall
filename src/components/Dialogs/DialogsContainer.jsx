import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator } from '../../redux/DialogsReducer';
import { sendMessageCreator } from '../../redux/DialogsReducer';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)); },
		sendMessage: () => { dispatch(sendMessageCreator()); },
	}
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;