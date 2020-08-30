import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    My post
                </div>
                <textarea/>
                <button>add post</button>
                <Post message={"Hello, it's my first post lol"}/>
                <Post message={"hu a you man?"}/>
            </div>
        </div>
    )
}

export default MyPosts;

