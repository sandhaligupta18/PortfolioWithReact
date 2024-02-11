import React from 'react'
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { TbFileTypeHtml } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

function Skills() {
  return (
    <>
       <div className='bg-[#1F242D]'>
       <p className='text-white text-5xl  font-serif flex justify-center pt-24' > My <span className='text-rose-600'>Skills</span></p>

     <div className='flex flex-wrap gap-8 justify-center items-center  mt-16 '>
        <div className='h-[22rem] w-[22rem]  rounded-3xl border-2 transition ease-in delay  hover:scale-105 border-rose-600 bg-[#323946]  hover:border-none'>
    <div className='p-8 ml-28'>
    <TbFileTypeHtml className='h-16 w-16 text-rose-600' />
    <p className='text-white text-2xl mt-2 font-serif font-bold'>HTML</p>

    </div>
    <p className='pl-6 pr-6 font-serif text-white text-sm '>HTML, or Hypertext Markup Language , is a markup language for the web that defines the structure of web pages. It is a text-based approach to describing how content contained within an HTML file is structured. It is often assisted by technologies such as Cascading Style Sheets and scripting lnguages like JavaScript.</p>

        </div>
        <div className='h-[22rem] w-[22rem] rounded-3xl border-2 transition ease-in delay-75 hover:scale-105 border-rose-600 bg-[#323946]  hover:border-none'>
            <div className='p-8 ml-28'><IoLogoCss3 className='h-16 w-16 text-rose-600' />
            <p className='text-white text-2xl mt-2 font-serif  font-bold'>CSS</p></div>
          
<p className='pl-6 pr-6 font-serif  text-white text-sm '>Cascading Style Sheets is a style sheet language used for describing written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web , alongside HTML and JavaScript. It allows one to adapt the presentation to different types of devices like printers,large and small screen. 
.

</p>

        </div>
        
        <div className='h-[22rem] w-[22rem] rounded-3xl border-2 border-rose-600 bg-[#323946] transition ease-in delay-75 hover:scale-105 hover:border-none' >
            <div className='p-8 ml-28'>    <TbBrandJavascript className='h-16 w-16 text-rose-600' />
            <p className='text-white text-2xl mt-2 font-serif mr-8  font-bold'>Javascript</p>
</div>
<p className='pl-6 pr-6 font-serif  text-white text-sm '>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.</p>



        </div>
        <div className='h-[22rem] w-[22rem] md:h-[20rem] mb-8 md:w-[34rem] rounded-3xl border-2 border-rose-600 bg-[#323946] transition ease-in delay-75 hover:scale-105 hover:border-none'>
            <div className='flex  justify-center items-center flex-col p-8 '><FaJava className='h-16 w-16 text-rose-600' />
            <p className='text-white text-2xl mt-2 font-serif  font-bold'>Java</p>
</div>

<p className='pl-6 pr-6 font-serif  text-white text-sm '>Java is a widely used programming language expressly designed for use in the distributed environment of the internet. It is the most popular programming language for Android smartphone applications and is also among the most favored for the development of edge devices and the internet of things.</p>
        </div>
        <div className='h-[22rem] w-[22rem] md:h-[20rem]  md:mb-8 md:w-[34rem] rounded-3xl border-2 border-rose-600 bg-[#323946] transition ease-in delay-75 hover:scale-105 hover:border-none'>
            <div className='flex  justify-center items-center flex-col p-8 '
            ><BiLogoPostgresql className='h-16 w-16 text-rose-600' />
              <p className='text-white text-2xl mt-2 font-serif font-bold'>SQL</p>
</div>

<p className='pl-6 pr-6 font-serif   text-white text-sm '>A database is a separate application that stores a collection of data. Each database has one or more distinct APIs for creating, accessing, managing, searching the data it holds. Other kinds of data stores can also be used, such as files on the file system or large hash tables in memory but data fetching and writing would not be so fast and easy with those type of systems.</p>
        </div>
     
     </div>

       </div>
      

    </>
  )
}

export default Skills
