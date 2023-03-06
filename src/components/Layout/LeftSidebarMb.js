import { NavLink } from "react-router-dom";
import { primaryMenu, subMenu } from "../../ultis/menuSidebar";

function LeftSidebarMb() {
    return (
        <div className="fixed bottom-0 left-0 right-0  h-[50px] w-full border-t border-alpha  bg-screen ">
            <div className="h-full w-full flex">
                {primaryMenu.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={({ isActive }) =>
                                isActive
                                    ? "w-full h-full flex justify-center items-center bg-alpha"
                                    : "w-full h-full flex justify-center items-center"
                            }
                        >
                            <Icon className="text-lg" />
                        </NavLink>
                    );
                })}
                {subMenu.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={({ isActive }) =>
                                isActive
                                    ? "w-full h-full flex justify-center items-center bg-alpha"
                                    : "w-full h-full flex justify-center items-center"
                            }
                        >
                            <Icon className="text-lg" />
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}

export default LeftSidebarMb;
