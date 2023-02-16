import actionTypes from "./actionTypes";

export const changeTheme = (theme) => (dispatch) => {
    dispatch({
        type: actionTypes.CHANGE_THEME,
        theme: theme,
    });
};
