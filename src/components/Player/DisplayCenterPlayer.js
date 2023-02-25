import { useEffect, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";

function DisplayCenterPlayer({ audio }) {
    const [valueInput, setValueInput] = useState("0");
    const [isMouse, setIsMouse] = useState(false);
    const [currentTime, setCurrentTime] = useState("00:00");
    const [duration, setDuration] = useState("00:00");

    const infoSong = useSelector((state) => state.app.infoSong);

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

    audio.ontimeupdate = () => {
        const time = moment
            .utc(moment.duration(audio.currentTime, "seconds").asMilliseconds())
            .format("mm:ss");
        setCurrentTime(time);

        let CurrentPercent = (audio.currentTime / infoSong.duration) * 100;

        if (!isMouse) setValueInput(CurrentPercent);
    };
    return (
        <div className=" w-full flex items-center mb-1 text-xs font-medium text-secondary">
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
