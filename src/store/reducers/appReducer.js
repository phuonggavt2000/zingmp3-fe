import actionTypes from "../actions/actionTypes";

const initState = {
    idToast: 0,
    currentSong: 0,

    theme: "theme-purple",
    banner: [],
    listMusic: [],
    artistSpotlight: [],
    newMusic: {},
    hAutoTheme1: {},
    hArtistTheme2: {},
    hArtistTheme: {},
    dataPlaylist: {},
    infoSong: {},

    isLoadingPage: false,
    isPlay: false,
    isLoadingMusic: false,
    isRightSidebar: true,
    isAlbum: false,
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            console.log(action.homeData.items);
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
                hArtistTheme2: action.homeData.items.find(
                    (item) => item.sectionId === "hAutoTheme2"
                ),
                artistSpotlight: action.homeData.items.find(
                    (item) => item.sectionType === "artistSpotlight"
                ).items,
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
        case actionTypes.STATUS_ALBUM:
            console.log("action.flag:", action.flag);

            return {
                ...state,
                isAlbum: action.flag,
            };
        case actionTypes.LOADING_PAGE:
            console.log("loading page");
            return {
                ...state,
                isLoadingPage: action.flag,
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
