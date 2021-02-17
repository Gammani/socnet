import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionType, PostsType} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/propfile-reducer";

type PropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
    dispatch: (action: ActionType) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post
        key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostAC(props.messageForNewPost));
        props.dispatch(changeNewTextAC(""));
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value));
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    My post
                </div>
                <textarea value={props.messageForNewPost} onChange={newTextChangeHandler}/>
                <button onClick={addPost}>add post</button>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;