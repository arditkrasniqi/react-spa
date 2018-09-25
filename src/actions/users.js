export function setUsers(users){
    return {
        type: 'SET_USERS',
        payload: users
    }
}
export function setUser(user){
    return {
        type: 'SET_USER',
        payload: user
    }
}

export function setIndex(index){
    return {
        type: 'SET_INDEX',
        payload: index
    }
}