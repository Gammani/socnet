import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import StoreContext from "./StoreContext";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
})


// store.subscribe(rerenderEntireTree);
// store._rerenderEntireTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
