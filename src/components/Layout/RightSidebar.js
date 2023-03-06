import { memo, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfoSong } from "../../store/actions";
import icons from "../../ultis/icons";
import SongAlbum from "../Album/SongAlbum";

function RightSidebar() {
    const { TfiAlarmClock, CgMoreAlt } = icons;
    const dispatch = useDispatch();
    const wrapSong = useRef();

    const isRightSidebar = useSelector((state) => state.app.isRightSidebar);
    const listMusic = useSelector((state) => state.app.listMusic);
    const currentSong = useSelector((state) => state.app.currentSong);
    const isAlbum = useSelector((state) => state.app.isAlbum);
    const idSongPlayer = useSelector((state) => state.app.infoSong.id);

    useEffect(() => {
        const handleRightSidebar = () => {
            const idSongSidebar = listMusic[currentSong].id;
            const isSong = idSongSidebar === idSongPlayer;
            const isGetSong = !isSong && !isAlbum;

            if (isGetSong) {
                dispatch(getInfoSong(idSongSidebar));

                const eleSongs =
                    wrapSong.current.querySelectorAll(".song-album");
                eleSongs[currentSong].scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        };

        if (listMusic[0]) handleRightSidebar();
    }, [currentSong, listMusic, isAlbum, idSongPlayer, dispatch]);

    return (
        <div
            className={`fixed right-0 h-screen w-[330px] bg-screen transition-all duration-1000  z-40 flex flex-col ${
                isRightSidebar ? "translate-x-[100%]" : "translate-x-[0]"
            }`}
        >
            <div className="flex h-[70px] items-center py-5 gap-x-2 px-2">
                <div className="w-full h-full flex items-center justify-center bg-alpha rounded-full text-xs font-medium">
                    <button className="h-full w-full bg-alpha rounded-full">
                        Danh sách phát
                    </button>
                    <button className="h-full w-full  rounded-full">
                        Nghe gần đây
                    </button>
                </div>
                <button className="btn-primary">
                    <TfiAlarmClock />
                </button>
                <button className="btn-primary">
                    <CgMoreAlt />
                </button>
            </div>
            <span className="px-3 font-bold text-sm pb-4">
                Những bài hát của bạn{" "}
            </span>
            <div
                ref={wrapSong}
                className="h-full overflow-hidden hover:overlay pl-2 text-sm font-medium mb-[90px]"
            >
                {listMusic?.map((music, index) => (
                    <SongAlbum
                        key={index}
                        title={music.name}
                        duration={music.duration}
                        album={music.album}
                        artists={music.artists}
                        img={music.img}
                        idSong={music.id}
                        index={index}
                        rightSideBar
                    />
                ))}
            </div>
        </div>
    );
}

export default memo(RightSidebar);
