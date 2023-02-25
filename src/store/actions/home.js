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

export const updateHeader = (value) => (dispatch) => {
    dispatch({
        type: actionTypes.UPDATE_HEADER,
        scrollHeader: value,
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
