import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/propfile-reducer";


type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: (text: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post
        key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.addPost(props.newPostText);
        props.updateNewPostText("");
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    My post
                </div>
                <textarea value={props.newPostText} onChange={newTextChangeHandler}/>
                <button onClick={addPost}>add post</button>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;