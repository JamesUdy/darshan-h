'use client';

import { usePathname } from 'next/navigation';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { HeroContent } from '../constants';

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

    const memorizedHeroContent: HeroContentType & { contentArr: string[] } = useMemo(() => {
        const path: HeroContentVariantType = currPathName === "/" ? "default" as HeroContentVariantType : currPathName.slice(1) as HeroContentVariantType;
        const data: HeroContentType = HeroContent[path];
        const contentArr: string[] = data.content.split("$");
        return {
            ...data,
            contentArr,
        };
    }, [currPathName]);

    return (
        <section className='w-full h-[86vh] flex flex-col items-center justify-center relative overflow-hidden'>
            <div className='w-[80%] h-full flex flex-col items-center justify-center z-[1] space-y-4 translate-y-10'>
                <p className='w-full text-white/60 tracking-wide uppercase text-[10px] text-center'>{memorizedHeroContent.header}</p>
                <p className='w-[80%] text-[128px] font-semibold leading-[7.2rem]'>{memorizedHeroContent.contentArr[0]} <span className='w-fit px-4 py-2 bg-black border text-[72px] relative -top-[4%] border-white/10 rounded-full'>{memorizedHeroContent.icons[0]}</span>{memorizedHeroContent.contentArr[1]}  <span className='w-fit px-4 py-2 bg-black border text-[72px] relative -top-[4%] border-white/10 rounded-full'>{memorizedHeroContent.icons[1]}</span>{memorizedHeroContent.contentArr[2]}  <span className='w-fit px-4 py-2 bg-black border text-[72px] relative -top-[4%] border-white/10 rounded-full'>{memorizedHeroContent.icons[2]}</span>{memorizedHeroContent.contentArr[3]} </p>
            </div>
            <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-[164px] ${isMounted ? "scale-[1.8]" : "scale-[3.2]"} ease-in-out duration-400 whitespace-nowrap tracking-wider font-medium text-[#242424]/80 z-[0]`}>{memorizedHeroContent.backdropText}</div>
        </section>
    )
})

export default Hero;