import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import  Home from './components/Home/Home.jsx';
import Layout from './Layout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path=''  element={<Home />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


