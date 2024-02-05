import React from 'react'

function Qualification() {
  return (
    <>
      <div className='bg-[#323946]'  >
        <p className='text-white text-5xl  font-serif flex justify-center pt-24'> My <span className='text-rose-600'>Education</span></p>
        <div className='mt-28 ml-24   flex gap-5'>
            <div className='h-[14rem] w-[23rem]  bg-[#A5F59C] hover:bg-[#89F87D] text-rose-600 rounded-2xl    text-center '><p className='text-3xl font-serif mt-20 font-bold cursor-pointer'>B.Tech(CSE)</p><p className='text-xl font-serif'>Vidya College Of Engineering,Meerut</p></div>  
  <div className='h-[14rem] w-[23rem]  bg-[#BF8BF1] hover:bg-[#a558ec] text-center rounded-2xl text-rose-600'> <p className='text-3xl font-serif mt-20 font-bold cursor-pointer'>12th</p> <p className='text-xl font-serif'>B.B.S.S.M. Inter College,Meerut</p> </div>
            <div className='h-[14rem] mb-28 w-[23rem]  bg-[#FABB6F] hover:bg-[#F09F3B] text-center text-rose-600 rounded-2xl'> <p className='text-3xl font-serif mt-20 font-bold cursor-pointer'>10th</p> <p className='text-xl font-serif'>B.B.S.S.M. Inter College</p>  </div>
        
        </div>
    
      </div>

    </>
  )
}

export default Qualification
