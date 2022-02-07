import React from 'react';
import classes from "./Friends.module.css"
import { NavLink } from 'react-router-dom';





const Friends = (props) => {



	return (
		<div className={classes.wrapper}>
			<div>
				<img alt='avatar' className={classes.avatar} src={props.avatar} />
			</div>
			<div>
				<NavLink to={`/dialogs/friend/${props.id}`} className={classes.name} activeClassName={classes.active}>{props.name}</NavLink>
			</div>
		</div>
	);
};


export default Friends;