import Img from "../Shared/Img";
import icons from "../../ultis/icons";
import moment from "moment";
import Artist from "../Shared/Artist";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    addMySong,
    removeMySong,
    toggleMusic,
    updateSong,
} from "../../store/actions";
import { useState, useEffect } from "react";

function SongAlbum({
    idSong,
    title,
    duration,
    album,
    artists,
    img,
    index,
    rightSideBar,
    handleChangeSong,
    newSong,
    zingChart,
    keyZingChart,
}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLike, setIsLike] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const { BsMusicNoteBeamed, AiFillHeart, AiOutlineHeart } = icons;
    const durationFormat = moment
        .utc(moment.duration(duration, "seconds").asMilliseconds())
        .format("mm:ss");

    const isPlay = useSelector((state) => state.app.isPlay);
    const id = useSelector((state) => state.app.infoSong.id);
    const mySongs = useSelector((state) => state.app.mySongs);
    const isLoadingMusic = useSelector((state) => state.app.isLoadingMusic);
    const currentSong = useSelector((state) => state.app.currentSong);

    const isPlaying = id === idSong && isPlay;

    const handleGetSong = () => {
        if (isPlaying) {
            dispatch(toggleMusic());
        } else if (id === idSong) {
            dispatch(toggleMusic());
        } else {
            if (rightSideBar) {
                dispatch(updateSong(index));
            } else {
                if (zingChart) {
                    handleChangeSong(index, zingChart, keyZingChart);
                } else {
                    handleChangeSong(index);
                }
            }
        }
    };
    const handleAddMySong = () => {
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
        const checkActive = currentSong === index;
        setIsActive(checkActive);
    }, [currentSong, index]);

    return (
        <div
            className={`song-album w-full font-medium px-6 group relative py-2 ${
                rightSideBar ? "border-none" : "border-b grid-cols-6 grid"
            } border-alpha   ${
                id === idSong && !isLoadingMusic
                    ? `${rightSideBar ? "bg-primary" : "bg-alpha"} rounded-md`
                    : isActive && isLoadingMusic
                    ? `${rightSideBar ? "bg-primary" : "bg-alpha"} rounded-md`
                    : " hover:bg-alpha hover:rounded-md "
            } `}
        >
            {!rightSideBar && !newSong && (
                <BsMusicNoteBeamed className="absolute left-2 bottom-1/2 translate-y-1/2 " />
            )}
            {newSong && (
                <span
                    className={`${
                        index === 0
                            ? "text-rank-1"
                            : index === 1
                            ? "text-rank-2"
                            : index === 2
                            ? "text-rank-3"
                            : "text-rank"
                    } absolute left-6 bottom-1/2 translate-y-1/2  font-black text-2xl text-transparent`}
                >
                    {index + 1}
                </span>
            )}
            <div
                className={`overflow-hidden mr-5 line-clamp-1 ${
                    rightSideBar ? "w-full " : "grid  ml-2"
                } ${newSong ? "ml-12" : ""} ${
                    zingChart ? "col-span-4" : "col-span-3"
                }`}
            >
                <div className="flex items-center gap-x-2 group w-full ">
                    <Img
                        handleGetSong={handleGetSong}
                        img={img}
                        height="40px"
                        width="40px"
                        isPlaying={isPlaying}
                        id={id}
                        idSong={idSong}
                        isActive={isActive}
                    />
                    <div className="capitalize w-4/5 truncate">
                        <span className="text-main whitespace-nowrap text-sm  truncate overflow-hidden">
                            {title}
                        </span>
                        <div className="whitespace-nowrap text-xs flex">
                            {artists?.map((artist, index) => (
                                <Artist
                                    name={artist.name}
                                    key={index}
                                    id={artist.id}
                                    link={artist.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {!rightSideBar && !zingChart && (
                <div className="grid col-span-2">
                    <div className="flex items-center text-xs">
                        <span
                            className="link-artist"
                            onClick={() => {
                                const albumPath = album?.link?.split(".")[0];
                                navigate(albumPath);
                            }}
                        >
                            {album?.title}{" "}
                        </span>
                    </div>
                </div>
            )}
            {!rightSideBar && (
                <div
                    className={`grid  text-right  ${
                        zingChart ? "col-span-2" : "col-span-1"
                    }`}
                >
                    <div className="flex items-center justify-center text-secondary">
                        {!(id === idSong) && (
                            <span className="ml-auto text-xs group-hover:hidden">
                                {durationFormat}
                            </span>
                        )}
                    </div>
                </div>
            )}

            <div
                className={` group-hover:flex absolute right-8 bottom-2/4 translate-y-1/2 ${
                    id === idSong ? "flex" : "hidden"
                }`}
            >
                {isLike ? (
                    <button
                        className={`btn-primary ml-auto  ${
                            rightSideBar && id === idSong
                                ? "text-secondary"
                                : "text-primary"
                        }`}
                        onClick={handleRemoveMySong}
                    >
                        <AiFillHeart />
                    </button>
                ) : (
                    <button
                        className="btn-primary ml-auto"
                        onClick={handleAddMySong}
                    >
                        <AiOutlineHeart />
                    </button>
                )}
            </div>
        </div>
    );
}

export default SongAlbum;
