import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface ButtonProps {
    buttonCls: string;
    text: string;
    iconUrl?: string | StaticImageData;
    isCopy?: boolean;
};

const BaseUrl = "/icons";

const Button = ({ buttonCls, text, iconUrl, isCopy = false }: ButtonProps) => {
    return (
        <section
            className={`w-full ${buttonCls} flex-shrink-0 bg-black border border-white/10 rounded-md flex items-center justify-center cursor-pointer space-x-2 ease-in-out group hover:scale-110 duration-200 relative z-[1]`}
        >   
            {
                iconUrl && <Image src={iconUrl} alt={text} width={16} height={16} className='!w-4 !aspect-square object-contain contrast-0' />
            }
            <span className='uppercase text-[10px] lg:text-xs font-mono font-semibold'>{text}</span>
            <div className='w-3 aspect-square flex flex-col overflow-hidden z-[1]'>
                {
                    isCopy ? (
                        <React.Fragment>
                            <div className='group-hover:-translate-y-[120%] ease-in-out duration-200 w-full aspect-square'><img loading="lazy" alt="" src={`${BaseUrl}/copy.png`} className="w-full aspect-square object-cover scale-110"/></div>
                            <div className='group-hover:-translate-y-[110%] ease-in-out duration-200 w-full aspect-square'><img loading="lazy" alt="" src={`${BaseUrl}/copy.png`} className="w-full aspect-square object-cover scale-110"/></div>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <div className='group-hover:-translate-y-[120%] ease-in-out duration-200 w-full aspect-square'><img loading="lazy" alt="" src={`${BaseUrl}/arrow.png`} className="w-full aspect-square object-cover scale-125 -rotate-45"/></div>
                            <div className='group-hover:-translate-y-[110%] ease-in-out duration-200 w-full aspect-square'><img loading="lazy" alt="" src={`${BaseUrl}/arrow.png`} className="w-full aspect-square object-cover scale-125 -rotate-45"/></div>
                        </React.Fragment>
                    )
                }
            </div>
        </section>
    )
}

export default Button;