import { useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";

function Toast() {
    const [listToast, setListToast] = useState([]);

    const toast = useSelector((state) => state.app.toast);

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

    useEffect(() => {
        if (toast.id) {
            setListToast((prev) => [...prev, { ...toast }]);
        }
    }, [toast]);

    return (
        <div className="fixed right-0 top-[70px]  flex flex-col gap-y-5 z-50">
            {listToast.map((value, index) => {
                const Icon = value.icon;
                let statusToast;
                if (value.type === "success") {
                    statusToast =
                        "shadow-[0_0_100px_40px_rgba(22,255,0,0.6)] bg-green-400";
                } else if (value.type === "warning") {
                    statusToast =
                        "shadow-[0_0_100px_40px_rgba(255,237,0,0.6)] bg-yellow-400";
                } else if (value.type === "error") {
                    statusToast =
                        "shadow-[0_0_100px_40px_rgba(255,3,3,0.6)] bg-red-400";
                }

                return (
                    <div
                        key={index}
                        className={`animate-display-toast  flex items-center rounded-md h-[80px] w-[350px] overflow-hidden bg-dark-alpha-50  transition-all duration-500 `}
                    >
                        <div className=" w-[30%] flex justify-center ">
                            <button
                                className={` ${statusToast} p-2 rounded-full `}
                            >
                                <Icon className="text-slate-800" />
                            </button>
                        </div>
                        <div className="w-[70%] h-full shadow-lg flex flex-col justify-center font-medium">
                            <span className="uppercase text-primary font-bold">
                                {value.title}
                            </span>
                            <span className="text-sm text-white">
                                {value.decs}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Toast;
