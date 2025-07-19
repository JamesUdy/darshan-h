'use client';

import { usePathname } from 'next/navigation';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { HeroContent } from '../constants';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
};

const Hero = memo(() => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const currPathName = usePathname();

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
        <section className='w-full h-[98vh] flex flex-col items-center justify-center relative overflow-hidden'>
            <div className='w-[90%] xl:w-[80%] h-full flex flex-col items-center justify-center z-[1] space-y-4 translate-y-10'>
                <p className='w-full text-white/40 tracking-wide uppercase text-[10px] text-center'>{memorizedHeroContent.header}</p>
                <div className='!w-[90%] xl:w-full !text-[128px] font-semibold text-center tracking-tight leading-[7.2rem] text-white hidden'>{memorizedHeroContent.contentArr[0]} <div className='inline-block w-fit px-6 py-2 bg-black border relative top-[4%] border-white/10 rounded-full'><img src={memorizedHeroContent.icons[0]} className='w-[5.6rem] aspect-square' /></div>{memorizedHeroContent.contentArr[1]}  <div className='inline-block w-fit px-6 py-2 bg-black border relative top-[4%] border-white/10 rounded-full'><img src={memorizedHeroContent.icons[1]} className='w-[5.6rem] aspect-square' /></div>{memorizedHeroContent.contentArr[2]}  <div className='inline-block w-fit px-6 py-2 bg-black border relative top-[4%] border-white/10 rounded-full'><img src={memorizedHeroContent.icons[2]} className='w-[5.6rem] aspect-square' /></div>{memorizedHeroContent.contentArr[3]} </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isMounted ? 'show' : 'hidden'}
                    className="!w-[90%] xl:w-full !text-[128px] font-semibold !scale-95 text-center tracking-tight leading-[6.8rem] text-white flex flex-wrap break-words justify-center gap-4"
                    >
                    <motion.span variants={itemVariants}><span className='inline-block'>{memorizedHeroContent.contentArr[0]}{' '}</span></motion.span>
                    <motion.span variants={itemVariants}>
                        <span className="inline-block w-fit px-6 py-2 bg-black border relative top-[4%] border-white/10 rounded-full">
                        <img src={memorizedHeroContent.icons[0]} className="w-[5.6rem] aspect-square" />
                        </span>
                    </motion.span>
                    <motion.span variants={itemVariants}><span className='inline-block'>{memorizedHeroContent.contentArr[1]}{' '}</span></motion.span>
                    <motion.span variants={itemVariants}>
                        <span className="inline-block w-fit px-6 py-2 bg-black border relative top-[4%] border-white/10 rounded-full">
                        <img src={memorizedHeroContent.icons[1]} className="w-[5.6rem] aspect-square" />
                        </span>
                    </motion.span>
                    <motion.span variants={itemVariants}><span className='inline-block'>{memorizedHeroContent.contentArr[2]}{' '}</span></motion.span>
                    <motion.span variants={itemVariants}>
                        <span className="inline-block w-fit px-6 py-2 bg-black border relative top-[4%] border-white/10 rounded-full">
                        <img src={memorizedHeroContent.icons[2]} className="w-[5.6rem] aspect-square" />
                        </span>
                    </motion.span>
                    <motion.span variants={itemVariants}><span className='inline-block'>{memorizedHeroContent.contentArr[3]}{' '}</span></motion.span>
                </motion.div>
            </div>
            <div className={`absolute top-[12%] left-0 w-full h-full flex items-center justify-center text-[164px] ${isMounted ? "scale-[1.8]" : "scale-[3.2]"} ease-in-out duration-400 whitespace-nowrap tracking-wider font-medium text-[#242424]/80 z-[0]`}>{memorizedHeroContent.backdropText}</div>
        </section>
    )
})

export default Hero;