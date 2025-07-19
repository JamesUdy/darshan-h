'use client';

import { usePathname } from 'next/navigation';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { HeroContent } from '../constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
        <section className='w-full h-[72vh] sm:h-[88vh] lg:h-[98vh] flex flex-col items-center justify-center relative overflow-hidden'>
            <div className='w-[98%] xl:w-[80%] h-full flex flex-col items-center justify-center z-[1] translate-y-[10%] lg:translate-y-0 space-y-8 lg:space-y-4 xl:translate-y-10'>
                <p className='w-full text-white/40 tracking-wide uppercase text-[10px] text-center'>{memorizedHeroContent.header}</p>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isMounted ? 'show' : 'hidden'}
                    className="w-[94%] lg:w-[98%] xl:w-full !text-[40px] sm:!text-[64px] lg:!text-[96px] xl:!text-[128px] font-semibold !scale-95 text-center tracking-tight leading-[1.64rem] lg:leading-[4.8rem] xl:leading-[6.8rem] text-white flex flex-wrap justify-center gap-2 lg:gap-4"
                >
                    {memorizedHeroContent.contentArr.map((textBlock, blockIdx) => (
                        <React.Fragment key={`block_${blockIdx}`}>
                            {textBlock.split(" ").map((word, wordIdx) => (
                                <motion.span key={`word_${blockIdx}_${wordIdx}`} variants={itemVariants}>
                                    <span className="inline-block py-2">{word}</span>
                                </motion.span>
                            ))}
                            {memorizedHeroContent.icons[blockIdx] && (
                                <motion.span key={`icon_${blockIdx}`} variants={itemVariants}>
                                    <div className="inline-block scale-95 xl:scale-100 w-fit px-6 py-2 bg-black border relative top-[-12%] sm:top-[-24%] lg:top-[-6%] xl:top-[8%] border-white/10 rounded-full">
                                        <Image
                                            src={memorizedHeroContent.icons[blockIdx]}
                                            alt={`Icon ${blockIdx}`}
                                            className="!w-[2.4rem] sm:!w-[4.4rem] lg:!w-[5.6rem] !aspect-square scale-75"
                                        />
                                    </div>
                                </motion.span>
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
            <div className={`absolute top-[12%] lg:top-0 xl:top-[12%] left-0 w-full h-full flex items-center justify-center text-[72px] sm:text-[124px] lg:text-[164px] ${isMounted ? "scale-[1.8]" : "scale-[3.2]"} transition-all ease-in-out duration-300 whitespace-nowrap tracking-wider font-medium text-[#242424]/80 z-[0]`}>{memorizedHeroContent.backdropText}</div>
        </section>
    )
})

export default Hero;