import icons from "../../ultis/icons";

function Img({ height = "60px", width = "60px", img }) {
    const { FaPlay } = icons;

    return (
        <div>
            <div
                className={`h-[${height}] w-[${width}] text-white rounded-md overflow-hidden relative flex cursor-pointer`}
            >
                <img alt="" src={img} className="flex-shrink-0" />
                <div className="absolute cursor-pointer opacity-0 group-hover:opacity-100 inset-0 h-full w-full z-10 bg-dark-alpha-50 flex items-center justify-center">
                    <FaPlay />
                </div>
            </div>
        </div>
    );
}

export default Img;
