import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";

let _callSubscriber = () => {
    ReactDOM.render(<App state={store.getState()}
                         dispatch={store.dispatch.bind(store)}
                         store={store}

    />, document.getElementById('root'));
}

store.subscribe(_callSubscriber);
_callSubscriber();


// store.subscribe(rerenderEntireTree);
// store._rerenderEntireTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
