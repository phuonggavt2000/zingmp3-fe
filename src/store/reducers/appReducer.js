import actionTypes from "../actions/actionTypes";

const initState = {
    idToast: 0,
    currentSong: 0,

    theme: "theme-purple",
    banner: [],
    listMusic: [],
    newMusic: {},
    hAutoTheme1: {},
    hArtistTheme: {},
    dataPlaylist: {},
    infoSong: {},

    isLoadingPage: false,
    isPlay: false,
    isLoadingMusic: false,
    isRightSidebar: false,
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner:
                    action.homeData.items.find(
                        (item) => item.sectionType === "banner"
                    )?.items || null,
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

        case actionTypes.GET_PLAYLIST:
            return {
                ...state,
                dataPlaylist: action.dataPlaylist,
            };

        case actionTypes.LOADING_PAGE:
            return {
                ...state,
                isLoadingPage: action.flag,
            };
        case actionTypes.PLAY_MUSIC:
            return {
                ...state,
                isPlay: action.flag,
            };
        case actionTypes.GET_INFO_SONG:
            return {
                ...state,
                infoSong: {
                    name: action.infoSong.resInfoSong.title,
                    artists: action.infoSong.resInfoSong.artists,
                    img: action.infoSong.resInfoSong.thumbnail,
                    song: action.infoSong.resSong[128],
                    duration: action.infoSong.resInfoSong.duration,
                    id: action.infoSong.resInfoSong.encodeId,
                },
            };
        case actionTypes.TOGGLE_MUSIC:
            return {
                ...state,
                isPlay: !state.isPlay,
            };
        case actionTypes.LIST_MUSIC:
            return {
                ...state,
                listMusic: action.listMusic,
            };
        case actionTypes.LOADING_MUSIC:
            return {
                ...state,
                isLoadingMusic: action.flag,
            };
        case actionTypes.WARNING_MUSIC:
            return {
                ...state,
                idToast: ++state.idToast,
            };
        case actionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                isRightSidebar: !state.isRightSidebar,
            };
        case actionTypes.UPDATE_SONG:
            return {
                ...state,
                currentSong: action.currentSong,
            };
        case actionTypes.NEXT_SONG:
            let currentSong = state.currentSong + 1;
            if (state.listMusic.length <= state.currentSong + 1) {
                currentSong = 0;
            }
            return {
                ...state,
                currentSong: currentSong,
            };

        case actionTypes.PREV_SONG:
            let currentPrevSong = state.currentSong - 1;
            console.log("state.currentSong:", state.currentSong);
            console.log("state.listMusic.length:", state.listMusic.length);

            if (currentPrevSong < 0) {
                currentPrevSong = state.listMusic.length - 1;
            }
            return {
                ...state,
                currentSong: currentPrevSong,
            };
        default:
            return state;
    }
};

export default appReducer;
