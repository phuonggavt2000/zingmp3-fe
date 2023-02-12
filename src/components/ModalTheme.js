import icons from "../ultis/icons";

function ModalTheme() {
    const { GrClose } = icons;

    return (
        <div className="bg-alpha fixed inset-0 flex justify-center items-center">
            <div className="h-[90vh] w-[60vw]  font-bold bg-primary rounded-xl overflow-hidden px-7 py-6">
                <div className="flex items-center text-2xl capitalize">
                    <span>Giao diện </span>
                    <GrClose className="ml-auto" />
                </div>
                <div className="pt-6 text-xl">
                    <span>Màu Sắc</span>
                    <div className="pt-2">backgroundColor</div>
                </div>
            </div>
        </div>
    );
}

export default ModalTheme;
