import Dialogs from './Dialogs';
import { sendMessageCreator } from '../../redux/DialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../HOC/WithAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessageBody) => { dispatch(sendMessageCreator(newMessageBody)); },
	}
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);