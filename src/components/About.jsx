import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full h-50 bg-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:h-screen">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        <p className="text-xl font-light my-0 py-10">
        Hi, my name is Gudeta, and I am a web developer with a passion for building beautiful and functional websites. I have experience in front-end and back-end web development, as well as database design and management. My skills include proficiency in HTML, CSS, JavaScript, and popular frameworks such as React and Angular.
        </p>

       <p className="text-xl py-0 font-light">
       Throughout my career, I have worked on numerous web development projects, including e-commerce sites, social media platforms, and online marketplaces. One of my most notable projects involved developing a custom content management system for a digital marketing agency, which allowed them to efficiently manage their clients' websites and content.
        </p>

        <p className="text-xl py-10 font-light">
        My approach to web development is centered around usability, accessibility, and scalability. I believe that effective web development requires a strong focus on understanding the needs of the end-users and ensuring that the websites I develop are user-friendly, responsive, and accessible across all devices. Overall, I am excited to continue learning and growing as a web developer and to contribute to innovative and impactful projects.
        </p>
      </div>
    </div>
  );
};

export default About;
