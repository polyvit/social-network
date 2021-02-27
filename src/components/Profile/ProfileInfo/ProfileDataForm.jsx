import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";

const ProfileDataForm = ({handleSubmit, goToEditMode, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button onClick={goToEditMode}>Save</button>
            </div>
            <div>
                Full name: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                Looking for a job: {createField("", "lookingForAJob",
                [], Input, {type: "checkbox"})}
            </div>
            <div>
                Looking for a job description: {createField("My professional skills",
                "lookingForAJobDescription",
                [], Textarea)}
            </div>
            <div>
                About me: {createField("Tell about yourself",
                "aboutMe",
                [], Textarea)}
            </div>
            {/*<div>*/}
            {/*    <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />*/}
            {/*})}*/}
            {/*</div>*/}
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'editData'})(ProfileDataForm)

export default ProfileDataReduxForm;

