import s from "./ProfileInfo.module.css";
import React, {useState} from "react";
import Preloader from "../../Common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import userPhoto from "../../../Assets/images/icon.png";


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if(!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.photo}>
                <img src='https://sun9-23.userapi.com/c858324/v858324189/22e4b1/tGh_dtjLj04.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large || userPhoto} />
                </div>
                <div>
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                </div>
                <div>
                    {editMode ? <ProfileDataForm {...props} />
                    : <ProfileData {...props} goToEditMode={() => {setEditMode(true)}}/>}
                </div>
                <div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>{contactTitle}:{contactValue}</div>
}

const ProfileData = (props) => {
    return (
        <div>
            <div>
                {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
            </div>
            <div>
                <b>Full name:</b> {props.profile.fullname}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>Looking for a job description:</b> {props.profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
                <b>About me:</b> {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
            </div>
        </div>
    )
}

const ProfileDataForm = (props) => {
    return (
        <div>
            Form
        </div>
    )
}

export default ProfileInfo;

// <img src='https://thumbs.dreamstime.com/b/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82-%D0%B2%D1%8B%D0%BF%D1%83%D1%81%D0%BA%D0%BD%D0%B8%D0%BA-%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%B0-24020375.jpg' />
