import { useDispatch, useSelector } from "react-redux";
import icons from "../../ultis/icons";
import { listMusic, updateSong } from "../../store/actions";
import { useEffect, useRef, useState } from "react";
import Playlist from "../../components/Shared/Playlist";
import { Album, MV, Podcast, Song } from "../../components/MyMusic";

function MyMusic() {
    const { BsFillPlayFill } = icons;
    const dispatch = useDispatch();
    const navList = [
        {
            title: "Bài hát",
            component: <Song />,
        },
        {
            title: "Podcast",
            component: <Podcast />,
        },
        {
            title: "MV",
            component: <MV />,
        },
        {
            title: "Album",
            component: <Album />,
        },
    ];

    const mySongs = useSelector((state) => state.app.mySongs);
    const myPlaylists = useSelector((state) => state.app.myPlaylists);

    const eleRedirect = useRef();
    const [playlist, setPlaylist] = useState({ title: "PLAYLIST", items: [] });
    const [detectMySong, setDetectMySong] = useState("Bài hát");

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

    const handleRedirect = (e, title) => {
        const { offsetLeft, offsetWidth } = e.target;
        eleRedirect.current.style.left = `${offsetLeft}px`;
        eleRedirect.current.style.width = `${offsetWidth}px`;
        setDetectMySong(title);
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
        <div className="md:px-16 px-6 md:mt-32 mt-24 flex gap-y-10 flex-col">
            <div className="text-4xl font-bold flex items-center gap-x-4">
                <span>Thư viện</span>
                <button
                    className=" bg-primary rounded-full"
                    onClick={() => handleChangeSong(0)}
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
            <div className=" font-medium text-sm flex border-b border-secondary relative">
                {navList.map((item, index) => (
                    <button
                        key={index}
                        className="block relative text-base font-medium pb-2  px-2 uppercase"
                        onClick={(e) => {
                            handleRedirect(e, item.title);
                        }}
                    >
                        {item.title}
                    </button>
                ))}
                <div
                    ref={eleRedirect}
                    className="absolute bottom-0 w-[78px] h-[2px] bg-primary transition-all duration-200"
                ></div>
            </div>
            {navList.find((item) => item.title === detectMySong).component}
        </div>
    );
}

export default MyMusic;
