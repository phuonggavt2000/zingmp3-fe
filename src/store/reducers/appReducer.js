import actionTypes from "../actions/actionTypes";

const initState = {
    banner: [],
    theme: "theme-purple",
    newMusic: {},
    hAutoTheme1: {},
    hArtistTheme: {},
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            console.log(action.homeData);
            return {
                ...state,
                banner:
                    action.homeData.items.find(
                        (item) => item.sectionType === "banner"
                    ).items || null,
                newMusic: action.homeData.items.find(
                    (item) => item.sectionType === "new-release"
                ).items,
                hAutoTheme1: action.homeData.items.find(
                    (item) => item.sectionId === "hAutoTheme1"
                ),
                hArtistTheme: action.homeData.items.find(
                    (item) => item.sectionId === "hArtistTheme"
                ),
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
