import icons from "../../ultis/icons";

function Search() {
    const { BsSearch } = icons;
    return (
        <div className="bg-alpha rounded-full flex items-center px-3 py-1">
            <BsSearch className="text-[18px] text-placeholder" />
            <input
                type="text"
                className="outline-none h-[34px] bg-transparent text-[14px] flex-auto pl-3 "
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
        </div>
    );
}

export default Search;
