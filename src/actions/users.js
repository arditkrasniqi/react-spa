import types from './types';

function getUsers(users) {
    return {
        type: types.GET_USERS,
        users: users
    }
}

function getUser(user) {
    return {
        type: types.GET_USER,
        user: user
    }
}

export default {
    getUsers,
    getUser
}