import React from 'react';
// import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';





function Profile(props) {


	return (
		<>
			<ProfileInfo />
			<MyPosts posts={props.state.posts} />
		</>
	);
}

export default Profile;