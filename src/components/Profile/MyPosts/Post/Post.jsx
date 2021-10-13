import React from 'react';
import classes from './Post.module.css';


function Post(props) {
	return (

		<div className={classes.item}>
			<img alt="avatar" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKacOtpxn6W75Zqndg3yA_mg8xKcPtnnApg&usqp=CAU' />

			<p className={classes.message}>{props.message}</p>
			
			<div className={classes.likesWrapper}>
				<span className={classes.likes}>Like: {props.like}</span>
			</div>
		</div>

	);
}

export default Post;