'use client';

import { FooterLinks } from '@/app/constants';
import Link from 'next/link';
import React, { memo, useCallback, useRef, useState } from 'react'
import Button from '../utils/Button';

const textToCopy = "SmilingSkull.com";

const Footer = memo(() => {
    const [isToolTipVisible, setIsToolTipVisible] = useState<boolean>(false);
    const isClickedRef = useRef<boolean>(false);

    const onClickHandler = useCallback(() => {
        navigator.clipboard.writeText(textToCopy)
        .then(() => {
            setIsToolTipVisible(true);
            setTimeout(() => {
                isClickedRef.current = false;
                setIsToolTipVisible(false);
            }, 1000);
        })
        .catch((err) => {
            console.error("Failed to copy text: ", err);
        });
    }, []);
    
    return (
        <section className='w-screen h-[90vh] sm:h-[64vh] xl:h-[72vh] relative overflow-hidden flex items-center justify-center'>
            <div className='w-[92%] h-full flex flex-col items-center justify-center z-[1]'>
                <div className='w-full h-full flex flex-col items-center justify-between overflow-hidden bg-black border border-gray-400/20 rounded-lg p-[6%] sm:p-[2.4%]'>
                    <div className='w-full flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0 h-[10%]'>
                        <p className='w-fit text-white/40 uppercase text-[10px] xs:text-xs sm:text-[8px] lg:text-[10px] font-medium tracking-wide'>That's all folks!</p>
                        <div 
                            className='!w-fit relative'
                            onClick={(e) => {
                                e.stopPropagation();
                                if(isClickedRef.current) return;
                                isClickedRef.current = true;
                                onClickHandler();
                            }}
                        >
                            <Button
                                buttonCls='!w-fit py-2.5 px-4'
                                iconUrl="https://api.iconify.design/stash:envelope-light.svg"
                                text={textToCopy}
                                isCopy
                            />

                            <div className={`w-[80%] h-[80%] bg-white absolute top-[16%] z-[2] hidden sm:flex rounded-lg pointer-events-none text-black items-center justify-center text-xs transition-all ease-in duration-200 scale-75 lg:scale-100 ${isToolTipVisible ? "left-[-72%] lg:left-[-90%] opacity-100" : "left-[10%] opacity-0"}`}>
                                Copied to clipboard!
                                <div className='h-1/2 bg-white aspect-square absolute right-[-2%] top-[24%] rounded-sm rotate-45'/>
                            </div>

                            <div className={`w-[80%] h-[80%] bg-white absolute top-[120%] z-[2] flex sm:hidden rounded-lg pointer-events-none text-black items-center justify-center text-xs transition-all ease-in duration-200 scale-75 lg:scale-100 ${isToolTipVisible ? "left-[10%] opacity-100" : "left-[110%] opacity-0"}`}>
                                Copied to clipboard!
                                <div className='h-1/2 bg-white aspect-square absolute left-[44%] top-[-10%] rounded-sm rotate-45'/>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[80%] flex flex-col items-start justify-end space-y-[6%] sm:space-y-[4%] relative'>
                        <p className='w-full text-white text-[40px] sm:text-[56px] lg:text-[64px] font-bold leading-[2.4rem] sm:leading-[3.2rem] lg:leading-[3.6rem]'>I craft digital<br />experiences {" "}<br className='hidden sm:inline-block' />for humans</p>
                        <div className='w-full'>
                            <div className='w-[80%] xl:w-2/3 flex flex-wrap sm:flex-row sm:items-center sm:justify-start gap-2 sm:space-x-2 lg:space-x-4'>
                                {
                                    FooterLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            className='w-[40%] sm:w-fit'
                                            href={link.link}
                                        >   
                                            <Button
                                                buttonCls='w-fit py-2.5 px-2 lg:px-4 font-semibold'
                                                iconUrl={link.icon}
                                                text={link.text}
                                            />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                        <div className={`w-[44%] sm:w-[24%] aspect-square relative sm:absolute sm:bottom-[-6%] sm:right-[-4%] z-[1] flex items-center justify-center`}>
                            <img src="/gifs/footer.gif" alt='Signature' className='w-[80%] sm:w-1/2 aspect-square object-cover sm:scale-75' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex items-center justify-center absolute top-0 left-0 text-[80px] sm:text-[140px] lg:text-[180px] xl:text-[240px] scale-[6.4] sm:!scale-[1.36] font-black text-[#242424] z-[0] sm:translate-x-4'>
                ありがとう</div>
        </section>
    )
})

export default Footer;