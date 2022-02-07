import React from 'react';
import Preloader from '../../Common/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './../ProfileStatus/ProfileStatusWithHooks';


const ProfileInfo = (props) => {
	if (!props.profile) {       //(props.profile == null || props.profile)"big writes" //(!props.profile)"short writes"
		return <Preloader />
	}
	return (
		<div className={classes.profile}>

			<img className={classes.backgroundImg} alt='img' src="https://www.teahub.io/photos/full/32-324376_dual-monitor-wallpaper-rick-and-morty.jpg" />
			<img className={classes.avatar} alt='avatar' src={props.profile.photos.large} />
			{/* <img className={classes.avatar} alt='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKacOtpxn6W75Zqndg3yA_mg8xKcPtnnApg&usqp=CAU' /> */}

			<div className={classes.description}>
				<h6 style={{ textTransform: 'uppercase', fontSize: '2em' }}>{props.profile.fullName}</h6>
				<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
				<p>{props.profile.aboutMe}</p>
			</div>

		</div>
	);
}



export default ProfileInfo;