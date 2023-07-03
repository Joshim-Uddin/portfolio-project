import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import BG from '../BG';
import Contact from '../components/Contact';

const Main = () => {
    const [dark, setDark] = useState();
    const modeSwitch=(status)=>{
       setDark(status);
    }
    return (
        <div className={dark?'relative z-10 text-white':'relative z-10 bg-white text-black'}>
            {dark&&<BG />}
            <Navbar modeSwitch={modeSwitch} />
            <Outlet />
            <Contact />
        </div>
    );
};

export default Main;