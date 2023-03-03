import actionTypes from "./actionTypes";
import * as apis from "../../apis";
import icons from "../../ultis/icons";

const { FaExclamation, FaCheck } = icons;

export const getInfoSong = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.LOADING_MUSIC, flag: true });
        const resInfoSong = await apis.getInfosong(id);
        const resSong = await apis.getSong(id);
        dispatch({ type: actionTypes.LOADING_MUSIC, flag: false });

        if (resSong.data.err === 0) {
            dispatch({
                type: actionTypes.GET_INFO_SONG,
                infoSong: {
                    resInfoSong: resInfoSong.data.data,
                    resSong: resSong.data.data,
                },
            });
            dispatch({
                type: actionTypes.PLAY_MUSIC,
                flag: true,
            });
        } else {
            dispatch({
                type: actionTypes.WARNING_MUSIC,
                status: {
                    icon: FaExclamation,
                    title: "Dành cho tài khoản vip",
                    decs: "Bạn cần có tài khoản vip để có thể nghe được bài này",
                    type: "warning",
                },
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const listMusic = (listMusic) => (dispatch) => {
    dispatch({
        type: actionTypes.LIST_MUSIC,
        listMusic,
    });
};

export const toggleMusic = () => (dispatch) => {
    dispatch({
        type: actionTypes.TOGGLE_MUSIC,
    });
};

export const updateSong = (index) => (dispatch) => {
    dispatch({
        type: actionTypes.UPDATE_SONG,
        currentSong: index,
    });
};

export const nextSong = () => (dispatch) => {
    dispatch({
        type: actionTypes.NEXT_SONG,
    });
};

export const prevSong = () => (dispatch) => {
    dispatch({
        type: actionTypes.PREV_SONG,
    });
};

export const addMySong = (detailMusic) => (dispatch) => {
    dispatch({
        type: actionTypes.ADD_MY_SONG,
        detailMusic,
    });
    dispatch({
        type: actionTypes.WARNING_MUSIC,
        status: {
            icon: FaCheck,
            title: "Bài hát đã được thêm",
            decs: "Bài hát của bạn đã được vào thư viện",
            type: "success",
        },
    });
};

export const removeMySong = (idSong) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_MY_SONG,
        idSong,
    });
    dispatch({
        type: actionTypes.WARNING_MUSIC,
        status: {
            icon: FaCheck,
            title: "Bài hát bị đã xoá  ",
            decs: "Bài hát của bạn đã bị xoá khỏi thư viện",
            type: "error",
        },
    });
};

export const addMyPlaylist = (detailPlaylist) => (dispatch) => {
    dispatch({
        type: actionTypes.ADD_MY_PLAYLIST,
        detailPlaylist,
    });
    dispatch({
        type: actionTypes.WARNING_MUSIC,
        status: {
            icon: FaCheck,
            title: "Bạn đã thêm Playlist ",
            decs: "Playlist của bạn đã được thêm vào thư viện",
            type: "success",
        },
    });
};

export const removeMyPlaylist = (idPlaylist) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_MY_PLAYLIST,
        idPlaylist,
    });
    dispatch({
        type: actionTypes.WARNING_MUSIC,
        status: {
            icon: FaCheck,
            title: "Playlist của bạn đã bị xoá",
            decs: "Playlist của bạn đã bị xoá khỏi thư viện",
            type: "error",
        },
    });
};

export const repeatSong = (type) => (dispatch) => {
    console.log("type:", type);
    dispatch({
        type: actionTypes.REPEAT_MUSIC,
        flag: type,
    });
};
