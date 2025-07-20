import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';
import GroupLayout from '../components/GroupLayout';
import BaseContainer from '../components/utils/BaseContainer';
import MountAnimator from '../components/utils/MountAnimator';

export const metadata: Metadata = createMetadata("Tools");

const Tools = () => {
    return (
        <GroupLayout>
            <section className='w-full h-fit flex flex-col items-center justify-start space-y-[20vh]'>
                {/* clients */}
                <div className='w-[92%] h-fit flex flex-col items-start space-y-[4vh]'>
                    <div className='w-full flex items-center justify-between text-xs font-medium'>
                        <span className='text-white'>Clients</span>
                        <span className='uppercase text-white/40 text-[10px]'>From Startups to Enterprise</span>
                    </div>
                    <div className='w-full h-fit grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs'>
                        {
                            Array.from({ length: 8 }).map((_, index) => (
                                <div key={index} className={`w-full h-[14vh] col-span-1 flex items-center justify-center`}>
                                    <MountAnimator motionKey={`Skill_${index}`}>
                                        <BaseContainer
                                            containerClass='w-full h-full'
                                        >
                                        <div className='w-full h-full flex items-center justify-center'>Skill {index + 1}</div>
                                        </BaseContainer>
                                    </MountAnimator>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* clients */}
                <div className='w-[92%] h-fit flex flex-col items-start space-y-[4vh]'>
                    <div className='w-full flex items-center justify-between text-xs font-medium'>
                        <span className='text-white'>Clients</span>
                        <span className='uppercase text-white/40 text-[10px]'>From Startups to Enterprise</span>
                    </div>
                    <div className='w-full h-fit grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs'>
                    {
                            Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className={`w-full h-[14vh] col-span-1 flex items-center justify-center`}>
                                    <MountAnimator motionKey={`Skill_${index}`}>
                                        <BaseContainer
                                            containerClass='w-full h-full'
                                        >
                                        <div className='w-full h-full flex items-center justify-center'>Skill {index + 1}</div>
                                        </BaseContainer>
                                    </MountAnimator>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* clients */}
                <div className='w-[92%] h-fit flex flex-col items-start space-y-[4vh]'>
                    <div className='w-full flex items-center justify-between text-xs font-medium'>
                        <span className='text-white'>Clients</span>
                        <span className='uppercase text-white/40 text-[10px]'>From Startups to Enterprise</span>
                    </div>
                    <div className='w-full h-fit grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs'>
                    {
                            Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className={`w-full h-[14vh] col-span-1 flex items-center justify-center`}>
                                    <MountAnimator motionKey={`Skill_${index}`}>
                                        <BaseContainer
                                            containerClass='w-full h-full'
                                        >
                                        <div className='w-full h-full flex items-center justify-center'>Skill {index + 1}</div>
                                        </BaseContainer>
                                    </MountAnimator>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* clients */}
                <div className='w-[92%] h-fit flex flex-col items-start space-y-[4vh]'>
                    <div className='w-full flex items-center justify-between text-xs font-medium'>
                        <span className='text-white'>Clients</span>
                        <span className='uppercase text-white/40 text-[10px]'>From Startups to Enterprise</span>
                    </div>
                    <div className='w-full h-fit grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs'>
                    {
                            Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className={`w-full h-[14vh] col-span-1 flex items-center justify-center`}>
                                    <MountAnimator motionKey={`Skill_${index}`}>
                                        <BaseContainer
                                            containerClass='w-full h-full'
                                        >
                                        <div className='w-full h-full flex items-center justify-center'>Skill {index + 1}</div>
                                        </BaseContainer>
                                    </MountAnimator>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </GroupLayout>
    )
}

export default Tools;