import { Drawer } from "antd";
import { type FC } from "react";
import { type IPostData } from "../../constants/data";

interface IPosDriver {
    open: boolean;
    setOpen: (value: boolean) => void;
    pos: IPostData;
}
const PosDriver: FC<IPosDriver> = ({ open, setOpen, pos }) => {
    function onClose() {
        setOpen(false);
    }

    console.log(pos);

    return (
        <>
            <div className=''>
                <div>
                    <Drawer open={open} onClose={onClose}>
                        <h2>SaleSummery</h2>

                        <div className='flex-1 overflow-y-auto space-y-3'>
                            <div className='flex justify-between items-center bg-[#939393] p-3 rounded-xl'>
                                <div className='w-72.75  '></div>
                            </div>
                        </div>
                    </Drawer>
                </div>
            </div>
        </>
    );
};
export default PosDriver;
