import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlaylist } from "../../apis";
import LeftAlbum from "../../components/Album/LeftAlbum";
import RightAlbum from "../../components/Album/RightAlbum";
import {
    listMusic,
    updateSong,
    statusAlbum,
    loadPage,
    getInfoSong,
} from "../../store/actions";

function Album() {
    const dispatch = useDispatch();
    const eleSong = useRef([]);
    const { idAlbum } = useParams();

    const [dataPlaylist, setDataPlaylist] = useState({});
    console.log("dataPlaylist:", dataPlaylist);
    const [idMusic, setIdMusic] = useState(null);

    const currentSong = useSelector((state) => state.app.currentSong);
    const myPlaylists = useSelector((state) => state.app.myPlaylists);
    console.log("myPlaylists:", myPlaylists);

    useEffect(() => {
        dispatch(statusAlbum(true));

        return () => {
            dispatch(statusAlbum(false));
        };
    }, [dispatch]);

    useEffect(() => {
        if (idMusic) {
            dispatch(getInfoSong(idMusic));
        }
    }, [idMusic, dispatch]);

    useEffect(() => {
        if (dataPlaylist?.convertSongs) {
            const idSong = dataPlaylist.convertSongs[currentSong]?.id;
            const eleSongs = eleSong.current.querySelectorAll(".song-album");

            if (eleSongs[currentSong]) {
                eleSongs[currentSong].scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
            setIdMusic(idSong);
        }
    }, [currentSong, dataPlaylist]);

    useEffect(() => {
        const getDataAlbum = async () => {
            dispatch(loadPage(true));
            const resData = await getPlaylist(idAlbum);
            dispatch(loadPage(false));
            const resDatas = resData.data.data;

            const convertSongs = resData.data.data?.song?.items?.map((item) => {
                return {
                    id: item?.encodeId,
                    name: item?.title,
                    img: item?.thumbnail,
                    duration: item?.duration,
                    artists: item?.artists,
                    album: item?.album,
                };
            });
            const convertPlaylist = {
                img: resDatas?.thumbnailM,
                title: resDatas?.title,
                like: resDatas?.like,
                contentLastUpdate: resDatas?.contentLastUpdate,
                artists: resDatas?.artists,
                decs: resDatas?.description,
                convertSongs,
            };

            dispatch(listMusic(convertSongs));
            setDataPlaylist(convertPlaylist);
            dispatch(updateSong(0));
        };
        getDataAlbum();
    }, [idAlbum, dispatch]);

    return (
        <div className="px-16 pt-16 w-full h-full">
            <div className="grid grid-cols-6 w-full h-full overflow-hidden pt-10">
                <LeftAlbum
                    img={dataPlaylist?.img}
                    title={dataPlaylist?.title}
                    like={dataPlaylist?.like}
                    dateUpdate={dataPlaylist?.contentLastUpdate}
                    artists={dataPlaylist?.artists}
                />
                <RightAlbum titleRight={dataPlaylist?.decs} ref={eleSong} />
            </div>
        </div>
    );
}

export default Album;
