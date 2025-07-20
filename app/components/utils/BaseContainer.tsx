import React, { memo, ReactNode } from 'react';

interface BaseContainerProps {
    containerClass: string;
    children: ReactNode;
};

const BaseContainer = memo(({ containerClass, children }: BaseContainerProps) => {
    return (
        <section className={`${containerClass} hover:-rotate-1 transition-all duration-200 ease-in-out cursor-pointer flex items-center justify-center bg-black border border-gray-400/20 rounded-lg`}>
            {children}
        </section>
    )
})

export default BaseContainer;