import React from 'react'
import cert1 from '../Assets/Screenshot (125).png';
import cert2 from '../Assets/Screenshot (126).png';
import cert3 from '../Assets/Screenshot (127).png';
import cert4 from '../Assets/Screenshot (129).png';
import cert7 from '../Assets/html.jpg';
import cert6 from '../Assets/techquiz.jpg';
import '../../Header.css';


function Achievments() {
  return (
    <>
      <div className='bg-[#1F242D] achieve'>
      <p className='text-white text-5xl  font-serif flex justify-center pt-24' > My <span className='text-rose-600'>Achievments</span></p>
      <div className='flex flex-wrap gap-8 ml-28 mt-16  '>
        <div className=' h-[16rem] w-[22rem]  rounded-xl border-4 border-rose-600 '>
            <img src={cert1}  alt=""  />
        </div>
      
        <div className=' h-[16rem] w-[22rem]  rounded-xl border-4  border-rose-600'>
        <img src={cert2}  alt="" />
        </div>
      
        <div className=' h-[16rem] w-[22rem]  rounded-xl border-4  border-rose-600'>
        <img src={cert3} alt="" />
        </div>

      
        <div className=' h-[16rem] w-[22rem]  rounded-xl border-4  border-rose-600'>
        <img src={cert4} alt="" />
        </div>
  
        <div className=' h-[16rem] w-[22rem]  rounded-xl border-4  border-rose-600'>
        <img src={cert7} alt="" />
        </div>
  
        <div className=' h-[16rem] w-[22rem]  rounded-xl border-4  border-rose-600'>
        <img src={cert6} alt="" />
        </div>
      </div> 

      </div>
    </>
  )
}

export default Achievments
