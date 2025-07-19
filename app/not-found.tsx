'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./components/utils/Button";

export default function NotFound() {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 100);

        return () => {
            setIsMounted(false);
        };
    }, []);
    
    return (
        <section className="w-full h-[80vh] flex items-center justify-center !bg-[rgb(15,15,15)]">
            <div className="w-full h-[60%] relative">
                <div className="w-full h-full flex flex-col items-center justify-center space-y-1 text-white relative z-[1]">
                    <p className="text-[128px] font-extrabold tracking-wider">404</p>
                    <p className="text-white/40 -translate-y-[60%]">Oh no! The page you're looking for it's not here {":("}</p>
                    <Link
                        className='w-fit'
                        href="/"
                    >   
                        <Button
                            buttonCls='w-fit py-2.5 px-4 font-semibold'
                            iconUrl={"/app/assets/hero/swag.png"}
                            text="Go Home"
                        />
                    </Link>
                </div>
                <div className={`absolute top-[12%] left-0 w-full h-full flex items-center justify-center text-[164px] ${isMounted ? "scale-[1.8]" : "scale-[3.2]"} ease-in-out duration-400 whitespace-nowrap tracking-wider font-medium text-[#242424]/80 z-[0]`}>デザイン</div>
            </div>
        </section>
    );
}
