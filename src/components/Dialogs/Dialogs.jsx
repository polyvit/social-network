import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validator";
import {Textarea} from "../Common/FormsControls/FormsControls";
// import {Redirect} from "react-router-dom";

const maxLength = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}  name={"newMessageBody"}
                       validate={[requiredField, maxLength]} placeholder={"Write your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map( message => <Message message={message.message}/>)


    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs