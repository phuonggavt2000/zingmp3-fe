import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import icons from "../../ultis/icons";
import Artist from "./Artist";
import moment from "moment";
import { listMusic, updateSong, toggleMusic } from "../../store/actions";

function NewMusicSlider({ hNewrelease }) {
    const { BsFillPlayFill, BsPauseFill } = icons;
    const dispatch = useDispatch();
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    infinite: true,
                    speed: 1500,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    cssEase: "linear",
                },
            },
        ],
    };
    const isPlay = useSelector((state) => state.app.isPlay);
    const id = useSelector((state) => state.app.infoSong.id);
    const handleChangeMusic = (index) => {
        const convertSong = hNewrelease.items?.map((music) => {
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
        <div className="mt-12 hidden-slick">
            <span className="font-bold text-xl mb-4 inline-block">
                {hNewrelease.title}
            </span>
            <Slider {...settings}>
                {hNewrelease.items?.map((item, index) => {
                    const isPlaying = id === item.encodeId && isPlay;
                    return (
                        <div key={index} className="px-2">
                            <div className="flex items-center gap-x-4 bg-alpha p-4 rounded-md overflow-hidden">
                                <div
                                    onClick={() => {
                                        if (isPlaying) {
                                            dispatch(toggleMusic());
                                        } else if (id === item.encodeId) {
                                            dispatch(toggleMusic());
                                        } else {
                                            handleChangeMusic(index);
                                        }
                                    }}
                                    className="h-[120px] w-[120px] rounded-md overflow-hidden relative group cursor-pointer shrink-0"
                                >
                                    <img
                                        alt=""
                                        className="group h-full w-full group-hover:scale-110 transition-all duration-500"
                                        src={item.thumbnail}
                                    />
                                    <div
                                        className={`${
                                            isPlaying ? "flex" : "hidden"
                                        } absolute  group-hover:flex inset-0 bg-dark-alpha-50  items-center justify-center`}
                                    >
                                        {isPlaying ? (
                                            <BsPauseFill className="text-5xl" />
                                        ) : (
                                            <BsFillPlayFill className="text-5xl" />
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col font-medium gap-y-6 w-full">
                                    <div className="flex-col flex">
                                        <span className="font-bold text-base  line-clamp-1">
                                            {item.title}
                                        </span>
                                        <div className="text-xs">
                                            {item.artists?.map(
                                                (item, index) => (
                                                    <Artist
                                                        link={item.link}
                                                        name={item.name}
                                                        key={index}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-new text-4xl  font-black">
                                            {`#${index + 1}`}
                                        </span>
                                        <span className="ml-auto text-secondary text-sm">
                                            {moment
                                                .unix(item.releaseDate)
                                                .format("MM/DD/YYYY")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default NewMusicSlider;
