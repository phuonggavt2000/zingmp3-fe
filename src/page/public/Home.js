import NewMusic from "../../components/NewMusic/NewMusic";
import Slider from "../../components/Slider/Slider";
import Playlist from "../../components/Shared/Playlist";
import { useSelector } from "react-redux";
import { memo } from "react";
import ArtistSlider from "../../components/Shared/ArtistSlider";

function Home() {
    const hAutoTheme1 = useSelector((state) => state.app.hAutoTheme1);
    const hArtistTheme = useSelector((state) => state.app.hArtistTheme);
    const hArtistTheme2 = useSelector((state) => state.app.hArtistTheme2);
    console.log("hArtistTheme2:", hArtistTheme2);
    const artistSpotlight = useSelector((state) => state.app.artistSpotlight);

    return (
        <div className="px-16 mt-14">
            <Slider />
            <NewMusic />
            <Playlist playlist={hAutoTheme1} />
            <Playlist playlist={hArtistTheme} />
            <Playlist playlist={hArtistTheme2} isArtirt />
            <ArtistSlider items={artistSpotlight} />
        </div>
    );
}

export default memo(Home);
