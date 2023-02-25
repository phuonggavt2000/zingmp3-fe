import NewMusic from "../../components/NewMusic/NewMusic";
import Slider from "../../components/Slider/Slider";
import Playlist from "../../components/Shared/Playlist";
import { useSelector } from "react-redux";
import { memo } from "react";

function Home() {
    const hAutoTheme1 = useSelector((state) => state.app.hAutoTheme1);
    const hArtistTheme = useSelector((state) => state.app.hArtistTheme);

    return (
        <div>
            <Slider />
            <NewMusic />
            <Playlist playlist={hAutoTheme1} />
            <Playlist playlist={hArtistTheme} />
        </div>
    );
}

export default memo(Home);
