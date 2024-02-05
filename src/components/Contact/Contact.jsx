import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';





function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_h5261nb', 'template_9zcl5be', form.current, '4UbFIIFr9jntGFp3E')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('E-mail sent!');
          }, (error) => {
              console.log(error.text);
          }
      );
  };


  return (
    <>
    <form className='bg-[#1F242D] ' ref={form} onSubmit={sendEmail}>
      <p className='text-white text-5xl  font-serif flex justify-center pt-24'>Contact <span className='text-rose-600'>Me!</span>  </p>
     <div className='ml-[20rem] mt-16 '>
  
      <div className='flex gap-5'>
      <input className='h-14 w-[22rem] p-2 bg-[#323946] rounded-lg shadow-slate-400 shadow-sm text-slate-300'   type="text" name="user_name" placeholder='Full Name' />
      <input className='h-14 w-[22rem] p-2 bg-[#323946] rounded-lg shadow-slate-400 shadow-sm text-slate-300'   type="email" name="user_email" placeholder='Email Address' />
      </div>
      <div className='flex gap-5 mt-6' >
        <input className='h-14 w-[22rem] p-2 bg-[#323946] rounded-lg shadow-slate-400 shadow-sm text-slate-300' name="user_mob" type="text" placeholder='Mobile no.' />
        <input className='h-14 w-[22rem] p-2 bg-[#323946] rounded-lg shadow-slate-400 shadow-sm text-slate-300' name="sub"   type="text" placeholder='Email Subject' />
      </div>
      
      <div className=' mt-6 '>
        <input className='h-[15rem] w-[45rem] p-2  mb-12 shadow-slate-400 shadow-sm bg-[#323946] rounded-lg text-slate-300' name="message" type="text" placeholder='Your Message' />
      </div>

      <button className='bg-rose-600 mb-12 shadow-rose-600 shadow-md h-10 w-40 ml-[16rem] rounded-3xl' type="submit">Submit</button> <button/>
     </div>
    
    </form>
      
    </>
  )
}

export default Contact
