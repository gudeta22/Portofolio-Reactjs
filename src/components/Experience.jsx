import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/portfolio/node.jpg";
import git from "../assets/portfolio/icons8-git-48.png"
import github from "../assets/a.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "Reactjs",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-600",
    },
    {
      id: 6,
      src: nextjs,
      title: "Nodejs",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: git,
      title: "Git",
      style: "shadow-orange-400",
    },
   
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-900",
    },
    
  ];

  return (
    <div
      name="experience"
      className="bg-white w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-screen text-black">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-3  py-3 inline my-10">
            Experience
          </p>
          <p className="py-10">These are the technologies I've worked with:</p>
        </div>

        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-5 px-12 sm:px-0">
          {techs.map(({ id, src, title,style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded border ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto my-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
