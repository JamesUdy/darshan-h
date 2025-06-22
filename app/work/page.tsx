import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';

export const metadata: Metadata = createMetadata("Work");

const Work = () => {
    return (
        <section>Work</section>
    )
}

export default Work;