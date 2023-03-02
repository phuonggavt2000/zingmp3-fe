import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../../components/Layout/Header";
import LeftSidebar from "../../components/Layout/LeftSidebar";
import Player from "../../components/Player/Player";
import PreLoader from "../../components/Shared/PreLoader";
import Toast from "../../components/Shared/Toast";
import RightSidebar from "../../components/Layout/RightSidebar";

function Public() {
    const theme = useSelector((state) => state.app.theme);
    const [scrollTop, setScrollTop] = useState(0);
    const loading = useSelector((state) => state.app.isLoadingPage);

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
            <div className="w-full h-[90px] bg-player z-50">
                <Player />
            </div>
        </div>
    );
}

export default Public;
