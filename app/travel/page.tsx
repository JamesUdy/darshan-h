import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';

export const metadata: Metadata = createMetadata("Travel");

const Travel = () => {
    return (
        <section>Travel</section>
    )
}

export default Travel;