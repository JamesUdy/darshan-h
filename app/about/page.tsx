import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';

export const metadata: Metadata = createMetadata("About");

const About = () => {
    return (
        <section>About</section>
    )
}

export default About;