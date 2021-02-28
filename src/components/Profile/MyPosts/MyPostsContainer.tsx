import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/propfile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type PropsType = {

}

const MyPostsContainer: React.FC<PropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostAC(state.profilePage.messageForNewPost));
                    }

                    let onPostChange = (text: string) => {
                        let action = changeNewTextAC(text);
                        store.dispatch(action);
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
            }
        </StoreContext.Consumer>
)
}

export default MyPostsContainer;