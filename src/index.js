import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import  Home from './components/Home/Home.jsx';
import  About from './components/About/About.jsx';
import Layout from './Layout';
import Skills from './components/Skills/Skills.jsx';
import Achievments from './components/Achievments/Achievments.jsx';
import Qualification from './components/Qualification/Qualification.jsx';
import Contact from './components/Contact/Contact.jsx';
import Projects from './components/Projects/projects.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path=''  element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='skills' element={<Skills />} />
      <Route path='achievments' element={<Achievments />} />
      <Route path='qualification' element={<Qualification />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


