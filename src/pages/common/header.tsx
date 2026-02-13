import type { FC } from "react";
import { Icons } from "../../shared/constants/icon/icons";

const Header: FC = () => {
    return (
        <div className='bg-[#272A30]'>
            <div className='flex justify-end items-end gap-[26px] pt-[26px] pr-[65px]'>
                <button className=''>
                    <Icons.LanguageIcon />
                </button>
                <button className=''>
                    <Icons.SettingsIcon />
                </button>
                <button className=''>
                    <Icons.ProfileIcon />
                </button>
            </div>
        </div>
    );
};
export default Header;
