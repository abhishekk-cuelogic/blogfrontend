import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import NavigationReducer from './store/navigation'; 

const store = createStore(NavigationReducer);

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)



ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
