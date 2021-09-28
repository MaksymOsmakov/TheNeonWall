import React from 'react';
// import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';






function Profile(props) {


	return (
		<>
			<ProfileInfo />
			<MyPosts
				posts={props.state.posts}
				addPost={props.addPost}
				newPostText={props.state.newPostText}
				updateNewPostText={props.updateNewPostText}
			/>
		</>
	);
}

export default Profile;