import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getChartHome } from "../../apis";
import images from "../../asset/images";
import SongAlbum from "../../components/Album/SongAlbum";
import { listMusic, loadPage, updateSong } from "../../store/actions";
import icons from "../../ultis/icons";

function ZingChart() {
    const { BsFillPlayFill } = icons;
    const dispatch = useDispatch();
    const [dataZingChart, setDataZingChart] = useState({});
    const [renderPromotes, setRenderPromotes] = useState([]);

    const handleRenderTop = () => {
        setRenderPromotes([...dataZingChart.promotes]);
    };

    const handleChangeSong = (index, zingchart, key) => {
        if (zingchart) {
            const convertSong = dataZingChart.coverWeekChart[key].items.map(
                (song) => {
                    return {
                        id: song.encodeId,
                        name: song.title,
                        img: song.thumbnail,
                        duration: song.duration,
                        artists: song.artists,
                        album: song.album,
                    };
                }
            );
            dispatch(updateSong(index));
            dispatch(listMusic(convertSong));
        } else {
            const convertSong = renderPromotes.map((song) => {
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
        }
    };

    useEffect(() => {
        const getZingChart = async () => {
            dispatch(loadPage(true));
            const res = await getChartHome();
            dispatch(loadPage(false));

            const promotes = res.data.data.RTChart.items;
            const limitedPromotes = promotes.filter(
                (item, index) => index < 10
            );
            const weekChart = res.data.data.weekChart;
            const keyWeekChart = Object.keys(weekChart);
            const valueWeekChart = Object.values(weekChart);

            const coverWeekChart = keyWeekChart.map((item) => {
                let result;
                valueWeekChart.forEach((value) => {
                    const convertItems = value.items.filter(
                        (item, index) => index < 5
                    );

                    if (item === value.country) {
                        let title = "";
                        if (item === "vn") {
                            title = "Việt Nam";
                        }
                        if (item === "us") {
                            title = "US-UK";
                        }
                        if (item === "korea") {
                            title = "K-Pop";
                        }

                        result = {
                            title,
                            items: convertItems,
                        };
                    }
                });
                return result;
            });

            setDataZingChart({ promotes, limitedPromotes, coverWeekChart });
            setRenderPromotes([...limitedPromotes]);
        };
        getZingChart();
    }, [dispatch]);

    return (
        <div className="relative">
            <div className="absolute z-10 ">
                <img
                    src={images.newRelease}
                    className=" brightness-50"
                    alt=""
                />
                <div className="absolute inset-0 bg-newRelease "></div>
                <div className="absolute w-full h-[2px]  -bottom-8 shadow-screen shadow-[0_10px_31px_76px_blue] "></div>
            </div>
            <div className="relative z-20 md:px-16 md:pt-32 pt-24 px-6 flex-col flex gap-y-6 font-medium">
                <div className="font-medium text-2xl flex items-center gap-x-4 ">
                    <span className="text-4xl capitalize font-extrabold">
                        #ZingChart
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
                <div>
                    {renderPromotes?.map((song, index) => (
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
                {renderPromotes.length <= 10 && (
                    <div className="text-center">
                        <button
                            onClick={handleRenderTop}
                            className="px-4 py-1 rounded-full border hover:bg-alpha text-sm"
                        >
                            Xem top 100
                        </button>
                    </div>
                )}
            </div>
            <div className=" w-full mt-8 relative ">
                <div className="absolute inset-0">
                    <img
                        src={images.bannerZingChart2}
                        className=" brightness-50 h-full w-full"
                        alt=""
                    />
                </div>

                <div className="absolute inset-0 bg-newRelease "></div>
                <div className="relative z-10 md:px-16 py-16 px-6 flex-col flex gap-y-8">
                    <span className="text-5xl font-bold">Bảng xếp hạng</span>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 ">
                        {dataZingChart.coverWeekChart?.map((item, key) => (
                            <div key={key} className="bg-alpha py-3 rounded-md">
                                <div className="flex items-center py-2 pl-6 gap-x-2">
                                    <span className="font-bold text-2xl">
                                        {item.title}
                                    </span>
                                    <button
                                        className="p-1 text-lg bg-primary rounded-full"
                                        onClick={() => {
                                            handleChangeSong(0, true, key);
                                        }}
                                    >
                                        <BsFillPlayFill />
                                    </button>
                                </div>

                                {item.items?.map((song, index) => (
                                    <SongAlbum
                                        key={index}
                                        title={song.title}
                                        duration={song.duration}
                                        album={song.album}
                                        artists={song.artists}
                                        img={song.thumbnail}
                                        idSong={song.encodeId}
                                        index={index}
                                        keyZingChart={key}
                                        handleChangeSong={handleChangeSong}
                                        newSong
                                        zingChart
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ZingChart;
