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
}) {
    const { FaPlay, FaPause, AiOutlineHeart, AiFillHeart } = icons;
    const dispatch = useDispatch();

    const [isLike, setIsLike] = useState(false);

    const id = useSelector((state) => state.app.infoSong.id);
    const isPlay = useSelector((state) => state.app.isPlay);
    const isLoadingMusic = useSelector((state) => state.app.isLoadingMusic);
    const mySongs = useSelector((state) => state.app.mySongs);

    const isPlaying = id === idSong && isPlay;

    const handleMusic = () => {
        if (isPlaying) {
            dispatch(toggleMusic());
        } else if (id === idSong) {
            dispatch(toggleMusic());
        } else {
            handleChangeMusic(index);
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
    return (
        <div
            className={`flex relative items-center gap-x-2 p-3 group hover:bg-alpha rounded-md text-white overflow-hidden ${
                id === idSong ? "bg-alpha" : ""
            }`}
        >
            <div
                className={`rounded-md overflow-hidden relative flex h-[60px] w-[60px]  flex-shrink-0 ${
                    isLoadingMusic ? "pointer-events-none" : ""
                }`}
                onClick={handleMusic}
            >
                <img alt="" src={img} className=" " />
                <div
                    className={`absolute cursor-pointer opacity-0 group-hover:opacity-100 inset-0 h-full w-full z-10 bg-dark-alpha-50 flex items-center justify-center ${
                        id === idSong ? "opacity-100 " : ""
                    }`}
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
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
                <span className="text-xs capitalize text-secondary  font-semibold">
                    {moment.unix(releaseDate).fromNow()}
                </span>
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
