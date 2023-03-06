import icons from "../../ultis/icons";
import Tippy from "@tippyjs/react";
import optionBgs from "../../ultis/optionBgs";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";

function ModalTheme({ ismodal, closemodal }) {
    const dispatch = useDispatch();
    const { AiOutlineClose } = icons;
    const handleChangetheme = (classTheme) => {
        dispatch(actions.changeTheme(classTheme));
    };
    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    closemodal(true);
                }
            }}
            className="bg-alpha fixed inset-0 flex justify-center items-center  z-[9999]"
        >
            <div className="h-[90vh] w-[60vw]  font-bold bg-screen rounded-xl overflow-hidden px-7 py-6 shadow-2xl  z-50">
                <div className="flex items-center text-2xl capitalize relative">
                    <span>Giao diện </span>
                    <Tippy content="Đóng" placement="top">
                        <button className="ml-auto  flex justify-center items-center absolute right-0">
                            <AiOutlineClose
                                className="ml-auto text-main"
                                onClick={() => closemodal(true)}
                            />
                        </button>
                    </Tippy>
                </div>
                <div className="pt-6 text-xl">
                    <span>Màu Sắc</span>
                    <div className="pt-2 grid grid-cols-3 gap-4">
                        {optionBgs.map((bg, index) => (
                            <div
                                className=" overflow-hidden rounded relative"
                                key={index}
                            >
                                <img src={bg.img} alt="" />
                                <div className="absolute flex  opacity-0 hover:opacity-90 inset-0 gap-y-2 px-3  bg-alpha  flex-col justify-center items-center ">
                                    <button
                                        onClick={() => {
                                            handleChangetheme(bg.class);
                                        }}
                                        className="w-full bg-primary border border-primary hover:opacity-90 rounded-full uppercase text-sub font-normal text-[10px]"
                                    >
                                        áp dụng
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalTheme;
