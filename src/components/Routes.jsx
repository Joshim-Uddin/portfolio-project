import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import AboutMe from './AboutMe';
import Home from './Home';

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '#aboutme',
                element: <AboutMe />
            }
        ]
    },
        
])
const Routes = () => {
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};

export default Routes;