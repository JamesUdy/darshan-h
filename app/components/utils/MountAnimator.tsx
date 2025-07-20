'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { memo, ReactNode, useEffect, useRef, useState } from 'react';

interface MountAnimatorProps {
    children: ReactNode;
    motionKey: string;
};

const MountAnimator = memo(({ children, motionKey }: MountAnimatorProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const viewportBottom = window.innerHeight;

            if (viewportBottom >= rect.top) {
                setShow(true); 
            } else {
                setShow(false);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={ref} className="w-full h-full flex items-center justify-center">
                <AnimatePresence>
                    {show && (
                        <motion.div
                            key={motionKey}
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 200 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="w-full h-full flex items-center justify-center"
                        >
                            { children }
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
    );
})

export default MountAnimator;