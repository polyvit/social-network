import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi!', likesCount: 10},
                {id: 2, message: 'It is my first post', likesCount: 5},
                {id: 3, message: 'Great to see you', likesCount: 8}
            ],
            newPostText: 'Hi!'
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log ('State has been changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}






export default store;

