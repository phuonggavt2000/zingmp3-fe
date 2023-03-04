import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Music from "../../components/NewMusic/Music";
import Playlist from "../../components/Shared/Playlist";
import { listMusic, updateSong } from "../../store/actions";
import numFormat from "../../ultis/numFormat";

function SearchAll() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchData = useSelector((state) => state.app.searchData);
    const handleChangeMusic = (index, data) => {
        const convertSong = data.map((music) => {
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

    return (
        <div className="px-16 py-20 font-medium">
            <span className="font-bold text-2xl">Kết quả tìm kiếm</span>
            {searchData?.artists && (
                <div className="mt-10">
                    <span className="font-bold text-lg capitalize">
                        {" "}
                        nổi bật
                    </span>
                    <div className="mt-5 grid grid-cols-3 gap-x-6">
                        <div
                            className="flex items-center p-2 bg-alpha gap-x-3 rounded-md cursor-pointer"
                            onClick={() => {
                                navigate(searchData?.artists[0].link);
                            }}
                        >
                            <img
                                className="h-[88px] w-[88px] rounded-full"
                                alt=""
                                src={searchData?.artists[0].thumbnail}
                            />
                            <div className="flex flex-col text-secondary text-xs">
                                <span className="mb-2 ">Nghệ sĩ</span>
                                <span className="text-main text-base font-semibold">
                                    {searchData?.artists[0].name}
                                </span>
                                <span>
                                    {numFormat(
                                        searchData?.artists[0].totalFollow
                                    )}{" "}
                                    quan tâm
                                </span>
                            </div>
                        </div>
                        {searchData?.songs
                            ?.filter((item, index) => index < 2)
                            ?.map((item, index) => (
                                <Music
                                    title={item.title}
                                    img={item.thumbnail}
                                    artists={item.artists}
                                    releaseDate={item.releaseDate}
                                    key={index}
                                    idSong={item.encodeId}
                                    index={index}
                                    duration={item.duration}
                                    searchAll
                                    musicSearch={searchData?.songs?.filter(
                                        (item, index) => index < 6
                                    )}
                                    handleChangeMusic={handleChangeMusic}
                                />
                            ))}
                    </div>
                </div>
            )}
            {searchData?.songs && (
                <div className="mt-10">
                    <span className="font-bold text-lg">Bài hát</span>
                    <div className="grid grid-cols-2 gap-x-8 mt-5">
                        {searchData?.songs
                            ?.filter((item, index) => index < 6)
                            ?.map((item, index) => (
                                <Music
                                    title={item.title}
                                    img={item.thumbnail}
                                    artists={item.artists}
                                    releaseDate={item.releaseDate}
                                    key={index}
                                    idSong={item.encodeId}
                                    index={index}
                                    duration={item.duration}
                                    musicSearch={searchData?.songs?.filter(
                                        (item, index) => index < 6
                                    )}
                                    handleChangeMusic={handleChangeMusic}
                                />
                            ))}
                    </div>
                </div>
            )}

            {searchData?.playlists && (
                <div className="mt-10">
                    <Playlist
                        playlist={{
                            title: "Playlist/Album",
                            items: searchData?.playlists.filter(
                                (item, index) => index < 5
                            ),
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default SearchAll;
