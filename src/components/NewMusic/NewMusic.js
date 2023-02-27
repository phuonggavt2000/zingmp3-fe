/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import icons from "../../ultis/icons";
import Music from "./Music";
import { listMusic, updateSong } from "../../store/actions";

function NewMusic() {
    const newMusics = useSelector((state) => state.app.newMusic);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { AiOutlineRight } = icons;

    const [activeStatus, setActiveStatus] = useState(0);
    const [typeMusic, setTypeMusic] = useState("all");
    const [limitedMusics, setLimitedMusic] = useState([]);

    const handleNavigate = (path = "/newMusic") => {
        navigate(path);
    };

    const changeTypeMusic = (index, type) => {
        setActiveStatus(index);
        setTypeMusic(type);
    };

    useEffect(() => {
        let dataMusics = newMusics[typeMusic] || [];
        const limitedMusics = dataMusics.filter((music, index) => 12 > index);
        console.log("limitedMusics:", limitedMusics);
        setLimitedMusic(limitedMusics);
    }, [typeMusic, newMusics]);

    const handleChangeMusic = (index) => {
        const convertSong = limitedMusics.map((music) => {
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

    const selectStatus = [
        {
            title: "tất cả",
            type: "all",
        },
        {
            title: "Việt nam",
            type: "vPop",
        },
        {
            title: "Quốc tế",
            type: "others",
        },
    ];

    return (
        <div className="mt-12">
            <span className="text-xl font-extrabold">Mới Phát hành</span>
            <div className="my-5 flex items-center">
                <div className="flex items-center gap-x-2">
                    {selectStatus.map((value, index) => (
                        <button
                            key={index}
                            onClick={() => changeTypeMusic(index, value.type)}
                            className={`outline-none  px-6 py-1 text-xs uppercase rounded-full ${
                                index === activeStatus
                                    ? "bg-primary text-white"
                                    : "border border-alpha hover:brightness-90"
                            }`}
                        >
                            {value.title}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => {
                        handleNavigate();
                    }}
                    className="ml-auto text-xs uppercase flex items-center gap-x-1 text-secondary hover:text-primary"
                >
                    <span>Tất cả</span> <AiOutlineRight className="text-base" />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-x-6">
                {limitedMusics.map((newMusic, index) => (
                    <Music
                        title={newMusic.title}
                        img={newMusic.thumbnail}
                        artists={newMusic.artists}
                        releaseDate={newMusic.releaseDate}
                        key={index}
                        idSong={newMusic.encodeId}
                        handleChangeMusic={handleChangeMusic}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewMusic;
