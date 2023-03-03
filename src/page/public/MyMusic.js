import { useDispatch, useSelector } from "react-redux";
import icons from "../../ultis/icons";
import SongAlbum from "../../components/Album/SongAlbum";
import { listMusic, updateSong } from "../../store/actions";
import { useEffect, useState } from "react";
import Playlist from "../../components/Shared/Playlist";

function MyMusic() {
    const { BsFillPlayFill, BiTransfer } = icons;
    const dispatch = useDispatch();

    const mySongs = useSelector((state) => state.app.mySongs);
    const myPlaylists = useSelector((state) => state.app.myPlaylists);
    console.log("myPlaylists:", myPlaylists);

    const [playlist, setPlaylist] = useState({ title: "PLAYLIST", items: [] });
    console.log("playlist:", playlist);

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

    useEffect(() => {
        setPlaylist((prev) => {
            return {
                ...prev,
                items: [...myPlaylists],
            };
        });
    }, [myPlaylists]);

    return (
        <div className="px-16 mt-32 flex gap-y-10 flex-col">
            <div className="text-4xl font-bold flex items-center gap-x-4">
                <span>Thư viện</span>
                <button
                    className=" bg-primary rounded-full"
                    onClick={handleChangeSong(0)}
                >
                    <BsFillPlayFill />
                </button>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center">
                    {/* <span className="font-bold text-2xl capitalize">
                        Playlist
                    </span>
                    <span className="ml-auto flex items-center text-sm text-secondary link-artist">
                        Tất cả <AiOutlineRight />
                    </span> */}
                    <Playlist playlist={playlist} />
                </div>
                <div></div>
            </div>
            <div className=" font-medium text-sm">
                <span className="block text-lg">Bài hát</span>
                <button className="px-2 mt-2 bg-primary font-medium text-sm inline-block rounded-full">
                    Yêu thích
                </button>
                <div className="grid grid-cols-none h-3 mt-4 ">
                    <div className=" grid text-sm grid-cols-6 px-6 relative border-b py-3 border-alpha group-hover/edit:border-transparent">
                        <BiTransfer className="absolute left-2 bottom-1/2 translate-y-1/2" />
                        <span className="grid pl-2 col-span-3">Bài hát</span>
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
            </div>
        </div>
    );
}

export default MyMusic;
