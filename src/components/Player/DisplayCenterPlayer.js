import { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { nextSong } from "../../store/actions";

function DisplayCenterPlayer({ audio }) {
    const dispatch = useDispatch();
    const [valueInput, setValueInput] = useState("0");
    const [isMouse, setIsMouse] = useState(false);
    const [currentTime, setCurrentTime] = useState("00:00");
    const [duration, setDuration] = useState("00:00");

    const infoSong = useSelector((state) => state.app.infoSong);
    const isRepeat = useSelector((state) => state.app.isRepeat);
    const isPLay = useSelector((state) => state.app.isPlay);

    useEffect(() => {
        if (infoSong?.song) {
            const duration = moment
                .utc(
                    moment
                        .duration(infoSong.duration, "seconds")
                        .asMilliseconds()
                )
                .format("mm:ss");
            audio.src = infoSong.song;
            audio.load();
            audio.play();
            setDuration(duration);
        }
    }, [infoSong, audio]);

    useEffect(() => {
        if (isPLay) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPLay, audio]);

    useEffect(() => {
        audio.loop = isRepeat;
    }, [isRepeat, audio]);

    audio.ontimeupdate = () => {
        const time = moment
            .utc(moment.duration(audio.currentTime, "seconds").asMilliseconds())
            .format("mm:ss");
        setCurrentTime(time);

        let CurrentPercent = (audio.currentTime / infoSong.duration) * 100;

        if (!isMouse) setValueInput(CurrentPercent);
    };

    audio.onended = () => {
        if (isRepeat) {
            audio.load();
        } else {
            dispatch(nextSong());
        }
    };

    return (
        <div className=" w-full md:flex hidden items-center mb-1 text-xs font-medium text-secondary">
            <span>{currentTime}</span>
            <input
                type="range"
                min="0"
                max="100"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
                className="w-full overflow-hidden mx-4 appearance-none rounded-full h-1 hover:h-2 bg-alpha range cursor-pointer"
                onClick={(e) => {
                    let seekTime = (audio?.duration / 100) * e.target.value;
                    audio.currentTime = seekTime;
                }}
                onMouseDown={() => {
                    setIsMouse(true);
                }}
                onMouseUp={() => {
                    setIsMouse(false);
                }}
            />
            <span>{duration}</span>
        </div>
    );
}

export default DisplayCenterPlayer;
