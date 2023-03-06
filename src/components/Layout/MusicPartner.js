import panertImgs from "../../asset/partner";

function MusicPartner() {
    return (
        <div className="mt-10 pb-14">
            <div className="flex justify-center items-center ">
                <span className="text-secondary font-semibold">
                    Đối tác âm nhạc
                </span>
            </div>
            <div className="grid lg:grid-cols-8 grid-cols-4 mt-8 gap-6">
                {panertImgs.map((item, index) => (
                    <div
                        key={index}
                        className="h-auto w-full bg-white rounded-md flex items-center justify-center"
                    >
                        <img
                            className="object-fill max-w-[80%] max-h-[80%]"
                            alt=""
                            src={item}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MusicPartner;
