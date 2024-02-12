import React from 'react'
import { useState } from 'react';
import {  NavLink } from 'react-router-dom'
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function Header() {
    const [open , setOpen] = useState(false);
    const handleMenu=()=>{
        console.log(open);
        setOpen((prev) => !prev);
    }
  return (
    <>
      <div className='flex h-20 items-center justify-around '  style={{backgroundColor: "#1F242D"}}>
<div className='flex ml-18 text-2xl font-serif'>
    <p className='text-white   '>Port<span style={{color:"#FC104B"}}>folio</span></p>
</div>
<div className='md:block hidden ' >
        <ul className='flex  md:flex-row    justify-center items-center  md:ml-96 gap-10 text-white font-serif ' >
        <li>
            <NavLink to="/" className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}`}  > Home </NavLink>
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
 <div className='bg-[#606163] md:hidden  z-10 w-96 absolute  '>
 {open? (
        <ul className='flex flex-col md:flex-row mt-96  justify-center items-center  md:ml-96 gap-10 text-white font-serif ' >
        <li>
            <NavLink to="/" className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}`}  > Home </NavLink>
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
            <NavLink to="/contact" className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"} ` }>Contact</NavLink>
        </li>
    </ul>
    ): null }
 </div>


 <div className='' onClick={handleMenu}>

    {open == false ? <IoIosMenu className='h-14 w-10 text-slate-50 md:hidden ' /> :
    <RxCross2 className='h-14 w-10 text-slate-50 md:hidden   relative' />}
    </div>

      </div>

    
    </>
  )
}

export default Header
