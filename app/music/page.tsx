import { Metadata } from 'next';
import React from 'react';
import { createMetadata } from '../lib/metadata';
import GroupLayout from '../components/GroupLayout';

export const metadata: Metadata = createMetadata("Music");

const Music = () => {
    return (
        <GroupLayout>
            Music
        </GroupLayout>
    )
}

export default Music;