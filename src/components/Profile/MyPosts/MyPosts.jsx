import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


function MyPosts(props) {


	//use .map method
	let postsElements = props.posts.map(post => <Post message={post.message} like={post.likesCount} />)

	// post Fun
	let newPostElement = React.createRef();
	let addPost = () => {
		props.addPost();
	};

	//textarea
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}





	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
				</div>
				<div>
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