import actionTypes from "../actions/actionTypes";

const initState = {
    idToast: 0,

    banner: [],
    theme: "theme-purple",
    newMusic: {},
    hAutoTheme1: {},
    hArtistTheme: {},
    dataPlaylist: {},
    infoSong: {},

    isLoadingPage: false,
    isPlay: false,
    isLoadingMusic: false,
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
            console.log("toggle", state.isPlay);
            return {
                ...state,
                isPlay: !state.isPlay,
            };
        case actionTypes.PLAY_MUSIC:
            return {
                ...state,
                isPlay: action.flag,
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
        default:
            return state;
    }
};

export default appReducer;
