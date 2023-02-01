import icons from "../ultis/icons";
import Search from "./Search";
import Tippy from "@tippyjs/react";
import theme from "../asset/theme.png";
import { menuHeader } from "../ultis/menuHeader";

function Header() {
    const { ImPrevious2, ImNext2, RiVipLine } = icons;
    return (
        <div className="flex h-full px-14 items-center gap-2  ">
            <div className="flex text-[23px] gap-2 text-gray-400">
                <ImPrevious2 />
                <ImNext2 />
            </div>
            <div className="basis-1/2 pr-4">
                <Search />
            </div>
            <div className="ml-auto flex">
                {menuHeader.map((value, index) => (
                    <Tippy content={value.content} key={index}>
                        <div className="h-[40px] w-[40px] hover:bg-hoverIcon flex justify-center items-center bg-alpha rounded-full cursor-pointer mx-2">
                            {value.icon}
                        </div>
                    </Tippy>
                ))}
            </div>
        </div>
    );
}

export default Header;
