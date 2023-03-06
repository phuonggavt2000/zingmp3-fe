/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { getArrSlider } from "../../ultis/fn";
import icons from "../../ultis/icons";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    getInfoSong,
    listMusic,
    loadMusic,
    updateSong,
} from "../../store/actions";
import { getInfosong, getSong } from "../../apis";
const { MdArrowBackIosNew, MdArrowForwardIos } = icons;

function Slider() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const banner = useSelector((state) => state.app.banner);

    const [currentImg, setCurrentImg] = useState(1);

    const banners = [
        "https://photo-zmp3.zmdcdn.me/banner/2/e/9/f/2e9f2a22bcaa9a69a1ff4ef59294dbfd.jpg",
        "https://photo-zmp3.zmdcdn.me/banner/d/3/6/f/d36f4338842a108aa23e6edef3db1de7.jpg",
        "https://photo-zmp3.zmdcdn.me/banner/b/8/8/b/b88b2e1141ec5818e61e974747fc36ad.jpg",
        "https://photo-zmp3.zmdcdn.me/banner/7/b/1/1/7b11b2f20518c3cb83a040e3a4001681.jpg",
        "https://photo-zmp3.zmdcdn.me/banner/6/1/7/f/617fea08d0f58f46df9a54361252f061.jpg",
        "https://photo-zmp3.zmdcdn.me/banner/d/7/e/7/d7e7bbef348f8f48d4fcc486599decbc.jpg",
    ];

    const handlePrev = () => {
        const eleSliders = document.querySelectorAll(".slider-item");
        if (currentImg <= 0) {
            setCurrentImg(eleSliders.length - 1);
        } else {
            setCurrentImg(currentImg - 1);
        }
    };
    const handleNext = () => {
        const eleSliders = document.querySelectorAll(".slider-item");
        if (currentImg >= eleSliders.length - 1) {
            setCurrentImg(0);
        } else {
            setCurrentImg(currentImg + 1);
        }
    };

    const handleClickBanner = (item) => {
        if (item?.type === 1) {
            const getMusic = async () => {
                dispatch(loadMusic(true));
                const res = await getInfosong(item.encodeId);
                const resDetailSong = res.data.data;
                dispatch(loadMusic(false));

                const convertSong = {
                    id: resDetailSong.encodeId,
                    name: resDetailSong.title,
                    img: resDetailSong.thumbnail,
                    duration: resDetailSong.duration,
                    artists: resDetailSong.artists,
                };
                dispatch(updateSong(0));
                dispatch(listMusic([convertSong]));
            };
            getMusic();
        } else if (item?.type === 4) {
            // eslint-disable-next-line no-unused-vars
            const albumPath = item?.link?.split(".")[0];
            navigate(albumPath);
        } else {
        }
    };

    useEffect(() => {
        const intervalSlider = setTimeout(handlePrev, 5000);
        return () => {
            clearTimeout(intervalSlider);
        };
    }, [currentImg]);

    return (
        <div className="flex  gap-x-4 lg:h-[13vw] h-[20vw] md:w-auto w-full hidden-slider lg:show-slider  relative items-center -mx-2 md:-mx-3 lg:-mx-5">
            <button
                onClick={handlePrev}
                className="p-4 left-5 bg-alpha rounded-full absolute top-1/2 -translate-y-1/2 z-20 hidden lg:flex"
            >
                <MdArrowBackIosNew className="text-2xl" />
            </button>
            <button
                onClick={handleNext}
                className="p-4 bg-alpha rounded-full absolute top-1/2 right-9 -translate-y-1/2 z-20 hidden lg:flex"
            >
                <MdArrowForwardIos className="text-2xl" />
            </button>
            {banner?.map((item, key, banners) => (
                <div
                    key={key}
                    onClick={() => handleClickBanner(item)}
                    className={`${
                        currentImg === key
                            ? "current-slider"
                            : currentImg - 1 === key
                            ? "prev-slider"
                            : currentImg + 1 === key
                            ? "next-slider"
                            : currentImg === 0 && banners.length - 1 === key
                            ? "prev-slider"
                            : currentImg === banners.length - 1 && key === 0
                            ? "next-slider"
                            : "z-[1] opacity-0"
                    } slider-item absolute cursor-pointer lg:w-[33%] lg:left-[33%] w-[50%] left-[50%]  lg:px-4 md:px-3 px-2 transition-all top-0 duration-700  ease-in-out`}
                >
                    <img src={item.banner} alt="" className="rounded-md" />
                </div>
            ))}

            {/* <div className="absolute w-[33%]  left-[33%] px-4 next-slider">
                <img src={banners[2]} alt="" className="rounded-md" />
            </div> */}
        </div>
    );
}

export default Slider;
