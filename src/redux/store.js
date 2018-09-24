import {createStore} from 'redux';

const state = {
    users: [],
    user: false
};

const reducer = (state = state, action) => {

};

const store = createStore(reducer);
