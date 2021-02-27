import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi!', likesCount: 10},
        {id: 2, message: 'It is my first post', likesCount: 5},
        {id: 3, message: 'Great to see you', likesCount: 8}
    ],
    profile: null,
    isAuth: false,
    status: ""
};

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile,};
        }
        case SET_STATUS: {
            return {...state, status: action.status,};
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos},};
        }
        default: return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setStatus = (status) => ({type: SET_STATUS, status: status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos: photos})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
        });
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            });
    }
}

export const savePhoto = (file) => {
    return (dispatch) => {
        profileAPI.savePhoto(file)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(savePhotoSuccess(response.data.data.photos))
                }
            });
    }
}

export const saveProfile = (profile) => {
    return (dispatch, getState) => {
        const userId = getState().auth.userId
        profileAPI.saveProfile(profile)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getUserProfile(userId))
                }
            });
    }
}




export default profileReducer;