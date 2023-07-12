import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import {db} from  './firebase'
const Contact = () => {
 
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hfxwehb', 'template_ij8a79f', form.current, 'kh1d7ovz6_5F4yZfI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <div
      name="contact"
      className="w-full h-55 bg-gray-900 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            ref={form}
            className=" flex flex-col w-full md:w-1/2"
            onSubmit={sendEmail}
           
          >
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border rounded-md text-white focus:outline-none" 
              required
            />
            <input
              type="text"
              name="user_email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border rounded-md text-white focus:outline-none"
               required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border rounded-md text-white focus:outline-none"
              required
             
             
            ></textarea>

            <button className="text-black bg-yellow-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" 
            type='submit' value="Send" >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
              }          

export default Contact;
