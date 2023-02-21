function Img() {
    return (
        <div>
            <div className="h-[60px] w-[60px] rounded-md overflow-hidden relative flex">
                <img
                    alt=""
                    src={newMusic.thumbnail}
                    className="flex-shrink-0"
                />
                <div className="absolute cursor-pointer opacity-0 group-hover:opacity-100 inset-0 h-full w-full z-10 bg-dark-alpha-50 flex items-center justify-center">
                    <FaPlay />
                </div>
            </div>
        </div>
    );
}

export default Img;
