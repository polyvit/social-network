import React from 'react'
import {connect} from "react-redux";
import {
    follow1, getUsers,
    setCurrentPage, toggleFollowingProgress,
    unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/preloader/preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render () {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow1}
                   followingInProgress={this.props.followingInProgress}
                   pageSize={this.props.pageSize}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow1,
    unfollow,
    setCurrentPage,
    getUsers,
    toggleFollowingProgress,
})(UsersContainer)


