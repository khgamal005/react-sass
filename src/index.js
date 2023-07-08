import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Main from './components/page/Main';
import  {Portfolio}  from './components/page/Portfolio';
import { Contact } from './components/page/Contact';
import { Resume } from './components/page/Resume';
import { Blog } from './components/page/Blog';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
   
    children: [
      { index: true, element: <Main/> },
      { path: "portfolio", element: <Portfolio/> },
      { path: "contact", element: <Contact/> },
      { path: "resume", element: <Resume/> },
      { path: "blog", element: <Blog/> },


    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  
      <RouterProvider router={router} />

);