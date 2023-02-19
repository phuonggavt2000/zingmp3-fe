/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {} from "react-redux";
import { useNavigate } from "react-router-dom";
import icons from "../ultis/icons";
import moment from "moment/moment";

function NewMusic({ newMusics = {} }) {
    const navigate = useNavigate();
    const { AiOutlineRight, FaPlay } = icons;

    const [activeStatus, setActiveStatus] = useState(0);
    const [typeMusic, setTypeMusic] = useState("all");
    const [limitedMusics, setLimitedMusic] = useState([]);

    const handleNavigate = (path = "/newMusic") => {
        navigate(path);
    };

    const changeTypeMusic = (index, type) => {
        setActiveStatus(index);
        setTypeMusic(type);
    };

    useEffect(() => {
        let dataMusics = newMusics[typeMusic] || [];
        const limitedMusics = dataMusics.filter((music, index) => 12 > index);
        setLimitedMusic(limitedMusics);
    }, [typeMusic, newMusics]);

    const selectStatus = [
        {
            title: "tất cả",
            type: "all",
        },
        {
            title: "Việt nam",
            type: "vPop",
        },
        {
            title: "Quốc tế",
            type: "others",
        },
    ];

    return (
        <div className="mt-12">
            <span className="text-xl font-extrabold">Mới Phát hành</span>
            <div className="my-5 flex items-center">
                <div className="flex items-center gap-x-2">
                    {selectStatus.map((value, index) => (
                        <button
                            key={index}
                            onClick={() => changeTypeMusic(index, value.type)}
                            className={`outline-none  px-6 py-1 text-xs uppercase rounded-full ${
                                index === activeStatus
                                    ? "bg-primary"
                                    : "border border-alpha hover:brightness-90"
                            }`}
                        >
                            {value.title}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => {
                        handleNavigate();
                    }}
                    className="ml-auto text-xs uppercase flex items-center gap-x-1 text-secondary hover:text-primary"
                >
                    <span>Tất cả</span> <AiOutlineRight className="text-base" />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-x-6">
                {limitedMusics.map((newMusic, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-x-2 p-3 group hover:bg-alpha rounded-md"
                    >
                        <div className="h-[60px] w-[60px] rounded-md overflow-hidden relative flex">
                            <img
                                alt=""
                                src={newMusic.thumbnail}
                                className="flex-shrink-0"
                            />
                            <div className="absolute cursor-pointer opacity-0 group-hover:opacity-100 inset-0 h-full w-full z-10 bg-dark-alpha-50 flex items-center justify-center">
                                <FaPlay />
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-1">
                            <span className="text-sm capitalize whitespace-nowrap font-semibold">
                                {newMusic.title}
                            </span>
                            <div className="text-xs capitalize flex gap-x-1 text-secondary whitespace-nowrap font-semibold">
                                {newMusic.artists.map((artist, index) => (
                                    <span className="link-artist" key={index}>
                                        {artist.name}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs capitalize text-secondary  font-semibold">
                                {moment.unix(newMusic.releaseDate).fromNow()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewMusic;
