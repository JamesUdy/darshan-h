'use client';

import { NavLinks } from '@/app/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import Button from '../utils/Button';
import SideBar from './SideBar';

const SideBarIconUrl = "/icons";

const Navbar = memo(() => {
    const currPathName = usePathname();
    const [showNavbar, setShowNavbar] = useState(true);
    const [isSideBarOpened, setSideBarOpened] = useState<boolean>(false);
    const lastScrollY = useRef(0);
    const threshold = 80;

    const onSideBarToggleHandler = useCallback(() => {
        setSideBarOpened(prevState => !prevState);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                setShowNavbar(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > threshold) {
                // scrolling down
                setShowNavbar(false);
            } else {
                // scrolling up
                setShowNavbar(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <React.Fragment>
            <section className={`w-screen h-[12vh] overflow-x-hidden !bg-[rgb(15,15,15)]/20 text-white text-sm backdrop-blur-lg sticky top-0 z-[5] px-[4%] flex items-center justify-between transition-all ease-linear duration-300 ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <div className='w-[64%] xs:w-[40%] sm:w-[24%] lg:w-[20%] xl:w-[15%] flex items-center justify-start'>
                    <Link href={"/"} className='w-fit flex items-center justify-start space-x-2 group cursor-pointer'>
                        <div className='w-8 aspect-square rounded-full overflow-hidden group-hover:scale-110 ease-in-out duration-200'>
                            <img src='/profile.png' alt="Dp" className='w-full h-full' />
                        </div>
                        <p className='flex-1 w-full text-xs lg:text-sm tracking-wide'>Darshan Hosangadi</p>
                    </Link>
                </div>

                <div className='sm:w-[64%] lg:w-[60%] xl:w-[70%] h-full hidden sm:flex items-center justify-center space-x-[6%] lg:space-x-[4%] translate-y-[8%] translate-x-[-4%] lg:translate-x-0'>
                    {
                        NavLinks.map((link) => (
                            <Link 
                                href={`/${link}`}
                                key={link}
                                className='w-fit h-full capitalize group flex flex-col items-start justify-center space-y-1 lg:space-y-2 text-xs lg:text-sm'
                            >
                                <span>{link}</span>
                                <div className={`h-[1px] ${(currPathName === `/${link}`) ? "w-full bg-amber-400" : "w-0 group-hover:w-full bg-white/80"} ease-in duration-150`} />
                            </Link>
                        ))
                    }
                </div>

                <div className='w-[18%] h-fit hidden sm:flex items-center translate-x-[-4%] xl:translate-x-0 justify-start xl:justify-end translate-y-[8%] lg:pr-2'>
                    <div className='w-full lg:w-[98%] xl:w-[64%] h-fit relative group'>
                        <Button
                            buttonCls='!w-full py-2.5'
                            text="Let's Chat"
                        />
                        <div className='absolute top-0 left-0 w-full h-full scale-110 opacity-0 pointer-events-none group-hover:opacity-100 ease-in-out duration-200 bg-white/5 z-[0] blur-lg' />
                    </div>
                </div>

                <div className="flex sm:hidden items-center justify-end w-[20%] aspect-square">
                    <div 
                        className='w-[56%] aspect-square bg-black rounded-lg border border-gray-400/20 !relative flex items-center justify-center'
                        onClick={(e) => {
                            e.stopPropagation();
                            onSideBarToggleHandler();
                        }}
                    >
                        <div className='w-[80%] aspect-square flex items-center justify-center'>
                            <img src={`${SideBarIconUrl}/menu.png`} alt="Hamburger Menu" className={`${isSideBarOpened ? "scale-0" : "scale-70"} contrast-0 transition-all ease-in-out duration-200 w-full h-full object-contain`} />
                        </div>
                        <div className='w-full aspect-square flex items-center justify-center absolute top-0 left-0 z-[1]'>
                            <img src={`${SideBarIconUrl}/close.png`} alt="Close" className={`${!isSideBarOpened ? "scale-0" : "scale-70"} contrast-0 transition-all ease-in-out duration-200 w-[80%] aspect-square object-contain`} />
                        </div>
                    </div>
                </div>
            </section>

            <SideBar isActive={isSideBarOpened} onClose={onSideBarToggleHandler} />
        </React.Fragment>
    )
})

export default Navbar;