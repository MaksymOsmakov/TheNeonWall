import { connect } from 'react-redux';
import Nav from './Nav';

let mapStateToProps = (state) => {
	return {
		sidePage: state.sidePage
	}
}
const NavContainer = connect(mapStateToProps)(Nav);
export default NavContainer;
