import { NavLink } from "react-router-dom";
import logo from "../../asset/logo.svg";
import { primaryMenu, subMenu } from "../../ultis/menuSidebar";
import { AiOutlinePlus } from "react-icons/ai";
import { memo } from "react";

function LeftSidebar() {
    console.log("left");
    return (
        <div
            className=" flex-auto w-full flex flex-col pointer-events-auto text-[14px] font-bold h-[calc(100vh-90px)]"
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
            <div className="relative overflow-hidden hover:overflow-y-auto pt-5 after:block after:absolute after:h-[1px] after:w-3/4 after:bg-alpha after:top-0 after:right-1/2 after:translate-x-2/4">
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
            <div className=" w-full gap-x-2 mt-auto p-4 flex items-center justify-center text-[15px] font-semibold border-t border-alpha ">
                {<AiOutlinePlus className=" text-[20px]" />}
                <span> Tạo playlist mới</span>
            </div>
        </div>
    );
}

export default memo(LeftSidebar);
