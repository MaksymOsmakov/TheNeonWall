import React from 'react';
import classes from './Post.module.css';


function Post(props) {
	return (

		<div className={classes.item}>
			<img alt="avatar" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdeN66zWGCjZ1UGlTL-QZTEI_DL5d8ccAxw&usqp=CAU' />
			<span>{props.message}</span>
			<div>
				<span>Like: {props.like}</span>
			</div>
		</div>

	);
}

export default Post;