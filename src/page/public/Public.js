import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import LeftSidebar from "../../components/LeftSidebar";
import Player from "../../components/Player";

function Public() {
    const theme = useSelector((state) => state.app.theme);
    const [scrollTop, setScrollTop] = useState(0);
    console.log(scrollTop);

    const handleScroll = (e) => {
        setScrollTop(e.target.scrollTop);
    };
    return (
        <div
            className={`w-screen h-screen flex flex-col bg-screen text-main ${theme}`}
        >
            <div className="flex-auto flex h-[calc(100vh-90px)]">
                <div className="flex flex-none w-leftSidebar bg-alpha">
                    <LeftSidebar />
                </div>
                <div className="flex-auto w-[calc(100vw-240px)] flex flex-col h-full">
                    <Header scrollTop={scrollTop} />
                    <div
                        className=" flex-auto  h-full overflow-hidden hover:overlay px-16 py-14"
                        onScroll={handleScroll}
                    >
                        <Outlet />
                    </div>
                </div>
                {/* <div className="flex-none w-rightSidebar border-gray-400 border-l">
                    <RightSidebar />
                </div> */}
            </div>
            <div className="w-full h-[90px] bg-player">
                <Player />
            </div>
        </div>
    );
}

export default Public;
