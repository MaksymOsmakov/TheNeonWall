import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

import { updateNewPostTextActionCreator } from '../../../redux/state';
import { addPostActionCreator } from './../../../redux/state';


function MyPosts(props) {

	//use .map method
	let postsElements =
		props.posts.map(post => <Post message={post.message} like={post.likesCount} />)

	// post Fun
	let newPostElement = React.createRef();
	let addPost = () => {
		props.dispatch(addPostActionCreator());
	};

	//textarea
	function onPostChange() {
		let text = newPostElement.current.value;
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);
	}





	return (
		<div className={classes.postsBlock}>
			<div>
				<div className={classes.addWrapper}>
					<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
					<button onClick={addPost} className={classes.btn}>Add Post</button>
				</div>
			</div>

			<div className={classes.posts}>
				{postsElements}
			</div>

		</div>
	);
}

export default MyPosts;