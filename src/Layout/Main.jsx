import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import BG from '../BG';
import Contact from '../components/Contact';
import AnimatedCursor from 'react-animated-cursor';

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
            <AnimatedCursor 
    clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    innerSize={8}
    outerSize={35}
    innerScale={1}
    outerScale={2}
    outerAlpha={0}
    hasBlendMode={true}
    innerStyle={dark?{
      backgroundColor: '#888'
    }:{
        backgroundColor: '#333'
      }}
    outerStyle={{
      border: '3px solid #333'
    }}>
            
            </AnimatedCursor>
        </div>
    );
};

export default Main;