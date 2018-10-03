import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore , combineReducers } from 'redux';
import { Provider } from 'react-redux'; 
import mainPageReducer from './store/mainPage';
import blogPageReducer from './store/blogPage';

const store = createStore(combineReducers({
    mainReducer: mainPageReducer,
    blogReducer : blogPageReducer
}));

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)



ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
