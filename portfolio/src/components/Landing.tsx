import React from 'react';
import Hero from './Hero';
import Services from './Services';
import TechStack from './TechStack';
import Process from './Process';
import Contact from './Contact';
import Footer from './Footer';

const Landing: React.FC = () => {
    return (
        <div className="home-page">
            <Hero />
            <Services />
            <TechStack />
            <Process />
            <Contact />
            <Footer />
        </div>
    );
};

export default Landing;
