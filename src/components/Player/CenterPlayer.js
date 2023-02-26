import { memo, useEffect, useState } from "react";
import audioSitinh from "../../asset/audio/sitinh.mp3";
import ControlCenterPlayer from "./ControlCenterPlayer";
import DisplayCenterPlayer from "./DisplayCenterPlayer";

function CenterPlayer({ currentVolume }) {
    const [audio] = useState(new Audio(audioSitinh));
    useEffect(() => {
        audio.volume = currentVolume;
    }, [currentVolume, audio]);

    return (
        <div className="flex justify-center items-center flex-grow flex-col">
            <ControlCenterPlayer audio={audio} />
            <DisplayCenterPlayer audio={audio} />
        </div>
    );
}

export default memo(CenterPlayer);
