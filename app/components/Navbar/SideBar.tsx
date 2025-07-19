import React, { memo } from 'react';

interface SideBarProps {
    isActive: boolean;
};

const SideBar = memo(({  }: SideBarProps) => {
    return (
        <section>SideBar</section>
    )
})

export default SideBar;