import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import icons from "../../ultis/icons";

function Toast({ listToast, setListToast }) {
    const { FaExclamation } = icons;

    const deleteListToast = useCallback(
        (id) => {
            const toastListItem = listToast.filter((e) => e.id !== id);
            setListToast(toastListItem);
        },
        [listToast, setListToast]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (listToast.length) {
                deleteListToast(listToast[0].id);
            }
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, [listToast, deleteListToast]);

    return (
        <div className="fixed right-0 top-[70px] z-30 flex flex-col gap-y-5">
            {listToast.map((value, index) => (
                <div
                    key={index}
                    className={`animate-display-toast  flex items-center rounded-md h-[80px] w-[350px] overflow-hidden bg-dark-alpha-50  transition-all duration-500 `}
                >
                    <div className=" w-[30%] flex justify-center ">
                        <button className="shadow-[0_0_100px_40px_rgba(255,237,0,0.6)] p-2 rounded-full bg-yellow-400">
                            <FaExclamation className="text-slate-800" />
                        </button>
                    </div>
                    <div className="w-[70%] h-full shadow-lg flex flex-col justify-center font-medium">
                        <span className="uppercase text-primary font-bold">
                            Dành cho tài khoản vip
                        </span>
                        <span className="text-sm text-white">
                            Bạn cần có tài khoản vip để có thể nghe bài này
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Toast;
