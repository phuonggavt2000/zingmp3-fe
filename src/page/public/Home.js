import NewMusic from "../../components/NewMusic/NewMusic";
import Slider from "../../components/Slider/Slider";
import Playlist from "../../components/Shared/Playlist";
import { useSelector } from "react-redux";
import { memo } from "react";

function Home() {
    const { banner, hAutoTheme1, newMusic, hArtistTheme } = useSelector(
        (state) => state.app
    );
    return (
        <div>
            <Slider banner={banner} />
            <NewMusic newMusics={newMusic} />
            <Playlist playlist={hAutoTheme1} />
            <Playlist isArtirt playlist={hArtistTheme} />
        </div>
    );
}

export default memo(Home);
