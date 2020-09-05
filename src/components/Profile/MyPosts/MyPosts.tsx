import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {profilePageType} from "../../../redux/state";

const MyPosts = (props: profilePageType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    My post
                </div>
                <textarea/>
                <button>add post</button>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;

