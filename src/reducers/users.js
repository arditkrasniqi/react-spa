import types from '../actions/types';

const initialState = {
    users: [],
    user: false
}

function usersReducer(state, action) {
    if (typeof state === 'undefined') {
        return Object.assign({}, initialState);
    }

    switch (action.type) {
        case types.GET_USER:

        case types.GET_USERS:

        default:
            return state;
    }
}

export default usersReducer;