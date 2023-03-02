import { useEffect, useState } from "react";
import { getChartHome } from "../../apis";
import images from "../../asset/images";
import SongAlbum from "../../components/Album/SongAlbum";
import icons from "../../ultis/icons";

function ZingChart() {
    const { BsFillPlayFill } = icons;
    const handleChangeSong = () => {};
    const [dataZingChart, setDataZingChart] = useState({});
    const [renderPromotes, setRenderPromotes] = useState([]);
    console.log("renderPromotes:", renderPromotes);

    const handleRenderTop = () => {
        setRenderPromotes([...dataZingChart.promotes]);
    };

    useEffect(() => {
        const getZingChart = async () => {
            const res = await getChartHome();
            const promotes = res.data.data.RTChart.items;
            const limitedPromotes = promotes.filter(
                (item, index) => index < 10
            );
            const weekChart = res.data.data.weekChart;

            setDataZingChart({ promotes, limitedPromotes });
            setRenderPromotes([...limitedPromotes]);
        };
        getZingChart();
    }, []);

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
            <div className="relative z-20 px-16 pt-32 flex-col flex gap-y-6 font-medium">
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
                            // handleChangeSong={handleChangeSong}
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
                <img
                    src={images.bannerZingChart2}
                    className=" brightness-50 h-full w-full"
                    alt=""
                />

                <div className="absolute inset-0 bg-newRelease "></div>
                <div className="absolute inset-0">
                    <span>Bảng xếp hạng</span>
                    <div className="grid grid-cols-3">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ZingChart;
