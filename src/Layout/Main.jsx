import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Expertise from '../components/Expertise';
import Projects from '../components/Projects';
import App from '../BG';

const Main = () => {
    return (
        <div className='relative z-10 bg-black'>
            <App />
            <Navbar />
            <div>
        <Banner />
      <AboutMe />
      <Expertise />
      <Projects />
            </div>
            <Footer />
        </div>
    );
};

export default Main;