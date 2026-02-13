import type { FC } from "react";
import menuData from "../context/Main";
import Header from "../pages/common/header";
import { Link, Route, Routes } from "react-router-dom";
import { Icons } from "../shared/constants/icon/icons";
import { routes } from "./routes";

const App: FC = () => {
    return (
        <main className='flex'>
            <aside className='flex min-h-screen bg-[#1e1e26] text-white font-[Inter]'>
                <section className='bg-[#2b2b36] flex flex-col py-5 justify-between w-65'>
                    <div className='flex items-center justify-center my-6.5  '>
                        <Icons.HomeImg />
                    </div>
                    <div className='flex flex-col gap-2 px-8 grow'>
                        {menuData.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                className='       flex items-center gap-3.75
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
                        <button
                            className='text-white text-[16px] font-bold ml-6 flex gap-3.75 py-3 pl-6 pe-25 
            rounded-[25px]
            transition-all duration-300 ease-in-out
            hover:bg-[rgba(155,116,240,0.2)]
            hover:text-white
            focus:bg-[rgba(155,116,240,0.2)]
            focus:text-white '
                        >
                            <Icons.LogoutIcon />
                            Logout
                        </button>
                    </div>
                </section>
            </aside>

            <section className='w-full bg-[#272A30] pl-15'>
                <header className='w-full pt-6.5 pb-11'>
                    <Header />
                </header>
                <section className='pr-15'>
                    <Routes>
                        {routes.map((item) => (
                            <Route
                                key={item.id}
                                path={item.path}
                                element={item.elements}
                            />
                        ))}
                    </Routes>
                </section>
            </section>
        </main>
    );
};

export default App;
