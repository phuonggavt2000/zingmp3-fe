import actionTypes from "../actions/actionTypes";

const initState = {
    homeData: [],
    test: "12",
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes:
            return state;

        default:
            return state;
    }
};

export default appReducer;
