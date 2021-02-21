import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validator";
import Textarea from "../../Common/FormsControls/FormsControls";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const maxLength = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form className={s.new} onSubmit={props.handleSubmit}>
            <div>
              <Field name={"newPostText"} component={Textarea} validate={[requiredField, maxLength]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = (props) => {
    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    // let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <div className={s.wall}>
                <h3>My posts</h3>
                <AddNewPostReduxForm onSubmit={onAddPost} />
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}


export default MyPosts;