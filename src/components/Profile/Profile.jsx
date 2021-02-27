import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({isOwner, profile, savePhoto, saveProfile, status, updateStatus, store}) => {
    return (
        <div>
        <ProfileInfo isOwner={isOwner} profile={profile}
                     savePhoto={savePhoto} saveProfile={saveProfile}
                     status={status} updateStatus={updateStatus} />
        <MyPostsContainer store={store}/>
  </div>
    )
}

export default Profile;