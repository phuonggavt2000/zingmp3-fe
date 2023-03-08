import appReducer from "./appReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import authReducer from "./authReducer";

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
};

const authConfig = {
    ...commonConfig,
    key: "client-zingmp3",
    whitelist: [
        "myPlaylists",
        "mySongs",
        "isRepeat",
        "listMusic",
        "infoSong",
        "currentSong",
        "theme",
    ],
};

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    app: persistReducer(authConfig, appReducer),
});

export default rootReducer;
