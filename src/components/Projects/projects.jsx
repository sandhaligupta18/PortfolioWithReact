import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import proj1 from '../Assets/Todo.jpg';
import proj2 from '../Assets/Restraunt.png';
import proj3 from '../Assets/dumbbel.jpg';
import proj4 from '../Assets/product.jpg';
import proj5 from '../Assets/calculator.jpg';
import proj6 from '../Assets/amazon.jpg';
import { FaExternalLinkAlt } from "react-icons/fa";
import '../../Header.css';

function projects() {
  return (
    
    <>
          <section className="portfolio  bg-[#323946] z-20 " id="portfolio">
        <h2 className='text-white text-5xl  font-serif flex justify-center pt-24'> Latest <span className='text-rose-600' >Projects</span></h2>
        <div className="portfolio-container flex justify-center content-center flex-col flex-wrap md:flex-row">
            <div className="portfolio-box">
                <img src={proj5} alt="" />
                <div className="portfolio-layer">
                    <h4>Calculator</h4>
                    <p>A calculator is a device that perform airtmetic operations on numbers. Basic calculators can do
                        only addition,
                        subtraction,multiplication and division.
                    </p>
                    <Link to="https://sandhaligupta18.github.io/Calculator/"><FaExternalLinkAlt /></Link>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={proj2} alt="" />
                <div className="portfolio-layer">
                    <h4>Restraunt</h4>
                    <p>A restraunt is a business that prepare and serves food and drinks to customers.</p>
                    <Link to="https://sandhaligupta18.github.io/restraunt_website/"><FaExternalLinkAlt /></Link>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={proj1} alt="" />
                <div className="portfolio-layer">
                    <h4>ToDoList</h4>
                    <p>To-do lists offer a way to increase productivity, stopping you from forgetting things, helps
                        prioritise tasks, manage tasks effectively</p>
                    <Link to="https://sandhaligupta18.github.io/ToDoList/"><FaExternalLinkAlt /></Link>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={proj3} alt="" />
                <div className="portfolio-layer">
                    <h4>Fitness Gym</h4>
                    <p>From well-equipped gyms and exhilarating group classes to personalized training programs
                        Andwellness services,
                        we providea holistic approach to health and wellness. Join us!
                    </p>
                    <Link to="https://sandhaligupta18.github.io/GYM/"><FaExternalLinkAlt /></Link>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={proj4} alt="" />
                <div className="portfolio-layer">
                    <h4>Product Landing</h4>
               <p>A product landing page is a post-click page on a website designed specifically
                 to promote or sell 
                products or persuade visitors to convert to a product-related offer.</p>
                    <Link to="https://sandhaligupta18.github.io/product-landing/"><FaExternalLinkAlt /></Link>
                </div>
            </div>
            <div className="portfolio-box ">
                <img src={proj6} alt="" />
                <div className="portfolio-layer">
                    <h4>Amazon Clone</h4>
                    <p>An Amazon clone refers to a pre-built online platform that offers a comprehensive solution
                         for boosting e-commerce business in a smart manner.</p>
                    <Link to="https://sandhaligupta18.github.io/Amazon-clone/"><FaExternalLinkAlt /></Link>
                </div>
            </div>
        </div>
    </section>



        
    </>
  )
}

export default projects
