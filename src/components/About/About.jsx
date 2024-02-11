import React from 'react'
import image from '../Assets/sandhali.jpg'
// import LaptopPic  from './Assets/LaptopPic.jpg';

function About() {
  return (
    <>
      <div className='bg-[#323946]' >
      <div className='text-white text-5xl  font-serif flex justify-center pt-20 md:pt-24' >  About <span className='text-rose-600'> Me</span>  </div>
      <div className=' flex flex-col md:flex-row gap-8'>
        <div className='mt-11 rounded-full ml-6 md:ml-16 bg-white'>  

        <img src={image} alt="" height={500}  width={600} className='' />
        </div>
        
        <div className='flex-row '>
        <div className='md:mt-32 mt-22 mx-7 md:mr-9 text-white font-serif'>
          <p> Hello there! I'm a Frontend Developer.I'm a self-motivating person and I learn from my past mistakes. I'm currently pursuing Bachelor of Technology in specialization of Computer Science and Engineering. I have done 7+ mini projects.I'm always punctual to my work and I have the quality of leadership and team management skill. </p>  </div>
          <div className='ml-28   flex md:flex-row flex-col gap-10 md:gap-20 mt-10'>
          
<div className='h-24 w-32 p-4  cursor-pointer transition duration-500 hover:scale-125  rounded-[50%] bg-[#1F242D] border-2 border-rose-600 font-bold text-white'>2+ <span className='text-rose-700'>Years Of Experience</span></div>
<div className='h-24 w-32 p-7 cursor-pointer transition duration-500 hover:scale-125 rounded-[50%] bg-[#1F242D] border-2 border-rose-600 font-bold text-white'>7+ <span className='text-rose-600'> Projects</span></div>
<div className='h-24 w-32 p-6 cursor-pointer transition duration-500 hover:scale-125  rounded-[50%] bg-[#1F242D] border-2 border-rose-600 font-bold text-white'>5+ <span className='text-rose-600'>Certificates</span></div>


        </div>
      </div>
      


      </div>
      <div >
        <button className='mt-9 hover:shadow-none ml-28 md:ml-24 h-10 mb-12 w-28 shadow-rose-600 shadow-lg rounded-[30px] font-serif font-bold bg-rose-600 text-slate-600'>Hire Me</button>
      </div>
    
      </div>
    </>
  )
}

export default About
              