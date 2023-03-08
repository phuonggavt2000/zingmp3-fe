import Artist from "../Shared/Artist";
import moment from "moment/moment";
import icons from "../../ultis/icons";
import { useDispatch, useSelector } from "react-redux";
import { addMySong, removeMySong, toggleMusic } from "../../store/actions";
import { memo, useEffect, useState } from "react";

function Music({
    title,
    img,
    artists,
    releaseDate,
    idSong,
    handleChangeMusic,
    index,
    album = {},
    duration,
    search,
    searchAll,
    musicSearch,
}) {
    const { FaPlay, FaPause, AiOutlineHeart, AiFillHeart, BiLoader } = icons;
    const dispatch = useDispatch();

    const [isLike, setIsLike] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const id = useSelector((state) => state.app.infoSong.id);
    const isPlay = useSelector((state) => state.app.isPlay);
    const isLoadingMusic = useSelector((state) => state.app.isLoadingMusic);
    const currentSong = useSelector((state) => state.app.currentSong);
    console.log("isLoadingMusic:", isLoadingMusic);
    const mySongs = useSelector((state) => state.app.mySongs);

    const isPlaying = id === idSong && isPlay;

    const handleMusic = () => {
        if (isPlaying) {
            dispatch(toggleMusic());
        } else if (id === idSong) {
            dispatch(toggleMusic());
        } else {
            handleChangeMusic(index, musicSearch);
        }
    };

    const handleGetMySong = () => {
        const detailMusic = {
            album,
            artists,
            duration,
            id: idSong,
            img,
            name: title,
        };
        dispatch(addMySong(detailMusic));
    };

    const handleRemoveMySong = () => {
        dispatch(removeMySong(idSong));
    };

    useEffect(() => {
        const convertIdSongs = mySongs.map((song) => song.id);
        const isLikes = convertIdSongs?.includes(idSong);
        setIsLike(isLikes);
    }, [mySongs, idSong]);
    useEffect(() => {
        const checkActive = index === currentSong;
        setIsActive(checkActive);
    }, [currentSong, index]);
    return (
        <div
            className={`flex relative items-center gap-x-2  group hover:bg-alpha rounded-md text-white overflow-hidden ${
                id === idSong && !isLoadingMusic
                    ? "bg-alpha"
                    : isActive && isLoadingMusic
                    ? "bg-alpha"
                    : ""
            } ${search ? "p-2" : searchAll ? "p-2 bg-alpha" : "p-3"}`}
        >
            <div
                className={`rounded-md overflow-hidden relative flex  flex-shrink-0 ${
                    isLoadingMusic ? "pointer-events-none" : ""
                } ${
                    search
                        ? "h-[52px] w-[52px]"
                        : searchAll
                        ? "h-[88px] w-[88px] "
                        : "h-[60px] w-[60px] "
                }`}
                onClick={handleMusic}
            >
                <img alt="" src={img} className=" " />
                <div
                    className={`absolute cursor-pointer opacity-0 group-hover:opacity-100 inset-0 h-full w-full z-10 bg-dark-alpha-50 flex items-center justify-center ${
                        id === idSong && !isLoadingMusic
                            ? "opacity-100 "
                            : isActive && isLoadingMusic
                            ? "opacity-100 "
                            : ""
                    }`}
                >
                    {!isLoadingMusic && (isPlaying ? <FaPause /> : <FaPlay />)}
                    {isLoadingMusic && <BiLoader className="animate-spin" />}
                </div>
            </div>

            <div className="flex flex-col gap-y-1 relative">
                <span className="text-sm capitalize whitespace-nowrap font-semibold">
                    {title}
                </span>
                <div className="text-xs capitalize flex text-secondary whitespace-nowrap font-semibold">
                    {artists?.map((artist, index) => (
                        <Artist
                            name={artist.name}
                            alias={artist.alias}
                            link={artist.link}
                            key={index}
                        />
                    ))}
                </div>
                {!search && (
                    <span className="text-xs capitalize text-secondary  font-semibold">
                        {moment.unix(releaseDate).fromNow()}
                    </span>
                )}
            </div>
            <div className="absolute right-5 opacity-0 group-hover:opacity-100">
                {isLike ? (
                    <button
                        onClick={handleRemoveMySong}
                        className="btn-primary text-primary opacity-0 group-hover:opacity-100"
                    >
                        <AiFillHeart />
                    </button>
                ) : (
                    <button
                        onClick={handleGetMySong}
                        className=" btn-primary opacity-0 group-hover:opacity-100"
                    >
                        <AiOutlineHeart />
                    </button>
                )}
            </div>
        </div>
    );
}

export default memo(Music);
