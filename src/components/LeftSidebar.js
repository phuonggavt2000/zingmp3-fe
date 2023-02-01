import { NavLink } from "react-router-dom";
import logo from "../asset/logo.svg";
import { primaryMenu, subMenu } from "../ultis/menuSidebar";
import icons from "../ultis/icons";
import { AiOutlinePlus } from "react-icons/ai";

function LeftSidebar() {
    return (
        <div
            className=" flex-auto flex flex-col pointer-events-auto text-[14px] font-bold h-[calc(100vh-90px)]"
            draggable={false}
        >
            <div className="h-[70px] w-full px-7 flex  items-center ">
                <img
                    src={logo}
                    alt="error"
                    className="w-[120px] h-[40px] "
                    draggable={false}
                />
            </div>
            <div className=" pb-5">
                {primaryMenu.map((menu, index) => {
                    const Icon = menu.icon;
                    return (
                        <NavLink
                            key={index}
                            to={menu.path}
                            className={({ isActive }) =>
                                isActive ? "active-sidebar" : "inactive-sidebar"
                            }
                            draggable={false}
                        >
                            <Icon />
                            <span className="px-4 ">{menu.title}</span>
                        </NavLink>
                    );
                })}
            </div>
            <div className="relative overflow-hidden hover:overflow-y-auto pt-5 after:block after:absolute after:h-[1px] after:w-3/4 after:bg-primary after:top-0 after:right-1/2 after:translate-x-2/4">
                {subMenu.map((menu, index) => {
                    const Icon = menu.icon;
                    return (
                        <NavLink
                            key={index}
                            to={menu.path}
                            className={({ isActive }) =>
                                isActive ? "active-sidebar" : "inactive-sidebar"
                            }
                            draggable={false}
                        >
                            <Icon />
                            <span className="px-4 ">{menu.title}</span>
                        </NavLink>
                    );
                })}{" "}
            </div>
            <div className=" w-full mt-auto p-4 flex items-center justify-center text-[15px] font-semibold border-t border-primary ">
                {<AiOutlinePlus className="mr-1 text-[20px]" />}
                <span className="ml-1"> Tạo playlist mới</span>
            </div>
        </div>
    );
}

export default LeftSidebar;
