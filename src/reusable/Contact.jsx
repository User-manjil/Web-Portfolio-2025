import {React, useEffect} from 'react'
import gsap from 'gsap';
import Title from './Title';

const Contact = () => {
     const contacts = [
    "workspace0mzl@gmail.com",
    "whatsapp +977 9708023302",
    "Kathmandu, Nepal",
    "Response within in less than a Hour",
  ];
  
  useEffect(()=>{
    gsap.fromTo('.text-box',
      {
        y:25,
        opacity:0

      },
      {
        y:0,
        opacity:1,
        ease:"back.inOut",
        stagger:0.2,
        duration:0.4
      })
  },[])

  return (
    <div className='w-full h-full flex ' id='#contact' >
        
         {/* Contact section */}
       <div className=" text-box opacity-0 flex-col my-10 w-full gap-10   ">
          <Title heading="#Contact" />
          <div className=" lg:flex w-full h-full justify-between gap-10  lg:p-10 ">

            <div className="flex-col lg:w-1/2   mt-10 ">
              <p className="flex text-2xl font-black">
                Let's Work Together and Let your business see Sucess
              </p>
              {contacts.map((e) => {
                return (
                  <div className="flex border-b border-black m-1"> {e}</div>
                );
              })}
            </div>
            <div className="flex lg:w-1/2 mt-10 items-center">
              <form action="" method="post" className='m-auto w-full'>
            <div className="flex flex-col w-full   justify-center border-2 p-5 border-black px-10">

               <input
                className="border border-black p-2 rounded-xs outline-none mt-5 "
                type="text"
                placeholder=" Full Name"
              />
              
              <input
                className="border border-black p-2 rounded-xs outline-none mt-5 "
                type="text"
                placeholder="Email"
              />
              <textarea
                className="border border-black mt-5 p-2"
                name=""
                rows={4} placeholder='Message here !'
              ></textarea>
              <button type='submit' className="bg-blue-500 mt-5  p-2 rounded-sm text-white">
                Send
              </button>
                   
            </div>
             </form>



            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Contact
