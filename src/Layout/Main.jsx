import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import BG from '../BG';

const Main = () => {
    const [dark, setDark] = useState(false);
    const modeSwitch=(status)=>{
       setDark(status);
    }
    return (
        <div className={dark?'relative z-10 text-white':'relative z-10 bg-white text-black'}>
            {dark&&<BG />}
            <Navbar modeSwitch={modeSwitch} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;