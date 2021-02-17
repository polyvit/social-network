import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";



const MyPosts = (props) => {
    console.log(props)
    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={s.wall}>
                <h3>My posts</h3>
                <div className={s.new}>
                    <div>
              <textarea ref={newPostElement}
                        value={props.newPostText} onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}


export default MyPosts;