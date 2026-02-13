import type { FC } from "react";
import { Icons } from "../../constants/icon/icons";

const SearchSide: FC = () => {
    // fetch
    return (
        <>
            <div className="max-w-106 min-w-106 bg-[#343743] p-2.5 rounded-[20px] flex items-center gap-4">
                <button>
                    <Icons.searchIcon />
                </button>
                <input type='text' placeholder='search....' className="w-full outline-none text-white"/>
            </div>
        </>
    );
};
export default SearchSide;
