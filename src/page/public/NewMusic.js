import { useEffect, useState } from "react";
import { getNewReleaseChart } from "../../apis";
import images from "../../asset/images";
import icons from "../../ultis/icons";
import SongAlbum from "../../components/Album/SongAlbum";
import { useDispatch } from "react-redux";
import { listMusic, loadPage, updateSong } from "../../store/actions";

function NewMusic() {
    const { BsFillPlayFill } = icons;
    const dispatch = useDispatch();

    const [songs, setSongs] = useState([]);

    const handleChangeSong = (index) => {
        const convertSong = songs.map((song) => {
            return {
                id: song.encodeId,
                name: song.title,
                img: song.thumbnail,
                duration: song.duration,
                artists: song.artists,
                album: song.album,
            };
        });
        dispatch(updateSong(index));
        dispatch(listMusic(convertSong));
    };

    useEffect(() => {
        const getChart = async () => {
            dispatch(loadPage(true));
            const res = await getNewReleaseChart();
            dispatch(loadPage(false));

            setSongs(res.data.data.items);
        };
        getChart();
    }, [dispatch]);

    return (
        <div className="relative">
            <div className="absolute z-10 w-full">
                <img
                    src={images.newRelease}
                    className=" brightness-50 w-full"
                    alt=""
                />
                <div className="absolute inset-0 bg-newRelease "></div>
                <div className="absolute w-full h-[2px]  -bottom-8 shadow-screen shadow-[0_10px_31px_76px_blue] "></div>
            </div>
            <div className="relative z-20 px-16 pt-32">
                <div className="font-medium text-2xl flex items-center gap-x-4 ">
                    <span className="text-4xl capitalize font-extrabold">
                        Nhạc mới
                    </span>
                    <button
                        onClick={() => {
                            handleChangeSong(0);
                        }}
                        className="bg-primary rounded-full p-1 flex items-center justify-center"
                    >
                        <BsFillPlayFill />
                    </button>
                </div>
                <div className="my-12">
                    {songs?.map((song, index) => (
                        <SongAlbum
                            key={index}
                            title={song.title}
                            duration={song.duration}
                            album={song.album}
                            artists={song.artists}
                            img={song.thumbnail}
                            idSong={song.encodeId}
                            index={index}
                            handleChangeSong={handleChangeSong}
                            newSong
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewMusic;
