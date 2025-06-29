import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';
import GroupLayout from '../components/GroupLayout';

export const metadata: Metadata = createMetadata("Work");

const Work = () => {
    return (
        <GroupLayout>
            About
        </GroupLayout>
    )
}

export default Work;