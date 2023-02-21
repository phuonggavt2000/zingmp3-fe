import icons from "../../ultis/icons";
import Tippy from "@tippyjs/react";
import PlayMusic from "../Player/PlayMusic";
import { memo } from "react";

function Player() {
    const { CgMoreAlt } = icons;
    return (
        <div className=" h-full flex px-4 ">
            <div className="flex items-center h-full gap-x-3 basis-[30%]">
                <img
                    alt=""
                    className="h-[64px] w-[64px] rounded-lg"
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/3/b/e/83be1f0505b66642b1156de92867467d.jpg"
                />
                <div className="flex flex-col font-semibold">
                    <span className="text-sm">Form The Street</span>
                    <span className="text-xs text-secondary link-artist">
                        Dế choắt
                    </span>
                </div>
                <Tippy content="Xem thêm">
                    <button className="btn-primary">
                        <CgMoreAlt />
                    </button>
                </Tippy>
            </div>
            <div className="basis-[40%] bg-blue-700">
                <PlayMusic />
            </div>
            <div className="basis-[30%]"></div>
        </div>
    );
}

export default memo(Player);
