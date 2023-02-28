import icons from "../../ultis/icons";
import Tippy from "@tippyjs/react";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import Artist from "./Artist";

function Playlist({ isArtirt = false, playlist }) {
    const { AiOutlineHeart, BsPlayCircle, CgMoreAlt } = icons;

    const navigate = useNavigate();

    const handleNavigate = (path, encodeId, type) => {
        const albumPath = path.split(".")[0];
        navigate(albumPath);
    };

    return (
        <div className="font-bold capitalize mt-12 flex flex-col gap-y-4">
            <span className=" text-xl ">{playlist?.title}</span>
            <div className="grid grid-cols-5 gap-x-6 grid-rows-1 overflow-hidden">
                {playlist?.items?.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-y-1 col-span-1"
                    >
                        <div
                            onClick={() => {
                                handleNavigate(
                                    item.link,
                                    item.encodeId,
                                    "playlist"
                                );
                            }}
                        >
                            <div className="relative cursor-pointer group overflow-hidden rounded-md text-white">
                                <img
                                    alt=""
                                    className=" group-hover:scale-110 transition-all"
                                    src={item.thumbnailM}
                                />
                                <div className=" inset-0 transition-all bg-dark-alpha-50 justify-center items-center flex gap-x-5 text-3xl opacity-0 group-hover:opacity-100 absolute">
                                    <button className="p-1 rounded-full hover:bg-alpha">
                                        <AiOutlineHeart />
                                    </button>
                                    <button className="text-5xl">
                                        <BsPlayCircle />
                                    </button>
                                    <Tippy content="Xem thêm">
                                        <button className="p-1 rounded-full hover:bg-alpha">
                                            <CgMoreAlt />
                                        </button>
                                    </Tippy>
                                </div>
                            </div>
                            <span className="text-sm mt-1 line-clamp-2 hover:text-primary cursor-pointer">
                                {item.title}
                            </span>
                        </div>

                        <div className=" text-sm font-medium line-clamp-2 text-secondary">
                            {isArtirt ? (
                                item.artists?.map((artist, index) => (
                                    <Artist
                                        key={index}
                                        name={artist.name}
                                        link={artist.link}
                                        playlist
                                    />
                                ))
                            ) : (
                                <span className="">{item.sortDescription}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default memo(Playlist);
