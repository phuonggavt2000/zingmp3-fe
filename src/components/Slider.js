import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getArrSlider } from "../ultis/fn";
import * as actions from "../store/actions";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import icons from "../ultis/icons";
import { useCallback } from "react";
const { MdArrowBackIosNew, MdArrowForwardIos } = icons;
var intervalId;

function Slider() {
    const banner = useSelector((state) => state.app.banner);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(2);
    const [isAuto, setIsAuto] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("banner", banner);

    // animation for banner
    useEffect(() => {
        if (isAuto) {
            intervalId = setInterval(() => {
                handleAnimationBanner(1);
            }, 4000);
        }
        return () => {
            intervalId && clearInterval(intervalId);
        };
    }, [min, max, isAuto]);
    const handleAnimationBanner = (step) => {
        const sliderEls = document.getElementsByClassName("slider-item");
        const list = getArrSlider(min, max, sliderEls.length - 1);
        for (let i = 0; i < sliderEls.length; i++) {
            // Delete classnames (css)
            sliderEls[i]?.classList?.remove(
                "animate-slide-right",
                "order-last",
                "z-20"
            );
            sliderEls[i]?.classList?.remove(
                "animate-slide-left",
                "order-first",
                "z-10"
            );
            sliderEls[i]?.classList?.remove(
                "animate-slide-left2",
                "order-2",
                "z-10"
            );

            // Hide or Show images
            if (list.some((item) => item === i)) {
                sliderEls[i].style.cssText = `display: block`;
            } else {
                sliderEls[i].style.cssText = `display: none`;
            }
        }
        // Add animation by adding classnames
        list.forEach((item) => {
            if (item === max) {
                sliderEls[item]?.classList?.add(
                    "animate-slide-right",
                    "order-last",
                    "z-20"
                );
            } else if (item === min) {
                sliderEls[item]?.classList?.add(
                    "animate-slide-left",
                    "order-first",
                    "z-10"
                );
            } else {
                sliderEls[item]?.classList?.add(
                    "animate-slide-left2",
                    "order-2",
                    "z-10"
                );
            }
        });
        if (step === 1) {
            setMin((prev) => (prev === sliderEls.length - 1 ? 0 : prev + step));
            setMax((prev) => (prev === sliderEls.length - 1 ? 0 : prev + step));
        }
        if (step === -1) {
            setMin((prev) => (prev === 0 ? sliderEls.length - 1 : prev + step));
            setMax((prev) => (prev === 0 ? sliderEls.length - 1 : prev + step));
        }
    };
    const handleClickBanner = (item) => {
        if (item?.type === 1) {
        } else if (item?.type === 4) {
            const albumPath = item?.link?.split(".")[0];
        } else {
        }
    };
    const handleBack = useCallback(
        (step) => {
            intervalId && clearInterval(intervalId);
            setIsAuto(false);
            handleAnimationBanner(step);
        },
        [min, max]
    );

    return (
        <div className="w-full  pt-6 relative">
            <Button
                text={<MdArrowBackIosNew size={30} />}
                style="absolute top-1/2 left-[70px] bg-[rgba(255,255,255,0.3)] z-50 text-white p-2 rounded-full"
                handleOnClick={() => handleBack(1)}
            />
            <Button
                text={<MdArrowForwardIos size={30} />}
                style="absolute top-1/2 right-[70px] bg-[rgba(255,255,255,0.3)] z-50 text-white p-2 rounded-full"
                handleOnClick={() => handleBack(-1)}
            />
            <div className="flex justify-center gap-x-14 w-full pt-8">
                {banner?.map((item, index) => (
                    <img
                        alt=""
                        key={item.encodeId}
                        src={item.banner}
                        className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${
                            index <= 2 ? "block" : "hidden"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
