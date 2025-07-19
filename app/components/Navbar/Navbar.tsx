'use client';

import { NavLinks } from '@/app/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { memo, useEffect, useRef, useState } from 'react';
import Button from '../utils/Button';

const Navbar = memo(() => {
    const currPathName = usePathname();
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);
    const threshold = 80;

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
        <section className={`w-screen h-[12vh] !bg-[rgb(15,15,15)]/20 text-white text-sm backdrop-blur-lg sticky top-0 z-[5] px-[4%] flex items-center justify-between transition-all ease-linear duration-300 ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className='w-[24%] lg:w-[20%] xl:w-[15%] flex items-center justify-start'>
                <Link href={"/"} className='w-fit flex items-center justify-start space-x-2 group cursor-pointer'>
                    <div className='w-8 aspect-square rounded-full overflow-hidden group-hover:scale-110 ease-in-out duration-200'>
                        <img src='/profile.png' alt="Dp" className='w-full h-full' />
                    </div>
                    <p className='flex-1 w-full text-xs lg:text-sm tracking-wide'>Darshan Hosangadi</p>
                </Link>
            </div>

            <div className='w-[64%] lg:w-[60%] xl:w-[70%] h-full flex items-center justify-center space-x-[6%] lg:space-x-[4%] translate-y-[8%] translate-x-[-4%] lg:translate-x-0'>
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

            <div className='w-[18%] h-fit flex items-center translate-x-[-4%] xl:translate-x-0 justify-start xl:justify-end translate-y-[8%] lg:pr-2'>
                <div className='w-full lg:w-[98%] xl:w-[64%] h-fit relative group'>
                    <Button
                        buttonCls='!w-full py-2.5'
                        text="Let's Chat"
                    />
                    <div className='absolute top-0 left-0 w-full h-full scale-110 opacity-0 pointer-events-none group-hover:opacity-100 ease-in-out duration-200 bg-white/5 z-[0] blur-lg' />
                </div>
            </div>
        </section>
    )
})

export default Navbar;