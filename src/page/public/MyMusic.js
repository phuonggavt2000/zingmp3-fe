import icons from "../../ultis/icons";

function MyMusic() {
    const { BsFillPlayFill, AiOutlineRight } = icons;
    return (
        <div className="px-16 mt-32 flex gap-y-10 flex-col">
            <div className="text-4xl font-bold flex items-center gap-x-4">
                <span>Thư viện</span>
                <button className=" bg-primary rounded-full">
                    <BsFillPlayFill />
                </button>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <span className="font-bold text-2xl capitalize">
                        Playlist
                    </span>
                    <span className="ml-auto flex items-center text-sm text-secondary link-artist">
                        Tất cả <AiOutlineRight />
                    </span>
                </div>
                <div></div>
            </div>
            <div className=" font-semibold">
                <span className="block text-lg">Bài hát</span>
                <button className="px-2 mt-2 bg-primary font-medium text-sm inline-block rounded-full">
                    Yêu thích
                </button>
            </div>
        </div>
    );
}

export default MyMusic;
