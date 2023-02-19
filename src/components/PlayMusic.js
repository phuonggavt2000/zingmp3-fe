import icons from "../ultis/icons";

function PlayMusic() {
    const { ImPrevious2, ImNext2, BsPlayCircle, MdOutlineRepeat, BiTransfer } =
        icons;
    return (
        <div className="flex justify-center items-center">
            <div>
                <button>
                    <BiTransfer />
                </button>{" "}
                <button>
                    <ImPrevious2 />
                </button>{" "}
                <button>
                    <BsPlayCircle />
                </button>{" "}
                <button>
                    <ImNext2 />
                </button>{" "}
                <button>
                    <MdOutlineRepeat />
                </button>
            </div>
            <div></div>
        </div>
    );
}

export default PlayMusic;
