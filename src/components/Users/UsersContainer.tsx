import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, getUsersThunkCreator } from './../../redux/UsersReducer';
import { compose } from "redux";
import { getCurrentPage, getFollowInProgress, getPageSize, getUsers, getTotalUsersCount, getIsFetching } from './../../redux/Users-selectors';
import Users from "./Users";
import Preloader from './../Common/Preloader';
import { UserType } from "../../types/Types";
import { AppStateType } from "../../redux/Redux-store";

type mapStatePropsType = {
	users: Array<UserType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followInProgress: Array<number>
}
type mapDispatchPropsType = {
	setUsers: (users: Array<UserType>) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}


type ownPropsType = {
	pageTitle: string
}


type PropsType = ownPropsType & mapDispatchPropsType & mapStatePropsType

class UsersContainerComponent extends React.Component<PropsType> {
	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber: number) => {
		this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			<h2>{this.props.pageTitle}</h2>
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

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
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
	connect<mapStatePropsType, mapDispatchPropsType, ownPropsType, AppStateType>(
		mapStateToProps,
		{
			follow,
			unfollow,
			setUsers,
			getUsersThunkCreator
		}
	),
)(UsersContainerComponent);