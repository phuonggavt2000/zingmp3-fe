import icons from "./icons";
import path from "./path";

export const primaryMenu = [
    {
        title: "Cá nhân",
        icon: icons.MdMusicVideo,
        path: path.MYMUSIC,
    },
    {
        title: "Khám phá",
        icon: icons.MdOutlineTravelExplore,
        path: path.HOME,
    },
    {
        title: "#zingchart",
        icon: icons.GiChart,
        path: path.ZINGCHART,
    },
    {
        title: "Xếp hạng tuần",
        icon: icons.BiNews,
        path: path.TOPWEEK,
    },
];

export const subMenu = [
    {
        title: "Nhạc mới",
        icon: icons.BsMusicNoteBeamed,
        path: path.NEWMUSIC,
    },
    {
        title: "Top 100",
        icon: icons.AiOutlineStar,
        path: path.TOP,
    },
];
