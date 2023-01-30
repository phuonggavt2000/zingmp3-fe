import icons from "../ultis/icons";
import Search from "./Search";
import theme from "../asset/theme.svg";

function Header() {
    const { ImPrevious2, ImNext2 } = icons;
    return (
        <div className="flex h-full px-14 items-center gap-2 ">
            <div className="flex text-[23px] gap-2 text-gray-400">
                <ImPrevious2 />
                <ImNext2 />
            </div>
            <div className="basis-1/2">
                <Search />
            </div>
            <div>
                <img src={theme} />
            </div>
        </div>
    );
}

export default Header;
