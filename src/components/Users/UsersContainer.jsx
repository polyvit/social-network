import React from 'react'
import {connect} from "react-redux";
import {
    follow1, getUsers,
    setCurrentPage, toggleFollowingProgress,
    unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/preloader/preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getStateUsers,
    getTotalUsersCount
} from "../../Redux/users-selectors";

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
        users: getStateUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
    follow1,
    unfollow,
    setCurrentPage,
    getUsers,
    toggleFollowingProgress,
}))(UsersContainer)



