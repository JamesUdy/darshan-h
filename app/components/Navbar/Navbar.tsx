'use client';

import { NavLinks } from '@/app/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const currPathName = usePathname();
    
    return (
        <section className='w-screen h-[14vh] text-white text-sm bg-transparent backdrop-blur-lg sticky top-0 z-[5] px-[4%] flex items-center justify-between'>
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
                    <div className='w-full py-2.5 bg-black border border-white/10 rounded-md flex items-center justify-center cursor-pointer space-x-2 ease-in-out group hover:scale-110 duration-200 relative z-[1]'>
                        <span className='uppercase !text-[10px]'>Let's Chat</span>
                        <div className='w-3 aspect-square flex flex-col overflow-hidden z-[1]'>
                            <div className='group-hover:-translate-y-[120%] ease-in-out duration-200'><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/67f8971aa0b7178b9d25fe06/67f89eae8e35552b13d78bf2_arrow-narrow-up-right.svg" className="w-full"/></div>
                            <div className='group-hover:-translate-y-[110%] ease-in-out duration-200'><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/67f8971aa0b7178b9d25fe06/67f89eae8e35552b13d78bf2_arrow-narrow-up-right.svg" className="w-full"/></div>
                        </div>
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full scale-110 opacity-0 pointer-events-none group-hover:opacity-100 ease-in-out duration-200 bg-white/5 z-[0] blur-lg' />
                </div>
            </div>
        </section>
    )
}

export default Navbar;