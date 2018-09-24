const usersReducer = (state = {
    users: [],
    user: false
}, action) => {
    switch(action.type) {
        case "SET_USERS":
            state = {
                ...state,
                users: action.payload
            };
            break;
        case "SET_USER":
            state = {
                ...state,
                user: action.payload
            };
            break;
    }
    return state;
};

export default usersReducer;