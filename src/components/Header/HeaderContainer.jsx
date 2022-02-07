import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from './../../redux/AuthReducer';


class HeaderContainer extends React.Component {


	render() {
		return <Header {...this.props} />
	}
}

const matStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});
export default connect(matStateToProps, { logout })(HeaderContainer);
