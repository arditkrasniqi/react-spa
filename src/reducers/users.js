const usersReducer = (state = {
    users: [],
    user: false,
    index: 0
}, action) => {
    switch (action.type) {
        case "SET_USERS":
            state = {
                ...state,
                users: [...state.users, ...action.payload]
            };
            break;
        case "SET_USER":
            state = {
                ...state,
                user: action.payload
            };
            break;
        case "SET_INDEX":
            state = {
                ...state,
                index: action.payload
            }
            break;
    }
    return state;
};

export default usersReducer;