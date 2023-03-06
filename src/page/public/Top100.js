import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTop100 } from "../../apis";
import images from "../../asset/images";
import Playlist from "../../components/Shared/Playlist";
import { loadPage } from "../../store/actions";

function Top100() {
    const dispatch = useDispatch();
    const [dataTops, setDataTops] = useState([]);
    useEffect(() => {
        const getApiTop100 = async () => {
            dispatch(loadPage(true));
            const res = await getTop100();
            dispatch(loadPage(false));
            setDataTops(res.data.data);
        };
        getApiTop100();
    }, [dispatch]);
    return (
        <div className="relative">
            <div className="absolute w-full z-10">
                <img
                    src={images.bannerTop}
                    className=" brightness-50 w-full"
                    alt=""
                />
                <div className="absolute inset-0 bg-newRelease "></div>
                <div className="absolute w-full h-[2px]  -bottom-8 shadow-screen shadow-[0_10px_31px_76px_blue] "></div>
            </div>
            <div className="relative z-20 md:px-16 px-6 md:pd-0 pb-16">
                <div className="px-60 md:py-20 py-6 ">
                    <img
                        src={images.logoTop}
                        className="w-full h-full"
                        alt=""
                    />
                </div>
                <div>
                    {dataTops.map((item) => (
                        <Playlist playlist={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Top100;
