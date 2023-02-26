import icons from "../../ultis/icons";
import { useSelector } from "react-redux";

function Img({
    handleGetSong,
    height = "60px",
    width = "60px",
    img,
    isPlaying = false,
    id,
    idSong,
}) {
    const { FaPlay, FaPause } = icons;
    const isLoadingMusic = useSelector((state) => state.app.isLoadingMusic);

    return (
        <div onClick={handleGetSong}>
            <div
                className={`h-[${height}] w-[${width}] text-white rounded-md overflow-hidden relative flex cursor-pointer ${
                    isLoadingMusic ? "pointer-events-none" : ""
                }`}
            >
                <img alt="" src={img} className="flex-shrink-0" />
                <div
                    className={`absolute cursor-pointer opacity-0 group-hover:opacity-100 inset-0 h-full w-full z-10 bg-dark-alpha-50 flex items-center justify-center ${
                        id === idSong ? "opacity-100 " : ""
                    }`}
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </div>
            </div>
        </div>
    );
}

export default Img;
