import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';



function MyPosts(props) {

	let postsElements =
		props.posts.map(post => <Post message={post.message} like={post.likesCount} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	};

	function onPostChange() {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}





	return (
		<div className={classes.postsBlock}>
			<div className={classes.addWrapper}>
				<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
				<button onClick={addPost} className={classes.btn}>Add Post</button>
			</div>
			<div className={classes.posts}>
				{postsElements}
			</div>

		</div>
	);
}

export default MyPosts;