import Img from "../Shared/Img";
import icons from "../../ultis/icons";
import moment from "moment";
import Artist from "../Shared/Artist";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMusic, updateSong } from "../../store/actions";

function SongAlbum({
    idSong,
    title,
    duration,
    album,
    artists,
    img,
    index,
    rightSideBar,
}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { BsMusicNoteBeamed } = icons;
    const durationFormat = moment
        .utc(moment.duration(duration, "seconds").asMilliseconds())
        .format("mm:ss");
    const isPlay = useSelector((state) => state.app.isPlay);
    const id = useSelector((state) => state.app.infoSong.id);
    const isPlaying = id === idSong && isPlay;

    const handleGetSong = () => {
        if (isPlaying) {
            dispatch(toggleMusic());
        } else if (id === idSong) {
            dispatch(toggleMusic());
        } else {
            dispatch(updateSong(index));
        }
    };

    return (
        <div
            className={`song-album w-full  px-6 group relative py-2 ${
                rightSideBar ? "border-none" : "border-b grid-cols-6 grid"
            } border-alpha   ${
                id === idSong
                    ? `${rightSideBar ? "bg-primary" : "bg-alpha"} rounded-md`
                    : " hover:bg-alpha hover:rounded-md "
            } `}
        >
            {!rightSideBar && (
                <BsMusicNoteBeamed className="absolute left-0 bottom-1/2 translate-y-1/2" />
            )}
            <div className={` ${rightSideBar ? "w-full " : "grid col-span-3"}`}>
                <div className="flex items-center gap-x-2 group w-full">
                    <Img
                        handleGetSong={handleGetSong}
                        img={img}
                        height="40px"
                        width="40px"
                        isPlaying={isPlaying}
                        id={id}
                        idSong={idSong}
                    />
                    <div className="capitalize w-4/5 truncate">
                        <span className="text-main whitespace-nowrap  truncate overflow-hidden">
                            {title}
                        </span>
                        <div className="whitespace-nowrap flex">
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
            {!rightSideBar && (
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
                <div className="grid col-span-1 text-right">
                    <div className="flex items-center">
                        <span className="ml-auto text-xs">
                            {durationFormat}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SongAlbum;
