import NewMusic from "../../components/NewMusic/NewMusic";
import Slider from "../../components/Slider/Slider";
import Playlist from "../../components/Shared/Playlist";
import { useSelector } from "react-redux";
import { memo } from "react";
import ArtistSlider from "../../components/Shared/ArtistSlider";
import NewMusicSlider from "../../components/Shared/NewMusicSlider";
import MusicPartner from "../../components/Layout/MusicPartner";

function Home() {
    const hAutoTheme1 = useSelector((state) => state.app.hAutoTheme1);
    const hArtistTheme = useSelector((state) => state.app.hArtistTheme);
    const hArtistTheme2 = useSelector((state) => state.app.hArtistTheme2);
    const artistSpotlight = useSelector((state) => state.app.artistSpotlight);
    const hNewrelease = useSelector((state) => state.app.hNewrelease);
    const hAlbum = useSelector((state) => state.app.hAlbum);

    return (
        <div className="px-16 mt-14">
            <Slider />
            <NewMusic />
            <Playlist playlist={hAutoTheme1} />
            <Playlist playlist={hArtistTheme} />
            <Playlist playlist={hArtistTheme2} isArtirt />
            <ArtistSlider items={artistSpotlight} />
            <NewMusicSlider hNewrelease={hNewrelease} />
            <Playlist playlist={hAlbum} />
            <MusicPartner />
        </div>
    );
}

export default memo(Home);
