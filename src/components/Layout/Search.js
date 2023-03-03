import { useEffect, useState } from "react";
import { searchSong } from "../../apis";
import useDebounce from "../../hook/useDebounce";
import icons from "../../ultis/icons";

function Search() {
    const { BsSearch, MdClose } = icons;
    const [valueSearch, setValueSearch] = useState("");
    const [searching, setSearching] = useState(false);
    console.log("searching:", searching);
    const debounce = useDebounce(valueSearch, 500);

    const handleChange = (e) => {
        const value = e.target.value;
        if (value.startsWith(" ")) {
            return;
        }

        if (value) {
            setSearching(true);
        } else {
            setSearching(false);
        }

        setValueSearch(value);
    };
    useEffect(() => {
        const getDataSearch = async () => {
            const res = await searchSong(debounce);
            console.log("res:", res);
        };
        getDataSearch();
    }, [debounce]);

    return (
        <div className="bg-primary relative  rounded-tr-[20px] rounded-tl-[20px] flex items-center px-3 h-[36px]">
            <div className="flex items-center w-full h-full">
                <button>
                    <BsSearch className="text-[18px] text-placeholder" />
                </button>
                <input
                    type="text"
                    value={valueSearch}
                    onChange={handleChange}
                    className="outline-none h-full bg-transparent text-[14px] flex-auto pl-3 pr-2 w-full"
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                />
                <button>
                    <MdClose
                        className="cursor-pointer"
                        onClick={() => setValueSearch("")}
                    />
                </button>
            </div>
            <div className="h-auto pb-8 w-full absolute  top-[36px] right-0 left-0  bg-primary rounded-br-[20px] rounded-bl-[20px]">
                <div className="max-h-[50vh] overlay py-8  w-full  ">
                    <div className="h-[1000px]"></div>
                </div>
            </div>
        </div>
    );
}

export default Search;
