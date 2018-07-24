import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './firebase/firebase';
import {configure} from './store/configureStore';
import {Provider} from 'react-redux'


var store = configure();
export const history = createBrowserHistory();

ReactDOM.render (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>, document.getElementById('root')
);
