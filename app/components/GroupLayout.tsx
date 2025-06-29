import React from 'react'
import Navbar from './Navbar/Navbar';
import Hero from './Hero';
import Footer from './Footer/Footer';

const GroupLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Fragment>
            <Navbar />
        
            <main className="w-screen h-fit flex flex-col items-center justify-start space-y-6 -translate-y-[8vh]">
                <Hero />
                {children}
            </main>
            
            <Footer />
        </React.Fragment>
    )
}

export default GroupLayout;