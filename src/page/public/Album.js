import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftAlbum from "../../components/Album/LeftAlbum";
import RightAlbum from "../../components/Album/RightAlbum";
import { listMusic, getInfoSong, updateSong } from "../../store/actions";

function Album() {
    const dispatch = useDispatch();
    const eleSong = useRef([]);

    const dataPlaylist = useSelector((state) => state.app.dataPlaylist);
    const currentSong = useSelector((state) => state.app.currentSong);
    useEffect(() => {
        const eleSongs = eleSong.current.querySelectorAll(".song-album");
        const convertPlaylist = dataPlaylist.song?.items?.map((item) => {
            return {
                id: item.encodeId,
                name: item.title,
                img: item.thumbnail,
                duration: item.duration,
                artists: item.artists,
                album: item.album,
            };
        });
        console.log("convertPlaylist:", convertPlaylist);

        dispatch(listMusic(convertPlaylist));

        dispatch(getInfoSong(convertPlaylist[currentSong].id));
        if (eleSongs[currentSong]) {
            eleSongs[currentSong].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        console.log("eleSong.current:", eleSong.current);
    }, [dataPlaylist, dispatch, currentSong]);

    useEffect(() => {
        return () => {
            dispatch(updateSong(0));
        };
    }, [dispatch]);

    return (
        <div className="grid grid-cols-4 w-full h-full overflow-hidden pt-10">
            <LeftAlbum
                img={dataPlaylist?.thumbnailM}
                title={dataPlaylist?.title}
                like={dataPlaylist?.like}
                dateUpdate={dataPlaylist?.contentLastUpdate}
                artists={dataPlaylist?.artists}
            />
            <RightAlbum titleRight={dataPlaylist?.description} ref={eleSong} />
        </div>
    );
}

export default Album;
