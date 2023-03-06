import icons from "../../ultis/icons";
import Tippy from "@tippyjs/react";
import CenterPlayer from "./CenterPlayer";
import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Artist from "../Shared/Artist";
import { toggleRightSidebar } from "../../store/actions";

function Player() {
    const { CgMoreAlt, BsVolumeUp, BsMusicNoteList } = icons;
    const infoSong = useSelector((state) => state.app.infoSong);
    console.log("infoSong:", infoSong);
    const isRightSidebar = useSelector((state) => state.app.isRightSidebar);
    const dispatch = useDispatch();

    const [volumeValue, setVolumeValue] = useState(40);
    const currentVolume = (1 / 100) * volumeValue;
    return (
        <div className=" h-full flex px-4 z-50">
            <div className="flex items-center h-full gap-x-3 md:basis-[30%] w-full overflow-hidden">
                <img
                    alt=""
                    className="md:h-[64px] md:w-[64px] w-[40px] h-[40px] rounded-lg"
                    src={infoSong.img}
                />
                <div className="flex flex-col font-semibold">
                    <span className="text-sm whitespace-nowrap">
                        {infoSong.name}
                    </span>
                    <div className="text-xs">
                        {infoSong.artists?.map((artist, index) => (
                            <Artist
                                name={artist.name}
                                link={artist.link}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
                <Tippy content="Xem thêm">
                    <button className="btn-primary">
                        <CgMoreAlt />
                    </button>
                </Tippy>
            </div>
            <div className="basis-[40%] flex">
                <CenterPlayer currentVolume={currentVolume} />
            </div>
            <div className="md:basis-[30%] w-full md:flex justify-center items-center text-lg hidden">
                <button className="flex items-center">
                    <BsVolumeUp />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volumeValue}
                        onChange={(e) => {
                            setVolumeValue(e.target.value);
                        }}
                        className=" overflow-hidden mx-4 appearance-none rounded-full h-1 hover:h-2 bg-alpha range cursor-pointer"
                    />
                </button>
                <div className="pl-4 border-l-2 border-alpha">
                    <button
                        className={`p-2   rounded-md hover:opacity-80 ${
                            !isRightSidebar ? "bg-primary" : "bg-alpha"
                        }`}
                        onClick={() => {
                            dispatch(toggleRightSidebar());
                        }}
                    >
                        <BsMusicNoteList />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default memo(Player);
