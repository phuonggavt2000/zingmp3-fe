import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import LeftSidebar from "../../components/LeftSidebar";
import Player from "../../components/Player";
import RightSidebar from "../../components/RightSidebar";

function Public() {
    return (
        <div className="w-full h-full flex flex-col bg-skin text-main">
            <div className="flex-auto flex">
                <div className="flex flex-none w-leftSidebar bg-alpha">
                    <LeftSidebar />
                </div>
                <div className="flex-auto  flex flex-col">
                    <div className="h-header ">
                        <Header />
                    </div>
                    <div className=" flex-auto  ">
                        <Outlet />
                    </div>
                </div>
                <div className="flex-none w-rightSidebar border-gray-400 border-l">
                    <RightSidebar />
                </div>
            </div>
            <div className="w-full h-player bg-player">
                <Player />
            </div>
        </div>
    );
}

export default Public;
