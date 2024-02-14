import React from 'react'
import { useState } from 'react';
import { Link } from "react-scroll";
import {  NavLink } from 'react-router-dom'
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { click } from '@testing-library/user-event/dist/click';

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
            <NavLink to="/"  className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}`}  > Home </NavLink>
        </li>
        <li>
            <Link to="about-me"  spy={true} smooth={true} offset={-30} duration={500} className={ ({isActive})=>`${isActive ? "text-rose-600" :"text-white"} `  }>About me</Link>
        </li>
        <li>
            <Link to="skills"  spy={true} smooth={true} offset={-30} duration={500} className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"} cursor-pointer` }  >Skills</Link>
        </li>
        <li>
            <Link to="portfolio" spy={true} smooth={true} offset={-30} duration={500} className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"} cursor-pointer` }>Projects</Link>
        </li>
        <li>
            <Link to="achievements" spy={true} smooth={true} offset={-30} duration={500} className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"} cursor-pointer` }>Achievments</Link>
        </li>
        <li>
            <Link to="qualification" spy={true} smooth={true} offset={-30} duration={500} className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"} cursor-pointer` }>Qualification</Link>
        </li>
        <li>
            <Link to="contact" spy={true} smooth={true} offset={-30} duration={500} className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"} cursor-pointer` } >Contact </Link>
        </li>
    </ul>
    
</div>
 <div className='bg-[#606163] md:hidden z-10  w-96 absolute'>
 {open? (
        <ul onClick={click} className='flex flex-col md:flex-row mt-96  justify-center items-center  md:ml-96 gap-10 text-white font-serif ' >
        <li>
            <NavLink to="/" className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}`}  > Home </NavLink>
        </li>
        <li>
            <Link to="about-me" spy={true} smooth={true} offset={-30} duration={500} className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}` }>About me</Link>
        </li>
        <li>
            <Link to="skills" spy={true} smooth={true} offset={-30} duration={500} className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}` }  >Skills</Link>
        </li>
        <li>
            <Link to="portfolio"spy={true} smooth={true} offset={-30} duration={500} className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}` }>Projects</Link>
        </li>
        <li>
            <Link to="achievments"spy={true} smooth={true} offset={-30} duration={500} className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}` }>Achievments</Link>
        </li>
        <li>
            <Link to="qualification"spy={true} smooth={true} offset={-30} duration={500} className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"}` }>Qualification</Link>
        </li>
        <li>
            <Link to="contact"spy={true} smooth={true} offset={-30} duration={500} className={({isActive})=>`${isActive ? "text-rose-600" :"text-white"} ` }>Contact</Link>
        </li>
    </ul>
    ): null }
    
 </div>
 <div className='' onClick={handleMenu}>
    {open == false ? <IoIosMenu className='h-14 w-10 text-slate-50 md:hidden ' /> :
    <RxCross2 className='h-14 w-10 text-slate-50 md:hidden  z-30 relative' />}
    </div>
      </div>
    </>
  )
}
export default Header
