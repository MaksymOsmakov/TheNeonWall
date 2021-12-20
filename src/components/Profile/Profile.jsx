import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';






function Profile(props) {



	return (
		<div className={classes.profile}>
			<ProfileInfo />
			<MyPostsContainer
				store={props.store}
			/>
		</div>
	);
}

export default Profile;