import actionTypes from "../actions/actionTypes";

const initState = {
    banner: [],
    theme: "theme-purple",
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            console.log(action.homeData.items[0].sectionType);
            return {
                ...state,
                banner:
                    action.homeData.items.find(
                        (item) => item.sectionType === "banner"
                    ).items || null,
            };
        case actionTypes.CHANGE_THEME:
            return {
                ...state,
                theme: action.theme,
            };
        case actionTypes.UPDATE_HEADER:
            return {
                ...state,
                scrollHeader: action.scrollHeader,
            };

        default:
            return state;
    }
};

export default appReducer;
