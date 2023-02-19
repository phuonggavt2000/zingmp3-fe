import { Follow, Home, Login, MyMusic, ZingChart, Album } from "../page/public";
import Hub from "../page/public/Hub";
import MV from "../page/public/MV";
import NewMusic from "../page/public/NewMusic";
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
        path: path.FOLLOW,
        component: Follow,
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
        path: path.HUB,
        component: Hub,
    },
    {
        path: path.TOP,
        component: Top100,
    },
    {
        path: path.MV,
        component: MV,
    },
    {
        path: path.ALBUM,
        component: Album,
    },
];

export default routes;
