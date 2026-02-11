import type { FC } from "react";
import menuData from "../context/Main";
import { Link } from "react-router-dom";
import { Icons } from "../shared/constants/icon/icons";

const App: FC = () => {
    return (
        <>
            <main className='flex min-h-screen bg-[#1e1e26] text-white font-[Inter]'>
                <section className='bg-[#2b2b36] flex flex-col py-5 justify-between w-[260px]'>
                    <div>{/* img */}</div>
                    <div className='flex flex-col gap-2 px-8 flex-grow'>
                        {menuData.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                className='       flex items-center gap-[15px]
            py-3 pl-6 pe-0
            text-[#a0a0b0] text-[16px] font-medium
            rounded-[25px]
            transition-all duration-300 ease-in-out
            hover:bg-[rgba(155,116,240,0.2)]
            hover:text-white
            focus:bg-[rgba(155,116,240,0.2)]
            focus:text-white'
                            >
                                {item.icons}
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <div className=''>
                        <button className='text-white text-[16px] font-bold pl-6 flex gap-[15px] '>
                            <Icons.LogoutIcon />
                            Logout
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
};

export default App;
