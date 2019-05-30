import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
