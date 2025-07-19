'use client';

import { NavLinks } from '@/app/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Button from '../utils/Button';

const Navbar = () => {
    const currPathName = usePathname();
    
    return (
        <section className='w-screen h-[12vh] text-white text-sm bg-transparent backdrop-blur-lg sticky top-0 z-[5] px-[4%] flex items-center justify-between'>
            <Link href={"/"} className='w-[20%] xl:w-[15%] flex items-center justify-start'>
                <div className='w-fit flex items-center justify-start space-x-2 group cursor-pointer'>
                    <div className='w-8 aspect-square rounded-full overflow-hidden group-hover:scale-110 ease-in-out duration-200'>
                        <img src='/profile.png' alt="Dp" className='w-full h-full' />
                    </div>
                    <p className='flex-1 w-full tracking-wide'>Darshan Hosangadi</p>
                </div>
            </Link>

            <div className='w-[60%] xl:w-[70%] h-full flex items-center justify-center space-x-[4%]'>
                {
                    NavLinks.map((link) => (
                        <Link 
                            href={`/${link}`}
                            key={link}
                            className='w-fit capitalize group flex flex-col items-start space-y-2'
                        >
                            <span>{link}</span>
                            <div className={`h-[1px] ${(currPathName === `/${link}`) ? "w-full bg-amber-400" : "w-0 group-hover:w-full bg-white/80"} ease-in duration-150`} />
                        </Link>
                    ))
                }
            </div>

            <div className='w-[15%] h-fit flex items-center justify-end pr-2'>
                <div className='w-[80%] xl:w-[64%] h-fit relative group'>
                    <Button
                        buttonCls='!w-full py-2.5'
                        text="Let's Chat"
                    />
                    <div className='absolute top-0 left-0 w-full h-full scale-110 opacity-0 pointer-events-none group-hover:opacity-100 ease-in-out duration-200 bg-white/5 z-[0] blur-lg' />
                </div>
            </div>
        </section>
    )
}

export default Navbar;