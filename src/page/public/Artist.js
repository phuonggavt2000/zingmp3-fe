import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailArtist } from "../../apis";
import Music from "../../components/NewMusic/Music";
import ArtistSlider from "../../components/Shared/ArtistSlider";
import Playlist from "../../components/Shared/Playlist";
import {
    listMusic,
    loadPage,
    toggleMusic,
    updateSong,
} from "../../store/actions";
import icons from "../../ultis/icons";

function Artist() {
    const dispatch = useDispatch();
    const { singer } = useParams();
    const { BsFillPlayFill, AiOutlineClose, BsPauseFill } = icons;

    const [dataSinger, setDataSinger] = useState({});
    const [moreLearn, setMoreLearn] = useState(false);
    const [isPlaySong, setIsPlaySong] = useState(null);

    const isPlay = useSelector((state) => state.app.isPlay);
    const id = useSelector((state) => state.app.infoSong.id);

    const handleChangeMusic = (index) => {
        const convertSong = dataSinger.songSinger.songs.map((music) => {
            return {
                id: music.encodeId,
                name: music.title,
                img: music.thumbnail,
                duration: music.duration,
                artists: music.artists,
            };
        });
        dispatch(updateSong(index));

        dispatch(listMusic(convertSong));
    };

    useEffect(() => {
        const getSinger = async () => {
            dispatch(loadPage(true));
            const getDataSinger = await getDetailArtist(singer);
            dispatch(loadPage(false));

            const itemsSinger = getDataSinger.data.data;

            const songSinger = itemsSinger.sections?.find(
                (item) => item.sectionType === "song"
            );
            const aSingle = itemsSinger.sections?.find(
                (item) => item.sectionId === "aSingle"
            );
            const album = itemsSinger.sections?.find(
                (item) => item.sectionId === "aAlbum"
            );
            const aPlaylist = itemsSinger.sections?.find(
                (item) => item.sectionId === "aPlaylist"
            );
            const artistSlider = itemsSinger.sections?.find(
                (item) => item.sectionId === "aReArtist"
            );

            const limitedSong = songSinger?.items?.filter(
                (item, index) => index < 6
            );
            const limitedASingle = aSingle?.items?.filter(
                (item, index) => index < 5
            );
            const limitedAlbum = album?.items?.filter(
                (item, index) => index < 5
            );

            const idSongs = limitedSong?.map((item) => item.encodeId);

            const convertedSinger = {
                name: itemsSinger?.name,
                follow: itemsSinger?.follow,
                img: itemsSinger?.thumbnail,
                decs: itemsSinger?.biography,
                songSinger: {
                    title: songSinger?.title,
                    songs: limitedSong,
                },
                aSingle: {
                    title: aSingle?.title,
                    items: limitedASingle,
                },
                album: {
                    title: album?.title,
                    items: limitedAlbum,
                },
                aPlaylist: {
                    title: aPlaylist?.title,
                    items: aPlaylist?.items,
                },
                artistSlider: {
                    title: artistSlider?.title,
                    items: artistSlider?.items,
                },
                idSongs,
            };

            setDataSinger(convertedSinger);
        };
        getSinger();
    }, [singer, dispatch]);

    useEffect(() => {
        const isPlaySong = isPlay && dataSinger.idSongs?.includes(id);
        setIsPlaySong(isPlaySong);
    }, [id, isPlay, dataSinger, dispatch]);

    return (
        <div className="mb-16">
            <div className="bg-alpha md:px-16 px-6">
                <div className="flex pt-32 items-center pb-8">
                    <img
                        src={dataSinger.img}
                        alt=""
                        className="rounded-full w-[140px] h-[140px]"
                    />
                    <div className="flex flex-col px-8 font-medium gap-y-4">
                        <div className="flex items-center font-bold text-6xl gap-x-4">
                            <span className="whitespace-nowrap">
                                {dataSinger.name}
                            </span>
                            <button
                                onClick={() => {
                                    const isGetSong =
                                        dataSinger.idSongs?.includes(id);
                                    if (!isGetSong) {
                                        handleChangeMusic(0);
                                    }

                                    if (isPlaySong) {
                                        dispatch(toggleMusic());
                                    } else if (isGetSong && !isPlaySong) {
                                        dispatch(toggleMusic());
                                    }
                                }}
                                className="p-1 bg-primary rounded-full text-center"
                            >
                                {isPlaySong ? (
                                    <BsPauseFill />
                                ) : (
                                    <BsFillPlayFill />
                                )}
                            </button>
                        </div>
                        <div>
                            <span>
                                {dataSinger.follow?.toLocaleString()} người quan
                                tâm
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:px-16 px-6">
                <div className="flex flex-col gap-y-1">
                    <span className="font-bold text-xl mt-4">
                        {dataSinger.songSinger?.title}
                    </span>
                    <div className="grid grid-cols-2 gap-x-6">
                        {dataSinger.songSinger?.songs?.map((item, index) => (
                            <Music
                                title={item.title}
                                img={item.thumbnail}
                                artists={item.artists}
                                releaseDate={item.releaseDate}
                                key={index}
                                idSong={item.encodeId}
                                index={index}
                                handleChangeMusic={handleChangeMusic}
                            />
                        ))}
                    </div>
                </div>
                <Playlist playlist={dataSinger?.aSingle} isArtirt />
                <Playlist playlist={dataSinger?.album} isArtirt />
                <Playlist playlist={dataSinger?.aPlaylist} isArtirt />
                <ArtistSlider
                    items={dataSinger.artistSlider?.items}
                    title={dataSinger.artistSlider?.title}
                />

                <div className="mt-12">
                    <span className="font-extrabold text-lg inline-block mb-4">
                        Về {dataSinger.name}
                    </span>
                    <div className="flex gap-x-5 w-full">
                        <img
                            className="w-[30%]  object-cover rounded-xl "
                            src={dataSinger.img}
                            alt=""
                        />

                        <div className="flex  flex-col justify-center gap-y-3 font-medium">
                            <div>
                                <span
                                    className="text-secondary text-sm line-clamp-6"
                                    dangerouslySetInnerHTML={{
                                        __html: dataSinger.decs,
                                    }}
                                ></span>
                                <button
                                    onClick={() => {
                                        setMoreLearn(true);
                                    }}
                                    className="text-sm font-semibold capitalize hover:text-primary"
                                >
                                    Xem thêm
                                </button>
                                {/* Modal of more learn  */}
                                <div
                                    onClick={(e) => {
                                        if (e.target === e.currentTarget) {
                                            setMoreLearn(false);
                                        }
                                    }}
                                    className={`fixed  inset-0 bg-dark-alpha-50 z-[100] justify-center items-center ${
                                        moreLearn ? "flex" : "hidden"
                                    }`}
                                >
                                    <div className="w-[450px] h-[480px] bg-screen relative rounded-md overflow-hidden">
                                        <div className="absolute inset-0 bg-alpha px-6 pb-7">
                                            <div className="h-3/6 flex gap-y-2 items-center justify-center flex-col relative">
                                                <img
                                                    src={dataSinger.img}
                                                    alt=""
                                                    className="rounded-full h-[110px] w-[110px]"
                                                />
                                                <span className="font-extrabold text-lg">
                                                    {dataSinger.name}
                                                </span>

                                                <AiOutlineClose
                                                    onClick={() => {
                                                        setMoreLearn(false);
                                                    }}
                                                    className="absolute -right-1.5 top-3 text-2xl cursor-pointer hover:opacity-80"
                                                />
                                            </div>
                                            <div className="h-3/6  overflow-hidden hover:overlay">
                                                <span
                                                    className="text-secondary text-sm "
                                                    dangerouslySetInnerHTML={{
                                                        __html: dataSinger.decs,
                                                    }}
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-x-2 items-center">
                                <span className="font-bold text-lg">
                                    {dataSinger.follow?.toLocaleString()}
                                </span>
                                <span className="text-secondary">
                                    Người quan tâm
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Artist;
