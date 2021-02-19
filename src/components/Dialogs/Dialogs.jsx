import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map( message => <Message message={message.message}/>)

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        // props.store.dispatch(updateNewMessageBodyCreator(body))
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        // props.store.dispatch(sendMessageCreator())
        props.sendMessage()
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
            <div>
                <div>
                    <textarea value={state.newMessageBody} onChange={onNewMessageChange} placeholder='Write your message'></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs