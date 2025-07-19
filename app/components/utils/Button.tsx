import React from 'react'

interface ButtonProps {
    buttonCls: string;
    text: string;
    iconUrl?: string;
    isCopy?: boolean;
};

const Button = ({ buttonCls, text, iconUrl, isCopy = false }: ButtonProps) => {
    return (
        <section
            className={`w-full ${buttonCls} flex-shrink-0 bg-black border border-white/10 rounded-md flex items-center justify-center cursor-pointer space-x-2 ease-in-out group hover:scale-110 duration-200 relative z-[1]`}
        >   
            {
                iconUrl && <img src={iconUrl} alt={text} className='w-4 aspect-square object-contain contrast-0' />
            }
            <span className='uppercase text-[10px] lg:text-xs font-mono font-semibold'>{text}</span>
            <div className='w-2.5 aspect-square flex flex-col overflow-hidden z-[1]'>
                {
                    isCopy ? (
                        <React.Fragment>
                            <div className='group-hover:-translate-y-[120%] ease-in-out duration-200'><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/67f8971aa0b7178b9d25fe06/682276423d162d881fec476f_copy-03.svg" className="w-full"/></div>
                            <div className='group-hover:-translate-y-[110%] ease-in-out duration-200'><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/67f8971aa0b7178b9d25fe06/682276423d162d881fec476f_copy-03.svg" className="w-full"/></div>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <div className='group-hover:-translate-y-[120%] ease-in-out duration-200'><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/67f8971aa0b7178b9d25fe06/67f89eae8e35552b13d78bf2_arrow-narrow-up-right.svg" className="w-full scale-110"/></div>
                            <div className='group-hover:-translate-y-[110%] ease-in-out duration-200'><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/67f8971aa0b7178b9d25fe06/67f89eae8e35552b13d78bf2_arrow-narrow-up-right.svg" className="w-full scale-110"/></div>
                        </React.Fragment>
                    )
                }
            </div>
        </section>
    )
}

export default Button;