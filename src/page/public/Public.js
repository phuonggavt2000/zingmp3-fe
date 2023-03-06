import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../../components/Layout/Header";
import LeftSidebar from "../../components/Layout/LeftSidebar";
import Player from "../../components/Player/Player";
import PreLoader from "../../components/Shared/PreLoader";
import Toast from "../../components/Shared/Toast";
import RightSidebar from "../../components/Layout/RightSidebar";
import LeftSidebarMb from "../../components/Layout/LeftSidebarMb";

function Public() {
    const theme = useSelector((state) => state.app.theme);
    const [scrollTop, setScrollTop] = useState(0);
    const loading = useSelector((state) => state.app.isLoadingPage);

    const handleScroll = (e) => {
        setScrollTop(e.target.scrollTop);
    };

    return (
        <div
            className={`w-screen h-screen relative  flex flex-col bg-screen text-main ${theme}`}
        >
            <div className="flex-auto flex h-[calc(100vh-90px)] ">
                <div className="md:flex hidden flex-none xl:w-leftSidebar md:w-[70px]   bg-alpha">
                    <LeftSidebar />
                </div>
                <LeftSidebarMb />

                <div className="flex-auto xl:w-[calc(100vw-240px)] md:w-[calc(100vw-70px)] w-screen flex flex-col h-full">
                    <Header scrollTop={scrollTop} />
                    <div
                        className=" flex-auto  h-full overflow-hidden hover:overlay relative z-20"
                        onScroll={handleScroll}
                    >
                        <Outlet />
                        {loading && <PreLoader />}
                        <Toast />
                    </div>
                </div>
                <RightSidebar />
            </div>
            <div className="w-full md:h-[90px] h-[50px] bg-screen border-t md:border-transparent border-alpha overflow-hidden md:z-50 z-20 relative md:bottom-0 bottom-[10px]">
                <Player />
            </div>
        </div>
    );
}

export default Public;
