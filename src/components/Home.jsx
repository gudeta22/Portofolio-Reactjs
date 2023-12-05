import React from "react";
import HeroImage from "../assets/programmer.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import Typical from "react-typical";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gray-900 md:gap-8  lg:gap-8">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:px-8 md:space-x-12">
        <div className="flex flex-col justify-center h-full">
          <p className="text-xl sm:text-4xl text-yellow-600">
            Hi! 👋<br />
            <h2>My Name Is  Gudeta B.</h2>
           {/* <Typical 
              loop={5} 
             
              steps={[
                '',
              
                `My name is Gudeta  Buli`,
               
                '',
             
                "I'm a Software Engineer",
                            
                ]}
               /> */}
          </p>
        
          <p className="text-gray-400 py-5  ">
          Software Engineer with a history of working in the computer software industry. 
          Skilled in Javascript , nodejs , expressjs, , Tailwindcss  and HTML. Strong engineering professional 
          with a Bachelor's degree focused in web Development.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-yellow-600 cursor-pointer "
                >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-xl lg:w-[150rem] hover:scale-125 duration-1000 md:display mx-[] w-2/3 md:w-auto   md:h-auto lg:h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
