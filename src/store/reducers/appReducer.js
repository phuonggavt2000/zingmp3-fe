import actionTypes from "../actions/actionTypes";
import { staticinfoSong } from "../../ultis/staticData";

const initState = {
    currentSong: 0,

    theme: "theme-blue-light",
    banner: [],
    listMusic: [],
    artistSpotlight: [],
    toast: {
        id: 0,
    },
    mySongs: [],
    myPlaylists: [],
    newMusic: {},
    hAutoTheme1: {},
    hArtistTheme2: {},
    hArtistTheme: {},
    dataPlaylist: {},
    infoSong: { ...staticinfoSong },
    searchData: {},
    hNewrelease: {},
    hAlbum: {},

    isLoadingPage: false,
    isPlay: false,
    isLoadingMusic: false,
    isRightSidebar: true,
    isAlbum: false,
    isRepeat: false,
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
                hArtistTheme2: action.homeData.items.find(
                    (item) => item.sectionId === "hAutoTheme2"
                ),
                artistSpotlight: action.homeData.items.find(
                    (item) => item.sectionType === "artistSpotlight"
                ).items,
                hNewrelease: action.homeData.items.find(
                    (item) => item.sectionId === "hNewrelease"
                ),
                hAlbum: action.homeData.items.find(
                    (item) => item.sectionId === "hAlbum"
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
                toast: {
                    id: ++state.toast.id,
                    ...action.status,
                },
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
            return {
                ...state,
                isAlbum: action.flag,
            };
        case actionTypes.LOADING_PAGE:
            return {
                ...state,
                isLoadingPage: action.flag,
            };
        case actionTypes.ADD_MY_SONG:
            let detailMusics = state.mySongs;

            const chechMySong = state.mySongs.some(
                (song) => song.id === action.detailMusic.id
            );
            if (!chechMySong) {
                detailMusics = [...state.mySongs, action.detailMusic];
            }
            return {
                ...state,
                mySongs: detailMusics,
            };
        case actionTypes.ADD_MY_PLAYLIST:
            let detailPlaylist = state.myPlaylists;

            const checkMyPlaylist = state.myPlaylists.some(
                (playlist) =>
                    playlist.encodeId === action.detailPlaylist.encodeId
            );
            if (!checkMyPlaylist) {
                detailPlaylist = [...state.myPlaylists, action.detailPlaylist];
            }
            return {
                ...state,
                myPlaylists: detailPlaylist,
            };
        case actionTypes.REMOVE_MY_SONG:
            const currentSongs = state.mySongs.filter(
                (song) => song.id !== action.idSong
            );
            return {
                ...state,
                mySongs: currentSongs,
            };
        case actionTypes.REMOVE_MY_PLAYLIST:
            const currentPlaylist = state.myPlaylists.filter(
                (playlist) => playlist.encodeId !== action.idPlaylist
            );
            return {
                ...state,
                myPlaylists: currentPlaylist,
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
        case actionTypes.REPEAT_MUSIC:
            return {
                ...state,
                isRepeat: action.flag,
            };
        case actionTypes.SEARCH_DATA:
            return {
                ...state,
                searchData: action.data,
            };
        default:
            return state;
    }
};

export default appReducer;
