import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/propfile-reducer";
import MyPosts from "./MyPosts";

type PropsType = {
    store: StoreType
}

const MyPostsContainer: React.FC<PropsType> = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.messageForNewPost));
    }

    let onPostChange = (text: string) => {
        let action = changeNewTextAC(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.messageForNewPost}
        />
    )
}

export default MyPostsContainer;