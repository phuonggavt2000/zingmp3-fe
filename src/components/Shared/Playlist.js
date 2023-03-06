import icons from "../../ultis/icons";
import Tippy from "@tippyjs/react";
import { useNavigate } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import Artist from "./Artist";
import { useDispatch, useSelector } from "react-redux";
import { addMyPlaylist, removeMyPlaylist } from "../../store/actions";

function Playlist({ isArtirt = false, playlist }) {
    const { AiOutlineHeart, BsPlayCircle, CgMoreAlt, AiFillHeart } = icons;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const myPlaylists = useSelector((state) => state.app.myPlaylists);

    const [idPlaylist, setIdPlaylist] = useState([]);
    const [dataPlaylist, setDataPlaylist] = useState([]);
    const [widthValue, setWidthValue] = useState(window.innerWidth);

    const handleNavigate = (path, encodeId, type) => {
        const albumPath = path.split(".")[0];
        navigate(albumPath);
    };

    const handleAddPlaylist = (index) => {
        const convertPlaylist = playlist.items[index];
        dispatch(addMyPlaylist(convertPlaylist));
    };

    const handleRemovePlaylist = (id) => {
        dispatch(removeMyPlaylist(id));
    };

    useEffect(() => {
        const convertId = myPlaylists.map((item) => item.encodeId);
        setIdPlaylist(convertId);
    }, [myPlaylists]);

    useEffect(() => {
        const detectSize = () => {
            setWidthValue(window.innerWidth);
        };
        window.addEventListener("resize", detectSize);
        return () => window.addEventListener("resize", detectSize);
    }, []);

    useEffect(() => {
        const handleResizePlaylist = () => {
            let hPlaylist = [];
            if (window.innerWidth < 1024 && window.innerWidth > 768) {
                hPlaylist = playlist?.items?.filter((item, index) => index < 4);
            } else if (window.innerWidth < 768) {
                hPlaylist = playlist?.items?.filter((item, index) => index < 3);
            } else {
                hPlaylist = playlist?.items?.filter((item, index) => index < 5);
            }
            setDataPlaylist(hPlaylist);
        };

        handleResizePlaylist();
    }, [playlist, widthValue]);

    return (
        <div className="font-bold capitalize mt-12 flex flex-col gap-y-4">
            <span className=" text-xl ">{playlist?.title}</span>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3  gap-x-6 gap-y-10 grid-rows-1 overflow-hidden">
                {dataPlaylist?.map((item, index) => {
                    const isLike = idPlaylist.includes(item.encodeId);
                    return (
                        <div
                            key={index}
                            className="flex flex-col gap-y-1 col-span-1 "
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
                                        {isLike ? (
                                            <button
                                                className="p-1 rounded-full hover:bg-alpha text-primary"
                                                onClick={() =>
                                                    handleRemovePlaylist(
                                                        item.encodeId
                                                    )
                                                }
                                            >
                                                <AiFillHeart />
                                            </button>
                                        ) : (
                                            <button
                                                className="p-1 rounded-full hover:bg-alpha"
                                                onClick={() =>
                                                    handleAddPlaylist(index)
                                                }
                                            >
                                                <AiOutlineHeart />
                                            </button>
                                        )}

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
                                    <span className="">
                                        {item.sortDescription}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default memo(Playlist);
