'use client';

import { usePathname } from 'next/navigation';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { HeroContent } from '../constants';
import NotFound from '../not-found';

const Hero = memo(() => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const currPathName = usePathname();
    console.log("currPathName", currPathName);

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 100);

        return () => {
            setIsMounted(false);
        };
    }, [currPathName]);

    const memorizedHeroContent: (HeroContentType & { contentArr: string[] }) | null = useMemo(() => {
        const path: HeroContentVariantType = currPathName === "/" ? "default" as HeroContentVariantType : currPathName.slice(1) as HeroContentVariantType;
        const data: HeroContentType = HeroContent[path];
        if(!data) return null;
        const contentArr: string[] = data.content.split("$");
        return {
            ...data,
            contentArr,
        };
    }, [currPathName]);

    if(!memorizedHeroContent) return null;

    return (
        <section className='w-full h-[86vh] flex flex-col items-center justify-center relative overflow-hidden'>
            <div className='w-[90%] xl:w-[72%] h-full flex flex-col items-center justify-center z-[1] space-y-4 translate-y-10'>
                <p className='w-full text-white/60 tracking-wide uppercase text-[10px] text-center'>{memorizedHeroContent.header}</p>
                <p className='w-full !text-[128px] font-normal text-center tracking-tight leading-[7.2rem] text-white'>{memorizedHeroContent.contentArr[0]} <div className='inline-block w-fit px-4 py-2 bg-black border relative top-[4%] border-white/10 rounded-full'><img src={memorizedHeroContent.icons[0]} className='w-[5.6rem] aspect-square' /></div>{memorizedHeroContent.contentArr[1]}  <div className='inline-block w-fit px-4 py-2 bg-black border relative top-[4%] border-white/10 rounded-full'><img src={memorizedHeroContent.icons[1]} className='w-[5.6rem] aspect-square' /></div>{memorizedHeroContent.contentArr[2]}  <div className='inline-block w-fit px-4 py-2 bg-black border relative top-[4%] border-white/10 rounded-full'><img src={memorizedHeroContent.icons[2]} className='w-[5.6rem] aspect-square' /></div>{memorizedHeroContent.contentArr[3]} </p>
            </div>
            <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-[164px] ${isMounted ? "scale-[1.8]" : "scale-[3.2]"} ease-in-out duration-400 whitespace-nowrap tracking-wider font-medium text-[#242424]/80 z-[0]`}>{memorizedHeroContent.backdropText}</div>
        </section>
    )
})

export default Hero;