import {
    createStore,
    combineReducers
} from 'redux';
import usersReducer from '../reducers/users';

const store = createStore(combineReducers({
    data: usersReducer
}));

export default store;