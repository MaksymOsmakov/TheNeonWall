import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import Friends from '../Friends/Friends';



function Nav(props) {
	let friendsElements = props.state.friends.map(friend => <Friends name={friend.name} avatar={friend.avatar} id={friend.id} />)
	return (
		<nav className={classes.nav}>

			<div className={classes.navItems}>
				<div className={classes.item}><NavLink activeClassName={classes.active} to="/profile">Profile</NavLink></div>
				<div className={classes.item}><NavLink activeClassName={classes.active} to="/dialogs">Messages</NavLink></div>
				<div className={classes.item}><NavLink activeClassName={classes.active} to="/news">News</NavLink></div>
				<div className={classes.item}><NavLink activeClassName={classes.active} to="/music">Music</NavLink></div>
				<div className={classes.item}><NavLink activeClassName={classes.active} to="/settings">Settings</NavLink></div>
			</div>


			<div className={classes.fiendsElementsWrapper}>
				<div>
					<h2>Friends</h2>
				</div>
				<div className={classes.friendsElements}>
					{friendsElements}
				</div>

			</div>


		</nav>
	);
}

export default Nav;
