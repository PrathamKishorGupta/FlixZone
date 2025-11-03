import React from 'react'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {

  const appRouter = createBrowserRouter([
    {
        path: "/",               // in url on slash "/" you are in login page
        element: <Login/>
    },
    { 
        path: "/browse",         // in url on "/browse" you are in browse page
        element: <Browse/>
    }
  ])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;