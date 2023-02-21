import icons from "../../ultis/icons";

function RightAlbum() {
    const { BiTransfer, BsMusicNoteBeamed } = icons;

    return (
        <div className="col-span-3 text-secondary text-sm font-medium ">
            <div className="flex items-center">
                <span>Lời tựa:</span>
                <span className="ml-1 text-main">
                    Lấy động lực bước đến crush của mình và nói rằng bạn thích
                    người ấy nhiều như thế nào!
                </span>
            </div>
            <div className="grid grid-cols-none h-3 mt-4">
                <div className=" grid grid-cols-6 pl-6 relative">
                    <BiTransfer className="absolute left-0 bottom-1/2 translate-y-1/2" />
                    <span className="grid col-span-3">Bài hát</span>
                    <span className="grid col-span-2">Album</span>
                    <span className="grid col-span-1">Thời gian</span>
                </div>
                <div className=" grid grid-cols-6 pl-6 relative">
                    <BsMusicNoteBeamed className="absolute left-0 bottom-1/2 translate-y-1/2" />
                    <div className="grid col-span-3"></div>
                    <span className="grid col-span-2">Album</span>
                    <span className="grid col-span-1">Thời gian</span>
                </div>
            </div>
        </div>
    );
}

export default RightAlbum;
