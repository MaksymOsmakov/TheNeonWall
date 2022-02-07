import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { required, maxLengthCreator } from './../../../Utils/Validators/Formvalidators';
import { Textarea } from './../../Common/FormsControls';



function MyPosts(props) {
	let postsElements =
		props.posts.map(post => <Post message={post.message} like={post.likesCount} />)
	let addPost = (values) => {
		props.addPost(values.newPostText);
	};

	return (
		<div className={classes.postsBlock}>
			<AddNewPostForm onSubmit={addPost} />
			<div className={classes.posts}>
				{postsElements}
			</div>
		</div>
	);
}

const maxLength10 = maxLengthCreator(10);
let AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={classes.addWrapper}>
			<div>
				<Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder={'Post message'} />
			</div>
			<div>
				<button className={classes.btn}>Add Post</button>
			</div>
		</form>
	)
}
AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;