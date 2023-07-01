import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import App from '../App';
import AboutMe from './AboutMe';

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main />,
        children:[
            {
                path: '/',
                element: <App />
            },
            {
                path: '/aboutme',
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