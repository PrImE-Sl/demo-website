
import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, requestUsers, toggleFollowingProgress, unfollow } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from 'redux';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersSuperSelector } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

	componentDidMount() {  //запрос на сервер
		const { currentPage, pageSize } = this.props
		this.props.getUsers(currentPage, pageSize);
		// this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber) => {  //при изменении страницы
		// this.props.requestUsers(pageNumber, this.props.pageSize);
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users totalUsersCount={this.props.totalUsersCount}  //отрисовка презентационной компоненты
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}

// let mapStateToProps = (state) => { //прнимает state целиком
// 	return {					// и возвращает {} с нужными данными
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress
// 	}
// }

let mapStateToProps = (state) => { //прнимает state целиком
	return {					// и возвращает {} с нужными данными
		users: getUsers(state),
		// users: getUsersSuperSelector(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default compose(
	connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers, })
)(UsersContainer)

