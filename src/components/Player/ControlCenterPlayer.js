import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMusic, nextSong, prevSong } from "../../store/actions";
import icons from "../../ultis/icons";

function ControlMusic({ audio }) {
    const {
        BsPauseCircle,
        ImPrevious2,
        ImNext2,
        BsPlayCircle,
        MdOutlineRepeat,
        BiTransfer,
        BiLoader,
    } = icons;
    const isPLay = useSelector((state) => state.app.isPlay);
    const isLoadingMusic = useSelector((state) => state.app.isLoadingMusic);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isPLay) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPLay, audio]);
    return (
        <div className="h-1/2 text-2xl flex gap-x-7 items-center">
            <button className="hover:bg-alpha h-[32px] w-[32px] rounded-full flex justify-center items-center">
                <BiTransfer />
            </button>{" "}
            <button
                onClick={() => dispatch(prevSong())}
                className="hover:bg-alpha h-[32px] w-[32px] rounded-full flex justify-center items-center"
            >
                <ImPrevious2 />
            </button>{" "}
            <button
                className="text-4xl hover:text-primary "
                onClick={() => dispatch(toggleMusic())}
            >
                {!isLoadingMusic &&
                    (isPLay ? <BsPauseCircle /> : <BsPlayCircle />)}
                {isLoadingMusic && <BiLoader className="animate-spin" />}
            </button>{" "}
            <button
                onClick={() => dispatch(nextSong())}
                className="hover:bg-alpha h-[32px] w-[32px] rounded-full flex justify-center items-center"
            >
                <ImNext2 />
            </button>{" "}
            <button className="hover:bg-alpha h-[32px] w-[32px] rounded-full flex justify-center items-center">
                <MdOutlineRepeat />
            </button>
        </div>
    );
}

export default memo(ControlMusic);
