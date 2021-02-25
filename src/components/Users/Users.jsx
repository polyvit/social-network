import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../Assets/images/icon.png'
import {NavLink} from "react-router-dom";
import Paginator from './Paginator'

const Users = (props) => {


        return <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage} portionSize={props.portionSize}/>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={ () => {props.unfollow(u.id)}
                                    }>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={ () => {props.follow(u.id)}
                                    }>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </span>
                </div>
            )
        }
    </div>
}



export default Users