import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';
import GroupLayout from '../components/GroupLayout';

export const metadata: Metadata = createMetadata("Tools");

const Tools = () => {
    return (
        <GroupLayout>
            Tools
        </GroupLayout>
    )
}

export default Tools;