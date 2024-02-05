import React from 'react'
import {  NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
      <div className='flex h-20 items-center justify-center'  style={{backgroundColor: "#1F242D"}}>
<div className='ml-18 text-2xl font-serif'>
    <p className='text-white  '>Port<span style={{color:"#FC104B"}}>folio</span></p>
</div>
<div >
    <ul className='flex  ml-96 gap-10 text-white font-serif' >
        <li>
            <NavLink to="/" className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}`  }  >Home </NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}` }>About me</NavLink>
        </li>
        <li>
            <NavLink to="/skills" className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}` }  >Skills</NavLink>
        </li>
        <li>
            <NavLink to="/projects" className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}` }>Projects</NavLink>
        </li>
        <li>
            <NavLink to="/achievments" className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}` }>Achievments</NavLink>
        </li>
        <li>
            <NavLink to="/qualification" className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}` }>Qualification</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}` }>Contact</NavLink>
        </li>
    </ul>
</div>

      </div>

    
    </>
  )
}

export default Header
