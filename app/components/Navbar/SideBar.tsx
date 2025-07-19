import { NavLinks } from '@/app/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { memo } from 'react';
import Button from '../utils/Button';

interface SideBarProps {
    isActive: boolean;
    onClose: () => void;
};

const SideBar = memo(({ isActive, onClose }: SideBarProps) => {
    const currPathName = usePathname();

    return (
        <React.Fragment>
            <section 
                className={`fixed top-[16%] w-[72vw] h-[60vh] bg-black/60 border border-gray-400/20 backdrop-blur-sm rounded-lg z-[6] p-[6%] flex flex-col items-center justify-center space-y-[10%] transition-all duration-200 ease-in-out ${isActive ? "right-[4%] opacity-100" : "!right-[-100%] opacity-0 pointer-events-none"}`}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className='w-[60%] h-[60%] flex flex-col items-end justify-center pr-[4%]'>
                    {
                        NavLinks.map((link) => (
                            <Link 
                                href={`/${link}`}
                                key={link}
                                className='w-[40%] !h-1/5 capitalize group flex flex-col items-end justify-center space-y-1 lg:space-y-2 text-md'
                            >
                                <span>{link}</span>
                                <div className={`h-[1px] ${(currPathName === `/${link}`) ? "w-full bg-amber-400" : "w-0 group-hover:w-full bg-white/80"} ease-in duration-150`} />
                            </Link>
                        ))
                    }
                </div>

                <div className='w-[80%] h-fit sm:flex items-center translate-x-[-4%] xl:translate-x-0 justify-start xl:justify-end translate-y-[8%] lg:pr-2'>
                    <div className='w-full lg:w-[98%] xl:w-[64%] h-fit relative group'>
                        <Button
                            buttonCls='!w-full py-2.5'
                            text="Let's Chat"
                        />
                        <div className='absolute top-0 left-0 w-full h-full scale-110 opacity-0 pointer-events-none group-hover:opacity-100 ease-in-out duration-200 bg-white/5 z-[0] blur-lg' />
                    </div>
                </div>
            </section>

            {
                isActive ? (
                    <section 
                        className="fixed top-[10%] left-0 w-screen h-[90%] z-[5]"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                    />
                ) : null
            }
        </React.Fragment>
    )
})

export default SideBar;