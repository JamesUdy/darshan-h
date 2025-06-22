import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';

export const metadata: Metadata = createMetadata("Tools");

const Tools = () => {
    return (
        <main>Tools</main>
    )
}

export default Tools;