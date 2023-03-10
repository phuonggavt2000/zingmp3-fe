import actionTypes from "./actionTypes";
import * as apis from "../../apis";

export const getHome = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.LOADING_PAGE, flag: true });
        const res = await apis.getHome();
        dispatch({ type: actionTypes.LOADING_PAGE, flag: false });

        if (res.data.err === 0) {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: res.data.data,
            });
        } else {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_HOME,
            homeData: null,
        });
    }
};

export const toggleRightSidebar = () => (dispatch) => {
    dispatch({
        type: actionTypes.TOGGLE_SIDEBAR,
    });
};

export const statusAlbum = (flag) => (dispatch) => {
    dispatch({
        type: actionTypes.STATUS_ALBUM,
        flag,
    });
};

export const getPlaylist = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.LOADING_PAGE, flag: true });
        const res = await apis.getPlaylist(id);
        dispatch({ type: actionTypes.LOADING_PAGE, flag: false });

        if (res.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PLAYLIST,
                dataPlaylist: res.data.data,
            });
        } else {
            dispatch({
                type: actionTypes.GET_PLAYLIST,
                dataPlaylist: null,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const loadPage = (flag) => (dispatch) => {
    dispatch({ type: actionTypes.LOADING_PAGE, flag });
};
