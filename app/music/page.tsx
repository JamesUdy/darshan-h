import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';

export const metadata: Metadata = createMetadata("Music");

const Music = () => {
    return (
        <section>Music</section>
    )
}

export default Music;