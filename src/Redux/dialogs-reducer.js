const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Masha'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Dasha'},
        {id: 4, name: 'Darina'}
    ],
    messages: [
        {id: 1, message: 'Hi, everyone!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yeap'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state=initialState, action) => {
    let stateCopy;
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}],
            };
        default: return state;
    }
}

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer;
