import { useState, type FC } from "react";
import { PostData, type IPostData } from "../../constants/data";
import { Icons } from "../../constants/icon/icons";
import PosDriver from "./posdriver";

const Pos: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [pos, setPos] = useState<null | IPostData>(null);

    function handle(value: IPostData) {
        setOpen(true);
        if (value) {
            setPos(value);
        }
    }
    return (
        <div className='flex gap-5'>
            {PostData.map((item) => (
                <div className='pl-2.5 pr-2.5 pt-2.5 pb-6.25 bg-[#343743] rounded-[20px]'>
                    <div className='w-56.25 h-32.75 bg-[#272A30] rounded-[20px]'></div>

                    <div className='flex mt-2.5'>
                        <h1 className='text-white font-bold '>{item.name}</h1>
                    </div>
                    <div className='text-white text-[14px] gap-2 mt-2.5'>
                        <p>Brand: {item.brand}</p>
                        <p>Quality: {item.quality}</p>
                    </div>

                    <button
                        onClick={() => handle(item)}
                        className='flex gap-2.5 py-1.5 px-13.75 bg-[#272A30] rounded-[20px] mt-5.75'
                    >
                        <span>
                            <Icons.PosIcon />
                        </span>
                        <span className='text-white fond-bold'>
                            Add to Cart
                        </span>
                    </button>
                </div>
            ))}
            {pos ? <PosDriver open={open} setOpen={setOpen} pos={pos} /> : null}
        </div>
    );
};

export default Pos;
