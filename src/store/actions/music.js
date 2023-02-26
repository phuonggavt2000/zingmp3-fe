import actionTypes from "./actionTypes";
import * as apis from "../../apis";

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
            dispatch({ type: actionTypes.WARNING_MUSIC });
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
