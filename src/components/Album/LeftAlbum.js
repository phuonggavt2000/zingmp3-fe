import icons from "../../ultis/icons";
import Tippy from "@tippyjs/react";
import moment from "moment";
import numFormat from "../../ultis/numFormat";
import Artist from "../Shared/Artist";
import { useDispatch, useSelector } from "react-redux";
import { removeMyPlaylist, toggleMusic } from "../../store/actions";
import { useEffect, useState } from "react";

function LeftAlbum({
    img,
    title,
    like,
    dateUpdatem,
    artists,
    handleAddPlaylist,
    id,
}) {
    const {
        BsPlayCircle,
        AiOutlineHeart,
        CgMoreAlt,
        BsFillPlayFill,
        BsPauseFill,
        BsPauseCircle,
        AiFillHeart,
    } = icons;
    const dispatch = useDispatch();
    const isPlay = useSelector((state) => state.app.isPlay);
    const myPlaylists = useSelector((state) => state.app.myPlaylists);
    const dateString = moment(dateUpdatem).format("DD/MM/YYYY");

    const [islike, setIsLike] = useState(false);
    console.log("like:", islike);

    const handleRemovePlaylist = () => {
        dispatch(removeMyPlaylist(id));
    };

    useEffect(() => {
        const checkLike = myPlaylists.map((item) => item.encodeId).includes(id);
        setIsLike(checkLike);
    }, [myPlaylists, id]);

    return (
        <div className="col-span-2 overflow-hidden">
            <div className="flex flex-col items-center gap-y-1 text-xs text-secondary text-center font-medium pr-6">
                <div className="relative cursor-pointer group overflow-hidden rounded-md">
                    <img
                        alt=""
                        className="transition-all ease-linear duration-300  group-hover:scale-110"
                        src={img}
                    />
                    <div
                        onClick={() => {
                            dispatch(toggleMusic());
                        }}
                        className=" inset-0 transition-all bg-dark-alpha-50 justify-center items-center flex gap-x-5 text-3xl opacity-0 group-hover:opacity-100 absolute"
                    >
                        <button className="text-5xl text-white">
                            {isPlay ? <BsPauseCircle /> : <BsPlayCircle />}
                        </button>
                    </div>
                </div>
                <span className="text-base uppercase text-center font-bold text-main mt-2">
                    {title}
                </span>
                <span>Cập nhập: {dateString} </span>
                <div className="text-center w-full overflow-hidden flex flex-wrap justify-center    ">
                    {artists?.map((artist, index) => (
                        <Artist
                            name={artist.name}
                            id={artist.id}
                            link={artist.link}
                            key={index}
                        />
                    ))}
                </div>
                <span>{numFormat(like)} người yêu thích</span>
                <div
                    onClick={() => {
                        dispatch(toggleMusic());
                    }}
                >
                    {!isPlay ? (
                        <button className=" flex items-center bg-primary text-white px-6 py-2 rounded-full text-sm font-normal uppercase hover:brightness-90">
                            <BsFillPlayFill className="text-2xl" /> Tiếp tục
                            phát
                        </button>
                    ) : (
                        <button className=" flex items-center bg-primary text-white px-6 py-2 rounded-full text-sm font-normal uppercase hover:brightness-90">
                            <BsPauseFill className="text-2xl" /> Tạm dừng
                        </button>
                    )}
                </div>
                <div>
                    <Tippy content="Thêm vào thư viện">
                        {islike ? (
                            <button
                                className="btn-primary p-3 text-base text-primary"
                                onClick={handleRemovePlaylist}
                            >
                                <AiFillHeart />
                            </button>
                        ) : (
                            <button
                                className="btn-primary p-3 text-base text-main"
                                onClick={handleAddPlaylist}
                            >
                                <AiOutlineHeart />
                            </button>
                        )}
                    </Tippy>
                    <Tippy content="Xem thêm">
                        <button className="btn-primary p-3 text-base text-main">
                            <CgMoreAlt />
                        </button>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default LeftAlbum;
