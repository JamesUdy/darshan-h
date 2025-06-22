import { FooterLinks } from '@/app/constants';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <section className='w-screen h-[80vh] relative overflow-hidden flex items-center justify-center'>
            <div className='w-[92%] h-full flex flex-col items-center justify-center space-y-4 z-[1]'>
                <div className='w-full h-[86%] flex flex-col items-center justify-between bg-black border border-gray-400/20 rounded-lg p-[2.4%]'>
                    <div className='w-full flex items-center justify-between h-[10%]'>
                        <p className='w-fit text-white/40 uppercase text-[10px] font-semibold tracking-wide'>That's all folks!</p>
                        <div
                            className='w-fit py-2.5 px-4 flex-shrink-0 bg-black border border-white/10 rounded-md flex items-center justify-center cursor-pointer space-x-2  ease-in-out group hover:scale-110 duration-200 relative z-[1]'
                        >   
                            <img src="https://api.iconify.design/stash:envelope-light.svg" alt={"Email"} className='w-4 aspect-square object-contain contrast-0' />
                            <span className='uppercase !text-[10px]'>SmilingSkull.com</span>
                            <div className='w-2.5 aspect-square flex flex-col overflow-hidden z-[1]'>
                                <div className='group-hover:-translate-y-[120%] ease-in-out duration-200'><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/67f8971aa0b7178b9d25fe06/682276423d162d881fec476f_copy-03.svg" className="w-full"/></div>
                                <div className='group-hover:-translate-y-[110%] ease-in-out duration-200'><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/67f8971aa0b7178b9d25fe06/682276423d162d881fec476f_copy-03.svg" className="w-full"/></div>
                                </div>
                            </div>
                    </div>
                    <div className='w-full h-[80%] flex flex-col items-start justify-end space-y-[4%]'>
                        <p className='w-full text-white text-[64px] font-bold leading-[3.6rem]'>I craft digital<br />experiences<br />for humans</p>
                        <div className='w-full '>
                            <div className='w-2/3 flex items-center justify-start space-x-4'>
                                {
                                    FooterLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            className='w-fit py-2.5 px-4 flex-shrink-0 bg-black border border-white/10 rounded-md flex items-center justify-center cursor-pointer space-x-2  ease-in-out group hover:scale-110 duration-200 relative z-[1]'
                                            href={link.link}
                                        >   
                                            <img src={link.icon} alt={link.text} className='w-4 aspect-square object-contain contrast-0' />
                                            <span className='uppercase !text-[10px]'>{link.text}</span>
                                            <div className='w-3 aspect-square flex flex-col overflow-hidden z-[1]'>
                                                <div className='group-hover:-translate-y-[120%] ease-in-out duration-200'><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/67f8971aa0b7178b9d25fe06/67f89eae8e35552b13d78bf2_arrow-narrow-up-right.svg" className="w-full"/></div>
                                                <div className='group-hover:-translate-y-[110%] ease-in-out duration-200'><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/67f8971aa0b7178b9d25fe06/67f89eae8e35552b13d78bf2_arrow-narrow-up-right.svg" className="w-full"/></div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[14%] bg-black border border-gray-400/20 rounded-lg'>

                </div>
            </div>
            <div className='w-full h-full flex items-center justify-center absolute top-0 left-0 text-[240px] scale-[1.3] font-black text-[#242424] z-[0] translate-x-4'>ありがとう</div>
        </section>
    )
}

export default Footer;