import { FooterLinks } from '@/app/constants';
import Link from 'next/link';
import React from 'react'
import Button from '../utils/Button';

const Footer = () => {
    return (
        <section className='w-screen h-[72vh] relative overflow-hidden flex items-center justify-center'>
            <div className='w-[92%] h-full flex flex-col items-center justify-center z-[1]'>
                <div className='w-full h-full flex flex-col items-center justify-between overflow-hidden bg-black border border-gray-400/20 rounded-lg p-[2.4%]'>
                    <div className='w-full flex items-center justify-between h-[10%]'>
                        <p className='w-fit text-white/40 uppercase text-[10px] font-semibold tracking-wide'>That's all folks!</p>
                        <Button
                            buttonCls='!w-fit py-2.5 px-4'
                            iconUrl="https://api.iconify.design/stash:envelope-light.svg"
                            text="SmilingSkull.com"
                            isCopy
                        />
                    </div>
                    <div className='w-full h-[80%] flex flex-col items-start justify-end space-y-[4%] relative'>
                        <p className='w-full text-white text-[64px] font-bold leading-[3.6rem]'>I craft digital<br />experiences<br />for humans</p>
                        <div className='w-full'>
                            <div className='w-2/3 flex items-center justify-start space-x-4'>
                                {
                                    FooterLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            className='w-fit'
                                            href={link.link}
                                        >   
                                            <Button
                                                buttonCls='w-fit py-2.5 px-4 font-semibold'
                                                iconUrl={link.icon}
                                                text={link.text}
                                            />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='w-[24%] aspect-square absolute bottom-[-4%] right-[-4%] z-[1]'>
                            <img src="/gifs/footer.gif" alt='Signature' className='w-full h-full object-contain scale-125' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex items-center justify-center absolute top-0 left-0 text-[240px] !scale-[1.36] font-black text-[#242424] z-[0] translate-x-4'>
                ありがとう</div>
        </section>
    )
}

export default Footer;