import mySongsImg from "../../asset/mySong";
import { Link } from "react-router-dom";

function Podcast() {
    return (
        <div className="flex items-center justify-center flex-col py-8 gap-y-4">
            <div className="flex justify-center items-center">
                <img
                    src={mySongsImg.poccast}
                    alt=""
                    className="max-w-[60%] max-h-[60%]"
                />
            </div>

            <span className="text-base text-secondary">
                Chưa có podcasts nào đc tải lên trong thư viện cá nhân
            </span>
            <div className="justify-center items-center">
                <Link
                    to="/"
                    className="bg-primary p-2 px-4 rounded-full uppercase"
                >
                    Khám phá ngay
                </Link>
            </div>
        </div>
    );
}

export default Podcast;
