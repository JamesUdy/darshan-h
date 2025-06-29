import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';
import GroupLayout from '../components/GroupLayout';

export const metadata: Metadata = createMetadata("Travel");

const Travel = () => {
    return (
        <GroupLayout>
            Travel
        </GroupLayout>
    )
}

export default Travel;