import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getChartHome } from "../../apis";
import images from "../../asset/images";
import SongAlbum from "../../components/Album/SongAlbum";
import { listMusic, loadPage, updateSong } from "../../store/actions";
import icons from "../../ultis/icons";

function TopWeek() {
    const { BsFillPlayFill } = icons;
    const dispatch = useDispatch();
    const typeTopWeek = [
        { type: "vn", title: "Việt Nam" },
        { type: "us", title: "US-UK" },
        { type: "korea", title: "Hàn Quốc" },
    ];

    const [country, setCountry] = useState("vn");
    const [dataTopWeek, setDataTopWeek] = useState([]);
    const [renderTopWeek, setRenderTopWeek] = useState({});

    const changeTypeTopWeek = (type) => {
        setCountry(type);
    };

    const handleChangeSong = (index) => {
        const convertSong = renderTopWeek.items.map((song) => {
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
        const getTopWeek = async () => {
            dispatch(loadPage(true));
            const res = await getChartHome();
            dispatch(loadPage(false));

            const convertTopWeek = Object.values(res.data.data.weekChart);
            setDataTopWeek(convertTopWeek);
        };
        getTopWeek();
    }, [dispatch]);

    useEffect(() => {
        const convertDataTopWeek = dataTopWeek.find(
            (item) => item.country === country
        );
        setRenderTopWeek(convertDataTopWeek);
    }, [country, dataTopWeek]);
    return (

        
        <div className="h-full w-full overflow-hidden relative">
            <div className="absolute inset-0">
                <img
                    src={images.bannerZingChart2}
                    className="h-full w-full brightness-50"
                    alt=""
                />
                <div className="absolute inset-0 bg-newRelease "></div>
            </div>
            <div className="absolute inset-0 z-10 pt-20 px-16 flex flex-col gap-y-7">
                <div className="pt-8 flex items-center font-bold text-3xl gap-x-2">
                    <span>Bảng xếp hạng Tuần </span>
                    <button
                        className="p-1 rounded-full bg-primary"
                        onClick={() => {
                            handleChangeSong(0);
                        }}
                    >
                        <BsFillPlayFill />
                    </button>
                </div>

                <div className="flex items-center font-bold text-2xl gap-x-5">
                    {typeTopWeek.map((item, index) => (
                        <span
                            key={index}
                            className={`pb-2 border-b-2 cursor-pointer ${
                                country === item.type
                                    ? "border-primary "
                                    : "border-transparent"
                            }`}
                            onClick={() => changeTypeTopWeek(item.type)}
                        >
                            {item.title}
                        </span>
                    ))}
                </div>
                <div className="h-full overlay">
                    {renderTopWeek?.items?.map((song, index) => (
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

export default TopWeek;
