import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
	return (
		<div className={classes.profile}>

			<img className={classes.backgroundImg} alt='img' src="https://www.teahub.io/photos/full/32-324376_dual-monitor-wallpaper-rick-and-morty.jpg" />
			<img className={classes.avatar} alt='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKacOtpxn6W75Zqndg3yA_mg8xKcPtnnApg&usqp=CAU' />

			<div className={classes.description}>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>

		</div>
	);
}



export default ProfileInfo;