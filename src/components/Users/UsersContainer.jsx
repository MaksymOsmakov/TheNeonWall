import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setFollowInProgress, getUsersThunkCreator } from './../../redux/UsersReducer';
import { compose } from "redux";
import { getCurrentPage, getFollowInProgress, getPageSize, getUsers, getTotalUsersCount, getIsFetching } from './../../redux/Users-selectors';
import Users from "./Users";
import Preloader from './../Common/Preloader';

class UsersContainerComponent extends React.Component {
	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber) => {
		this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followInProgress={this.props.followInProgress} />
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followInProgress: getFollowInProgress(state)
	}
}

export default compose(
	connect(mapStateToProps, { follow, unfollow, setUsers, setFollowInProgress, getUsersThunkCreator }),
)(UsersContainerComponent);