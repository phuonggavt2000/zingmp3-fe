import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSong } from "../../store/actions";
import icons from "../../ultis/icons";

import SongAlbum from "./SongAlbum";

function RightAlbum({ titleRight }, ref) {
    const { BiTransfer } = icons;
    const dispatch = useDispatch();

    const listMusic = useSelector((state) => state.app.listMusic);

    const handleChangeSong = (index) => {
        dispatch(updateSong(index));
    };

    return (
        <div className="col-span-5 text-secondary text-sm font-medium h-full lg:overflow-hidden lg:hover:overlay">
            <div className="flex ">
                <span className="ml-1 text-main">
                    <span className="whitespace-nowrap text-secondary mr-1">
                        Lời tựa:
                    </span>{" "}
                    {titleRight}
                </span>
            </div>
            <div className="grid grid-cols-none h-3 mt-4" ref={ref}>
                <div className=" grid grid-cols-6 px-6 relative border-b py-3 border-alpha group-hover/edit:border-transparent">
                    <BiTransfer className="absolute left-2 bottom-1/2 translate-y-1/2" />
                    <span className="grid col-span-3 pl-2">Bài hát</span>
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
                            handleChangeSong={handleChangeSong}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default forwardRef(RightAlbum);
