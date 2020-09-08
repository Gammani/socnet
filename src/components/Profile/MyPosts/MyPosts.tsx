import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    addPost: (newText: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post
        key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)
    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    function addPost() {
        if (postMessageRef.current) {
            props.addPost(postMessageRef.current.value);
            postMessageRef.current.value = '';
        }
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    My post
                </div>
                <textarea ref={postMessageRef}/>
                <button onClick={addPost}>add post</button>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;