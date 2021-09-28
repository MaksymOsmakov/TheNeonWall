import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


function MyPosts (props) {

	
	//use .map method
	let postsElements = props.posts.map( post => <Post message={post.message} like={post.likesCount} />)




	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button onClick={() => {alert('hi')}} className={classes.btn}>Add Post</button>
				</div>
			</div>

			<div className={classes.posts}>
				{postsElements}
			</div>

		</div>
	);
}

export default MyPosts;