import { memo } from "react";
function PreLoader() {
    return (
        <div className="h-full w-full overflow-hidden ">
            <div className="flex h-[50%] mt-10 gap-x-8">
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
            <div className="flex h-[50%] mt-10 gap-x-8">
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
    );
}

export default memo(PreLoader);
