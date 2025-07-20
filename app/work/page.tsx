import { Metadata } from 'next';
import React, { useMemo } from 'react';
import { createMetadata } from '../lib/metadata';
import GroupLayout from '../components/GroupLayout';
import MountAnimator from '../components/utils/MountAnimator';
import BaseContainer from '../components/utils/BaseContainer';

export const metadata: Metadata = createMetadata("Work");

const Work = () => {
    const memorizedWork = useMemo(() => {
        const works: {}[] = Array.from({ length: 11 });
        const pattern = [1, 2, 2, 1, 1, 2, 2, 1];
        const resultedWorks = works.map((_, i) => ({
            size: pattern[i % pattern.length]
        }));
    
        return resultedWorks;
    }, []);

    return (
        <GroupLayout>
            <section className='w-full h-fit flex flex-col items-center justify-start space-y-[20vh]'>
                {/* works */}
                <div className='w-[92%] grid grid-cols-5 place-content-center gap-4'>
                    {
                        memorizedWork.map((work, index) => (
                            <div key={index} className={`${work.size === 2 ? "col-span-5 sm:col-span-3" : "col-span-5 sm:col-span-2"} h-[64vh] flex items-center justify-center`}>
                                <MountAnimator motionKey={`work_${index}`}>
                                    <BaseContainer
                                        containerClass='w-full h-full'
                                    >
                                    <div className='w-full h-full flex items-center justify-center'>Work {index + 1}</div>
                                    </BaseContainer>
                                </MountAnimator>
                            </div>
                        ))
                    }
                </div>
                {/* <MountAnimator motionKey='work'>
                    <div className='w-[92%] grid grid-cols-5 place-content-center gap-4'>
                        {
                            memorizedWork.map((work, index) => (
                                <div key={index} className={`${work.size === 2 ? "col-span-3" : "col-span-2"} hover:-rotate-1 transition-all duration-200 ease-in-out cursor-pointer h-[64vh] bg-black border border-gray-400/20 rounded-lg flex items-center justify-center`}>
                                    Work {index + 1}
                                </div>
                            ))
                        }
                    </div>
                </MountAnimator> */}

                {/* clients */}
                <div className='w-[92%] h-fit flex flex-col items-start space-y-[4vh]'>
                    <div className='w-full flex items-center justify-between text-xs font-medium'>
                        <span className='text-white'>Clients</span>
                        <span className='uppercase text-white/40 text-[10px]'>From Startups to Enterprise</span>
                    </div>
                    <div className='w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs'>
                        {
                            Array.from({ length: 16 }).map((_, index) => (
                                <div key={index} className={`w-full h-[20vh] col-span-1 flex items-center justify-center`}>
                                    <MountAnimator motionKey={`client_${index}`}>
                                        <BaseContainer
                                            containerClass='w-full h-full'
                                        >
                                        <div className='w-full h-full flex items-center justify-center'>Client {index + 1}</div>
                                        </BaseContainer>
                                    </MountAnimator>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* musics */}
                <div className='w-[92%] h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className={`col-span-1 w-full h-[24vh] lg:h-[32vh] flex items-center justify-center`}>
                                <MountAnimator motionKey={`music_${index}`}>
                                    <BaseContainer
                                        containerClass='w-full h-full'
                                    >
                                    <div className='w-full h-full flex items-center justify-center'>Music {index + 1}</div>
                                    </BaseContainer>
                                </MountAnimator>
                            </div>
                        ))
                    }
                </div>
            </section>
        </GroupLayout>
    )
}

export default Work;