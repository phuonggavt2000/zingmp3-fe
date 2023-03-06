import icons from "../../ultis/icons";
import Search from "./Search";
import Tippy from "@tippyjs/react";
import { menuHeader } from "../../ultis/menuHeader";
import ModalTheme from "../Modal/ModalTheme";
import { useState } from "react";

function Header({ scrollTop }) {
    const { ImPrevious2, ImNext2 } = icons;
    const [modalTheme, setModalTheme] = useState(false);

    const handleModalTheme = (modal) => {
        if (modal) {
            setModalTheme(!modalTheme);
        }
    };

    return (
        <div
            className={`fixed transition-all  top-0 right-0 xl:w-[calc(100vw-240px)] md:w-[calc(100vw-70px)] w-screen h-[70px] z-30 ${
                scrollTop > 60 ? "bg-header shadow-lg" : "bg-transparent "
            }`}
        >
            <div className="flex h-full md:px-14 px-6 items-center gap-2  select-none">
                <div className="md:flex text-[23px] gap-2 hidden text-gray-400">
                    <ImPrevious2 />
                    <ImNext2 />
                </div>
                <div className="md:basis-1/2 w-full pr-4">
                    <Search />
                </div>
                <div className="ml-auto flex">
                    {menuHeader.map((value, index) => (
                        <Tippy
                            content={value.content}
                            key={index}
                            placement="top"
                        >
                            <div
                                className="h-[40px] w-[40px] hover:opacity-80 md:[&:nth-child(3)]:flex md:[&:nth-child(2)]:flex  [&:nth-child(3)]:hidden [&:nth-child(2)]:hidden flex  justify-center items-center   bg-alpha rounded-full cursor-pointer mx-2"
                                onClick={() => handleModalTheme(value.modal)}
                            >
                                {value.icon}
                            </div>
                        </Tippy>
                    ))}
                </div>
                {modalTheme && (
                    <ModalTheme
                        ismodal={modalTheme}
                        closemodal={handleModalTheme}
                    />
                )}
            </div>
        </div>
    );
}

export default Header;
