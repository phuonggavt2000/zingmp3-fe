import { useSelector } from "react-redux";
import LeftAlbum from "../../components/Album/LeftAlbum";
import RightAlbum from "../../components/Album/RightAlbum";

function Album() {
    const dataPlaylist = useSelector((state) => state.app.dataPlaylist);
    return (
        <div className="grid grid-cols-4 w-full h-full overflow-hidden pt-10">
            <LeftAlbum
                img={dataPlaylist?.thumbnailM}
                title={dataPlaylist?.title}
                like={dataPlaylist?.like}
                dateUpdate={dataPlaylist?.contentLastUpdate}
                artists={dataPlaylist?.artists}
            />
            <RightAlbum
                songs={dataPlaylist.song?.items}
                titleRight={dataPlaylist?.description}
            />
        </div>
    );
}

export default Album;
