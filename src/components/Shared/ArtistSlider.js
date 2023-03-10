import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import numFormat from "../../ultis/numFormat";

function ArtistSlider({ items, title }) {
    console.log("items:");
    const navigate = useNavigate();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: items?.length < 6 ? items?.length : 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    speed: 1500,
                    slidesToShow: items?.length < 4 ? items?.length : 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    cssEase: "linear",
                },
            },
        ],
    };
    return (
        <div className="mt-12">
            <div className="font-bold text-xl mb-6 capitalize">
                {title ? title : "Ca sĩ yêu thích"}
            </div>
            {!!items.length && (
                <Slider {...settings}>
                    {items?.map((value, index) => (
                        <div key={index}>
                            <div className="px-2 flex flex-col items-center">
                                <div className="overflow-hidden group rounded-full">
                                    <img
                                        className=" cursor-pointer group-hover:scale-110  transition-all duration-300"
                                        alt=""
                                        src={value.thumbnail}
                                        onClick={() => {
                                            navigate(value.link);
                                        }}
                                    />
                                </div>

                                <span
                                    onClick={() => {
                                        navigate(value.link);
                                    }}
                                    className="whitespace-nowrap text-sm font-bold text-main hover:text-primary hover:underline cursor-pointer "
                                >
                                    {value.name}
                                </span>
                                <div className="text-secondary font-medium text-xs">
                                    {numFormat(value.totalFollow)} quan tâm
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
}

export default ArtistSlider;
