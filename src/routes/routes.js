import {
    TopWeek,
    Home,
    Login,
    MyMusic,
    ZingChart,
    Album,
} from "../page/public";
import Artist from "../page/public/Artist";
import NewMusic from "../page/public/NewMusic";
import SearchAll from "../page/public/SearchAll";
import Top100 from "../page/public/Top100";
import path from "../ultis/path";

const routes = [
    {
        path: path.HOME,
        component: Home,
    },
    {
        path: path.LOGIN,
        component: Login,
    },
    {
        path: path.TOPWEEK,
        component: TopWeek,
    },
    {
        path: path.MYMUSIC,
        component: MyMusic,
    },
    {
        path: path.ZINGCHART,
        component: ZingChart,
    },
    {
        path: path.NEWMUSIC,
        component: NewMusic,
    },

    {
        path: path.TOP,
        component: Top100,
    },
    {
        path: path.ALBUM,
        component: Album,
    },
    {
        path: path.ARTIST,
        component: Artist,
    },
    {
        path: path.ARTIST_PLUS,
        component: Artist,
    },
    {
        path: path.SEARCHALL,
        component: SearchAll,
    },
    {
        path: path.PLAYLIST,
        component: Album,
    },
];

export default routes;
