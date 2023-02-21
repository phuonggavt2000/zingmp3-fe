import icons from "../../ultis/icons";
import Tippy from "@tippyjs/react";

function LeftAlbum() {
    const { BsPlayCircle, AiOutlineHeart, CgMoreAlt, BsFillPlayFill } = icons;
    return (
        <div className="flex flex-col items-center gap-y-1 text-xs text-secondary text-center font-medium pr-6">
            <div className="relative cursor-pointer group overflow-hidden rounded-md">
                <img
                    alt=""
                    className="transition-all ease-linear duration-300  group-hover:scale-110"
                    src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/d/6/9/e/d69ee17b8250b06d7d904989fe334d5b.jpg"
                />
                <div className=" inset-0 transition-all bg-dark-alpha-50 justify-center items-center flex gap-x-5 text-3xl opacity-0 group-hover:opacity-100 absolute">
                    <button className="text-5xl text-main">
                        <BsPlayCircle />
                    </button>
                </div>
            </div>
            <span className="text-base uppercase text-center font-bold text-main">
                Những bài hát hay nhất của đức phúc
            </span>
            <span>Cập nhập </span>
            <div className="text-center">
                <span className="link-artist">Osad</span>
            </div>
            <span>65k người yêu thích</span>
            <button className=" flex items-center bg-primary text-white px-6 py-2 rounded-full text-sm font-normal uppercase hover:brightness-90">
                <BsFillPlayFill className="text-2xl" /> Phát ngẫu nhiên
            </button>
            <div>
                <Tippy content="Thêm vào thư viện">
                    <button className="btn-primary p-3 text-base text-main">
                        <AiOutlineHeart />
                    </button>
                </Tippy>
                <Tippy content="Xem thêm">
                    <button className="btn-primary p-3 text-base text-main">
                        <CgMoreAlt />
                    </button>
                </Tippy>
            </div>
        </div>
    );
}

export default LeftAlbum;
