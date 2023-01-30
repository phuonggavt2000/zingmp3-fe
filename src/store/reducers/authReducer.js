import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    accessToken: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes:
            return state;

        default:
            return state;
    }
};

export default authReducer;
