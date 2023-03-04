import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchSong } from "../../apis";
import useDebounce from "../../hook/useDebounce";
import {
    listMusic,
    loadPage,
    searchData,
    updateSong,
} from "../../store/actions";
import icons from "../../ultis/icons";
import numFormat from "../../ultis/numFormat";
import Music from "../NewMusic/Music";

function Search() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { BsSearch, MdClose } = icons;

    const [valueSearch, setValueSearch] = useState("");
    const [searching, setSearching] = useState(false);
    const [dataSearch, setDataSearch] = useState({});
    const [dataNavigate, setDataNavigate] = useState({});
    const debounce = useDebounce(valueSearch, 500);

    const handleChange = (e) => {
        const value = e.target.value;
        if (value.startsWith(" ")) {
            return;
        }

        setValueSearch(value);
    };
    const handleNavigate = (link, type) => {
        if (type === "playlist") {
            const albumPath = link.split(".")[0];
            navigate(albumPath);
            setValueSearch("");
        } else {
            navigate(link);
            setValueSearch("");
        }
    };

    const handleChangeMusic = (index) => {
        const convertSong = dataSearch.songs.map((music) => {
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
        navigate({
            pathname: `/tim-kiem/${valueSearch}`,
        });
        dispatch(searchData(dataNavigate));
        setValueSearch("");
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            const getApiSearch = async () => {
                dispatch(loadPage(true));
                const res = await searchSong(debounce);
                dispatch(loadPage(false));

                navigate({
                    pathname: `/tim-kiem/${debounce}`,
                });
                dispatch(searchData(res.data.data));
                setValueSearch("");
            };

            if (debounce) getApiSearch();
        }
    };
    useEffect(() => {
        const getDataSearch = async () => {
            const res = await searchSong(debounce);
            const resp = res.data.data;
            let covernSearch = {};
            if (resp.artists) {
                covernSearch = {
                    artist: [resp.artists[0]],
                };
            }
            if (resp.playlists) {
                covernSearch = {
                    ...covernSearch,
                    playlist: [resp.playlists[0]],
                };
            }
            if (resp.songs) {
                if (resp.songs.length > 4) {
                    const dataSongs = resp.songs.filter(
                        (item, index) => index < 4
                    );
                    covernSearch = {
                        ...covernSearch,
                        songs: dataSongs,
                    };
                } else {
                    covernSearch = {
                        ...covernSearch,
                        songs: resp.songs,
                    };
                }
            }
            setDataSearch(covernSearch);
            setDataNavigate(resp);
        };
        if (debounce) getDataSearch();
    }, [debounce]);

    useEffect(() => {
        if (valueSearch) {
            setSearching(true);
        } else {
            setSearching(false);
        }
    }, [valueSearch]);

    return (
        <div
            className={`${
                searching
                    ? "rounded-tr-[20px] rounded-tl-[20px] bg-primary"
                    : "rounded-[20px] bg-alpha"
            }  relative  flex items-center px-3 h-[36px]`}
        >
            <div className="flex items-center w-full h-full relative z-10">
                <button>
                    <BsSearch className="text-[18px] text-placeholder" />
                </button>
                <input
                    type="text"
                    value={valueSearch}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className="outline-none h-full bg-transparent text-[14px] flex-auto pl-3 pr-2 w-full"
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                />
                {searching && (
                    <button>
                        <MdClose
                            className="cursor-pointer"
                            onClick={() => setValueSearch("")}
                        />
                    </button>
                )}
            </div>
            {searching && (
                <div className="absolute inset-0 bg-dark-alpha-50 rounded-tr-[20px] rounded-tl-[20px] "></div>
            )}
            <div
                className={`${
                    searching ? "absolute" : "hidden"
                } h-auto pb-4 w-full   top-[36px] right-0 left-0 overflow-hidden bg-primary rounded-br-[20px] rounded-bl-[20px]`}
            >
                <div className="absolute inset-0 bg-dark-alpha-50 "></div>
                <div className="relative z-[1] max-h-[50vh] overflow-hidden hover:overlay pt-2 px-3 w-full flex flex-col gap-y-2 ">
                    <span className="font-semibold text-base">
                        Gợi ý kết quả
                    </span>
                    <div>
                        {dataSearch.artist?.map((item, index) => (
                            <div
                                key={index}
                                className="flex cursor-pointer items-center gap-x-2 hover:bg-alpha px-2 py-2 rounded-md"
                                onClick={() => {
                                    handleNavigate(item.link);
                                }}
                            >
                                <img
                                    className="h-[52px] w-[52px] rounded-full"
                                    alt=""
                                    src={item.thumbnail}
                                />
                                <div className="flex flex-col font-semibold ">
                                    <span className=" text-sm">
                                        {item.name}
                                    </span>
                                    <span className="text-xs text-secondary mt-[1px]">
                                        Nghệ sĩ • {numFormat(item.totalFollow)}{" "}
                                        quan tâm
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        {dataSearch.playlist?.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    handleNavigate(item.link, "playlist");
                                }}
                                className="flex cursor-pointer overflow-hidden items-center gap-x-2 hover:bg-alpha px-2 py-2 rounded-lg "
                            >
                                <img
                                    className="h-[52px] w-[52px] rounded-md"
                                    alt=""
                                    src={item.thumbnail}
                                />
                                <div className="w-full flex flex-col    font-semibold">
                                    <span className=" w-full line-clamp-1 text-sm">
                                        {item.title}
                                    </span>
                                    <span className="text-xs text-secondary mt-[1px]">
                                        Playlist • {item.artistsNames}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        {dataSearch.songs?.map((item, index) => (
                            <Music
                                title={item.title}
                                img={item.thumbnail}
                                artists={item.artists}
                                releaseDate={item.releaseDate}
                                key={index}
                                idSong={item.encodeId}
                                handleChangeMusic={handleChangeMusic}
                                index={index}
                                duration={item.duration}
                                search
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Search);
