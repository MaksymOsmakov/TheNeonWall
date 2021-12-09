import React from "react";
import * as axios from 'axios'
import avatarIsNull from '../../assets/images/avatarIsNull.png'
import classes from './Users.module.css';

class Users extends React.Component {

	// constructor(props) {
	// 	super(props);
	// }  when use componentDidMount constructor dont

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	}



	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}


		return <div>
			<div className={classes.pagination_section}>
				{pages.map(p => {
					return <span className={this.props.currentPage === p && classes.selectedPage}
						onClick={(e) => { this.onPageChanged(p); }}>{p}</span>
				})}
			</div>
			{
				this.props.users.map(u =>
					<div key={u.id} className={classes.card_wrapper}>

						<div className={classes.card_ava}>

							<img className={classes.avatar} src={u.photos.small != null ? u.photos.small : avatarIsNull} alt="ava" />
							<div className={classes.btn_wrapper}>
								{u.followed
									? <button title='You are observed this user' onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
									: <button title='You are not observed this user' onClick={() => { this.props.follow(u.id) }}>Follow</button>
								}
							</div>

						</div>

						<div className={classes.card_description}>
							<ul>
								<li>{u.name}</li>
								<li>{u.status}</li>
							</ul>
							<ul>
								<li>{'u.location.city'}</li>
								<li>{'u.location.country'}</li>
							</ul>
						</div>

					</div>
				)
			}
		</div >
	}
}

export default Users;