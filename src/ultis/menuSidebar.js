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
        title: "Theo dõi",
        icon: icons.BiNews,
        path: path.FOLLOW,
    },
];

export const subMenu = [
    {
        title: "Nhạc mới",
        icon: icons.BsMusicNoteBeamed,
        path: path.NEWMUSIC,
    },
    {
        title: "Thể loại",
        icon: icons.BiCategoryAlt,
        path: path.HUB,
    },
    {
        title: "Top 100",
        icon: icons.AiOutlineStar,
        path: path.TOP,
    },
    {
        title: "MV",
        icon: icons.MdMusicVideo,
        path: path.MV,
    },
];
