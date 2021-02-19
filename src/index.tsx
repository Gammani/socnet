import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store, {RootStateType} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import {AppRootStateType} from "./redux/redux-store";

let rerenderEntireTree = (state: AppRootStateType) => {
    ReactDOM.render(<App
        store={store}
    />, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state: RootStateType = store.getState();
    rerenderEntireTree(state);
})


// store.subscribe(rerenderEntireTree);
// store._rerenderEntireTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
