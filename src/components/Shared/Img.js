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
    isActive,
}) {
    const { FaPlay, FaPause, BiLoader } = icons;
    const isLoadingMusic = useSelector((state) => state.app.isLoadingMusic);

    return (
        <div>
            <div
                className={`h-[${height}] w-[${width}] text-white rounded-md overflow-hidden relative flex cursor-pointer ${
                    isLoadingMusic ? "pointer-events-none" : ""
                }`}
                onClick={handleGetSong}
            >
                <img alt="" src={img} className="flex-shrink-0" />
                <div
                    className={`absolute cursor-pointer opacity-0 group-hover:opacity-100 inset-0 h-full w-full z-10 bg-dark-alpha-50 flex items-center justify-center ${
                        id === idSong && !isLoadingMusic
                            ? "opacity-100 "
                            : isActive && isLoadingMusic
                            ? "opacity-100"
                            : ""
                    }`}
                >
                    {!isLoadingMusic && (isPlaying ? <FaPause /> : <FaPlay />)}
                    {isLoadingMusic && <BiLoader className="animate-spin" />}
                </div>
            </div>
        </div>
    );
}

export default Img;
