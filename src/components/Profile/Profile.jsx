import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
        <ProfileInfo isOwner={props.isOwner} profile={props.profile}
                     savePhoto={props.savePhoto} saveProfile={props.saveProfile}
                     status={props.status} updateStatus={props.updateStatus} />
        <MyPostsContainer store={props.store}/>
  </div>
    )
}

export default Profile;