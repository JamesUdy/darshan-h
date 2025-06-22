import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';

export const metadata: Metadata = createMetadata("Travel");

const Travel = () => {
    return (
        <main>Travel</main>
    )
}

export default Travel;