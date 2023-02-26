import { forwardRef } from "react";
import { useSelector } from "react-redux";
import icons from "../../ultis/icons";

import SongAlbum from "./SongAlbum";

function RightAlbum({ titleRight }, ref) {
    const { BiTransfer } = icons;
    const listMusic = useSelector((state) => state.app.listMusic);

    return (
        <div className="col-span-3 text-secondary text-sm font-medium h-full overflow-hidden hover:overlay">
            <div className="flex items-center">
                <span className="whitespace-nowrap mr-1">Lời tựa:</span>
                <span className="ml-1 text-main">{titleRight}</span>
            </div>
            <div className="grid grid-cols-none h-3 mt-4" ref={ref}>
                <div className=" grid grid-cols-6 px-6 relative border-b py-3 border-alpha group-hover/edit:border-transparent">
                    <BiTransfer className="absolute left-0 bottom-1/2 translate-y-1/2" />
                    <span className="grid col-span-3">Bài hát</span>
                    <span className="grid col-span-2">Album</span>
                    <span className="grid col-span-1 text-right">
                        Thời gian
                    </span>
                </div>

                <div ref={ref}>
                    {listMusic?.map((music, index) => (
                        <SongAlbum
                            key={index}
                            title={music.name}
                            duration={music.duration}
                            album={music.album}
                            artists={music.artists}
                            img={music.img}
                            idSong={music.id}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default forwardRef(RightAlbum);
