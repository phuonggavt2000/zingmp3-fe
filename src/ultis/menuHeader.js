import theme from "../asset/theme.png";
import icons from "./icons";
import avt from "../asset/noavt.png";

const { RiVipLine, AiOutlineSetting } = icons;

export const menuHeader = [
    {
        content: "Chủ Đề",
        icon: <img src={theme} alt="error" className="w-[20px] h-[20px]" />,
    },
    {
        content: "Nâng Cấp Vip",
        icon: <RiVipLine />,
    },
    {
        content: "Cài Đặt",
        icon: <AiOutlineSetting />,
    },
    {
        content: "Đăng nhập",
        icon: <img src={avt} alt="error" className="w-[20px] h-[20px]" />,
    },
];
