import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { firebaseReducer } from 'react-redux-firebase';

import App from './App';
import './index.css';
import * as R from './store/reducers';

const reducers = combineReducers({
    news: R.articlesReducer,
    login: R.authReducer,
    firebase: firebaseReducer,
    profile: R.profileReducer,
});
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
