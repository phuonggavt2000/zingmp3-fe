import icons from "../ultis/icons";
import Tippy from "@tippyjs/react";
import images from "../asset/images";

function ModalTheme({ ismodal, closemodal }) {
    const { GrClose } = icons;
    return (
        <div className="bg-alpha fixed inset-0 flex justify-center items-center">
            <div className="h-[90vh] w-[60vw]  font-bold bg-screen rounded-xl overflow-hidden px-7 py-6">
                <div className="flex items-center text-2xl capitalize relative">
                    <span>Giao diện </span>
                    <Tippy content="Đóng" placement="top">
                        <button className="ml-auto  flex justify-center items-center absolute right-0">
                            <GrClose
                                className="ml-auto text-sub"
                                onClick={() => closemodal(true)}
                            />
                        </button>
                    </Tippy>
                </div>
                <div className="pt-6 text-xl">
                    <span>Màu Sắc</span>
                    <div className="pt-2 grid grid-cols-6 gap-4">
                        <div className=" overflow-hidden rounded relative">
                            <img src={images.themeBlue} alt="" />
                            <div className="absolute flex  opacity-0 hover:opacity-90 inset-0 gap-y-2 px-3  bg-alpha  flex-col justify-center items-center ">
                                <button className="w-full bg-primary border border-primary hover:opacity-90 rounded-full uppercase text-sub font-normal text-[10px]">
                                    áp dụng
                                </button>
                                <button className="w-full border border-white bg-gray-600 hover:opacity-90   rounded-full uppercase text-sub font-normal text-[10px]">
                                    xem trước
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalTheme;
