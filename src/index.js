import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/ReduxStore";
import axios from "axios";

axios.defaults.baseURL = 'http://api.fa13-prognosis.loc/api';
if (localStorage.getItem('token')) {
    axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
}
axios.defaults.headers['Accept'] = 'application/json';

ReactDOM.render(

        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
