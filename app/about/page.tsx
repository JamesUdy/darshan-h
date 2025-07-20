import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';
import GroupLayout from '../components/GroupLayout';
import MountAnimator from '../components/utils/MountAnimator';
import Image from 'next/image';

export const metadata: Metadata = createMetadata("About");

const About = () => {
    return (
        <GroupLayout>
            <div className='w-full h-fit flex items-center justify-center'>
                <MountAnimator motionKey='about'>
                    <div className='w-[92%] h-[124vh] sm:h-[64vh] bg-black border border-gray-400/20 rounded-lg p-[6%] sm:p-[2.4%] flex flex-col items-start space-y-[2%] justify-between'>
                        <p className='font-mono uppercase text-white/40 text-[10px]'>About Me</p>
                        <div className='w-full h-[98%] flex flex-col sm:flex-row items-start xl:items-center justify-start translate-y-[6%] sm:translate-y-0 space-y-[5%] sm:space-x-[4%]'>
                            <div className='w-full sm:w-[40%] xl:w-[28%] h-[44%] sm:h-[90%] rounded-md overflow-hidden'>
                                <img
                                    src="/profile.png"
                                    width="40"
                                    height="40"
                                    alt='Profile'
                                    loading='lazy'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <p className='w-full sm:w-[52%] xl:w-[64%] h-[44%] sm:h-2/3 flex items-start xl:items-center justify-start !text-justify text-white/80 tracking-wide font-medium  text-xs lg:text-sm xl:text-md'>
                                Hi there 👋, <br />  <br />
                                I’m Lorenzo Bocchi, a Freelance Digital Designer, Developer, and Design System Specialist based in sunny Sydney, Australia.  <br /> <br />

                                ‍With over 15 years in the game, I help startups and tech companies design, build, and scale digital experiences that feel as good as they look. My work spans early-stage startups to enterprise platforms, across industries and time zones —from the US to Europe, the Middle East, and Australia.
                                Along the way, I’ve learned how to design with empathy for different markets, cultures, and user needs.  <br /> <br />
                                
                                When I’m not deep in Figma or tweaking animations in code, you’ll find me exploring Australia on my adventure motorbike, travelling with my girlfriend or solo, taking black & white photos with my iPhone 16 Pro, experimenting with new recipes (often vegan), or playing the drums — poorly, but with passion.
                            </p>
                        </div>
                    </div>
                </MountAnimator>
            </div>
        </GroupLayout>
    )
}

export default About;
