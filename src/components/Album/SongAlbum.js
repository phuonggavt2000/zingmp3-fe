import Img from "../Shared/Img";
import icons from "../../ultis/icons";
import moment from "moment";
import Artist from "../Shared/Artist";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPlaylist } from "../../store/actions";

function SongAlbum({ title, duration, album, artists, img }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { BsMusicNoteBeamed } = icons;
    const durationFormat = moment
        .utc(moment.duration(duration, "seconds").asMilliseconds())
        .format("mm:ss");

    return (
        <div className=" grid grid-cols-6 px-6 group relative py-2 border-b border-alpha hover:bg-alpha  hover:rounded-md">
            <BsMusicNoteBeamed className="absolute left-0 bottom-1/2 translate-y-1/2" />
            <div className="grid col-span-3">
                <div className="flex items-center gap-x-2 group ">
                    <Img img={img} height="40px" width="40px" />
                    <div className="capitalize">
                        <span className="text-main ">{title}</span>
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
            <div className="grid col-span-2">
                <div className="flex items-center text-xs">
                    <span
                        className="link-artist"
                        onClick={() => {
                            navigate(album?.link);
                            dispatch(getPlaylist(album?.encodeId));
                        }}
                    >
                        {album?.title}{" "}
                    </span>
                </div>
            </div>
            <div className="grid col-span-1 text-right">
                <div className="flex items-center">
                    <span className="ml-auto text-xs">{durationFormat}</span>
                </div>
            </div>
        </div>
    );
}

export default SongAlbum;
