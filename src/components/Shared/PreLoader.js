import { memo } from "react";
function PreLoader() {
    return (
        <div className=" overflow-hidden md:px-20 px-6 md:py-20 py-60 fixed  bg-screen inset-0 z-[9999]">
            <div className="flex flex-col h-full gap-y-4">
                <div className="flex h-[50%]  gap-x-8">
                    <div className="w-1/3 bg-alpha rounded-lg relative overflow-hidden">
                        <div className="absolute h-[400%] w-2/12 bg-gradient-to-r from-slate-400 to-alpha  left-[-20%]   animate-pre-loader"></div>
                    </div>{" "}
                    <div className="w-1/3 bg-alpha rounded-lg relative overflow-hidden">
                        <div className="absolute h-[400%] w-2/12 bg-gradient-to-r from-slate-400 to-alpha  left-[-20%]   animate-pre-loader"></div>
                    </div>{" "}
                    <div className="w-1/3 bg-alpha rounded-lg relative overflow-hidden">
                        <div className="absolute h-[400%] w-2/12 bg-gradient-to-r from-slate-400 to-alpha  left-[-20%]   animate-pre-loader"></div>
                    </div>
                </div>
                <div className="flex h-[50%] gap-x-8">
                    <div className="w-1/3 bg-alpha rounded-lg relative overflow-hidden">
                        <div className="absolute h-[400%] w-2/12 bg-gradient-to-r from-slate-400 to-alpha  left-[-20%]   animate-pre-loader"></div>
                    </div>{" "}
                    <div className="w-1/3 bg-alpha rounded-lg relative overflow-hidden">
                        <div className="absolute h-[400%] w-2/12 bg-gradient-to-r from-slate-400 to-alpha  left-[-20%]   animate-pre-loader"></div>
                    </div>{" "}
                    <div className="w-1/3 bg-alpha rounded-lg relative overflow-hidden">
                        <div className="absolute h-[400%] w-2/12 bg-gradient-to-r from-slate-400 to-alpha  left-[-20%]   animate-pre-loader"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(PreLoader);
