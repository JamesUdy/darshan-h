import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';

export const metadata: Metadata = createMetadata("Music");

const Music = () => {
    return (
        <main>Music</main>
    )
}

export default Music;