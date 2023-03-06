import { useDispatch, useSelector } from "react-redux";
import { listMusic, updateSong } from "../../store/actions";
import icons from "../../ultis/icons";
import SongAlbum from "../Album/SongAlbum";
import mySongsImg from "../../asset/mySong";
import { Link } from "react-router-dom";
import { useState } from "react";

function Song() {
    const { BiTransfer } = icons;
    const mySongs = useSelector((state) => state.app.mySongs);
    const dispatch = useDispatch();
    const [type, setType] = useState(true);

    const handleChangeSong = (index) => {
        const convertSong = mySongs.map((song) => {
            return {
                id: song.id,
                name: song.name,
                img: song.img,
                duration: song.duration,
                artists: song.artists,
            };
        });
        dispatch(updateSong(index));
        dispatch(listMusic(convertSong));
    };

    return (
        <div>
            <div className="flex gap-x-3">
                <button
                    className={`${
                        type ? "bg-primary" : "border-white border"
                    } px-3 py-1 mt-2 uppercase  font-medium text-xs inline-block rounded-full border-transparent border`}
                    onClick={() => setType(true)}
                >
                    Yêu thích
                </button>
                <button
                    className={`${
                        !type ? "bg-primary" : "border-white border"
                    } px-3 py-1 mt-2 uppercase  font-medium text-xs inline-block rounded-full  border-transparent border`}
                    onClick={() => setType(false)}
                >
                    Đã tải lên
                </button>
            </div>
            {type ? (
                mySongs.length === 0 ? (
                    <div className="flex items-center justify-center flex-col py-8 gap-y-4">
                        <img src={mySongsImg.song} alt="" />
                        <span className="text-base text-secondary">
                            Chưa có bài hát nào đc tải lên trong thư viện cá
                            nhân
                        </span>
                        <div className="justify-center items-center">
                            <Link
                                to="/"
                                className="bg-primary p-2 px-4 rounded-full uppercase"
                            >
                                Khám phá ngay
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-none h-3 mt-4 ">
                        <div className=" grid text-sm grid-cols-6 px-6 relative border-b py-3 border-alpha group-hover/edit:border-transparent">
                            <BiTransfer className="absolute left-2 bottom-1/2 translate-y-1/2" />
                            <span className="grid pl-2 col-span-3">
                                Bài hát
                            </span>
                            <span className="grid col-span-2">Album</span>
                            <span className="grid col-span-1 text-right">
                                Thời gian
                            </span>
                        </div>
                        <div>
                            {mySongs?.map((song, index) => (
                                <SongAlbum
                                    key={index}
                                    title={song.name}
                                    duration={song.duration}
                                    album={song.album}
                                    artists={song.artists}
                                    img={song.img}
                                    idSong={song.id}
                                    index={index}
                                    handleChangeSong={handleChangeSong}
                                />
                            ))}
                        </div>
                    </div>
                )
            ) : (
                <div className="flex items-center justify-center flex-col py-8 gap-y-4">
                    <img src={mySongsImg.upload} alt="" />
                    <span className="text-base text-secondary">
                        Chưa có bài hát nào đc tải lên trong thư viện cá nhân
                    </span>
                    <div className="justify-center items-center">
                        <Link
                            to="/"
                            className="bg-primary p-2 px-4 rounded-full uppercase"
                        >
                            Khám phá ngay
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Song;
