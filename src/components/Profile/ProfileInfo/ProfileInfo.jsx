import s from "./ProfileInfo.module.css";
import React, {useState} from "react";
import Preloader from "../../Common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import userPhoto from "../../../Assets/images/icon.png";
import ProfileDataReduxForm from "./ProfileDataForm";

const ProfileInfo = ({isOwner, profile, savePhoto, saveProfile, status, updateStatus}) => {

    let [editMode, setEditMode] = useState(false)

    if(!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
    }


    return (
        <div>
            <div className={s.photo}>
                <img src='https://sun9-23.userapi.com/c858324/v858324189/22e4b1/tGh_dtjLj04.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large || userPhoto} />
                </div>
                <div>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                </div>
                <div>
                    {editMode
                        ? <ProfileDataReduxForm onSubmit={onSubmit} profile={profile} goToEditMode={() => {setEditMode(false)}} />
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/>}
                </div>
                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>{contactTitle}:{contactValue}</div>
}

const ProfileData = ({isOwner, goToEditMode, profile}) => {
    return (
        <div>
            <div>
                {isOwner && <button onClick={goToEditMode}>Edit</button>}
            </div>
            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>Looking for a job description:</b> {profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
            </div>
        </div>
    )
}

export default ProfileInfo;

// <img src='https://thumbs.dreamstime.com/b/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82-%D0%B2%D1%8B%D0%BF%D1%83%D1%81%D0%BA%D0%BD%D0%B8%D0%BA-%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%B0-24020375.jpg' />
