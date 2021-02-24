const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

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
    isAuth: false
}

const dialogsReducer = (state=initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
            };
        default: return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;
