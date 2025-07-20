import { Metadata } from 'next';
import React, { useMemo } from 'react';
import { createMetadata } from '../lib/metadata';
import GroupLayout from '../components/GroupLayout';
import MountAnimator from '../components/utils/MountAnimator';

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
            <section className='w-full h-fit flex items-center justify-center'>
                <div className='w-[92%] grid grid-cols-5 place-content-center gap-4'>
                    {
                        memorizedWork.map((work, index) => (
                            <div key={index} className={`${work.size === 2 ? "col-span-5 sm:col-span-3" : "col-span-5 sm:col-span-2"} h-[64vh] flex items-center justify-center`}>
                                <MountAnimator motionKey={`work_${index}`}>
                                    <div className='w-full h-full hover:-rotate-1 transition-all duration-200 ease-in-out cursor-pointer bg-black border border-gray-400/20 rounded-lg  flex items-center justify-center'>Work {index + 1}</div>
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
            </section>
        </GroupLayout>
    )
}

export default Work;