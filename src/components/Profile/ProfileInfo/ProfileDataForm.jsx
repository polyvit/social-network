import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button onClick={props.goToEditMode}>Save</button>
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
            {/*    <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />*/}
            {/*})}*/}
            {/*</div>*/}
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'editData'})(ProfileDataForm)

export default ProfileDataReduxForm;

