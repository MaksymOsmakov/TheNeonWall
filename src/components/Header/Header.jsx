import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';


function Header(props) {

	return (
		<header className={classes.header}>
			<div className={classes.network_name}>
				<h1>T H E &nbsp;&nbsp;&nbsp;&nbsp;N E O N &nbsp;&nbsp;&nbsp;&nbsp;W A L L</h1>
			</div>
			<div className={classes.login_block}>
				{props.isAuth ?
					<div><NavLink to={'/profile/'}><button>Me</button></NavLink>-<button on onClick={props.logout}>Logout</button></div>
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
}

export default Header;