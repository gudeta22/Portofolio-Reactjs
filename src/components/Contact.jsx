import React from "react";


const Contact = () => {
  // const [name , setName] = useState('')
  // const [email , setEmail] = useState('')
  // const [message , setMessage] = useState('')

  // const userCollectionRef = collection(db , 'contactdata')
  // const handleSubmit = (e) =>
  //   {

  //     addDoc(userCollectionRef, {
  //       name:name,
  //        email:email,
  //        message:message,
  //     })


    // e.preventDefault();

    // db.collection('contact').add({
    //   name:name,
    //   email:email,
    //   message:message,
    // }).then(()=>
    // {
    //   alert("Message Submitted!!")
    // })
    // .catch((error)=>
    // {
    //   alert(error.message)
    // })

    // setName('')
    //  setEmail('')
    // setMessage('')
    
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
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
           
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border rounded-md text-white focus:outline-none" 
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border rounded-md text-white focus:outline-none"
             
            ></textarea>

            <button className="text-black bg-yellow-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
