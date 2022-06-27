import React from 'react';
import avatarIsNull from '../../assets/images/avatarIsNull.png'
import classes from "./Users.module.css"
import { NavLink } from 'react-router-dom';
import Paginator from '../Common/Paginator';
import { UserType } from '../../types/Types';

type PropsType = {
	currentPage: number
	onPageChanged: (a: number) => void
	totalUsersCount: number
	pageSize: number
	users: Array<UserType>
	followInProgress: Array<number>
	unfollow:(id:number)=>void
	follow:(id:number)=>void
}


const Users: React.FC<PropsType> = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<>
			<Paginator currentPage={props.currentPage}
				onPageChanged={props.onPageChanged}
				totalItemsCount={props.totalUsersCount}
				pageSize={props.pageSize} />
			{
				props.users.map(u =>
					<div key={u.id} className={classes.card_wrapper}>

						<div className={classes.card_ava}>
							<NavLink to={'/profile/' + u.id}>
								<img className={classes.avatar} src={u.photos.small != null ? u.photos.small : avatarIsNull} alt="ava" />
							</NavLink>
							<div className={classes.btn_wrapper}>
								{
									u.followed
										? <button title='You are observed this user'
											disabled={props.followInProgress.some(id => id === u.id)}
											onClick={() => {
												props.unfollow(u.id);
											}}>Unfollow</button>

										: <button title='You are not observed this user'
											disabled={props.followInProgress.some(id => id === u.id)}
											onClick={() => {
												props.follow(u.id);
											}}>Follow</button>
								}
							</div>
						</div>

						<div className={classes.card_description}>
							<ul>
								<li>{u.name}</li>
								<li>{u.status}</li>
							</ul>
							{/* <ul>
								<li>{'u.location.city'}</li>
								<li>{'u.location.country'}</li>
							</ul> */}
						</div>

					</div>
				)
			}
		</>
	);
};



export default Users;