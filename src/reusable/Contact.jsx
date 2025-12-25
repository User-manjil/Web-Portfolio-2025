import React from 'react'

const Contact = () => {
     const contacts = [
    "workspace0mzl@gmail.com",
    "Kathmandu, Nepal",
    "Response within in less than a Hour",
  ];
  return (
    <div className='flex'>
         {/* Contact section */}
       <div className="flex flex-col my-10 justify-around ">
          <Title heading="#Contact" />
          <div className="flex">
            <div className="flex flex-col w-1/2 mt-10 ">
              <p className="flex text-2xl font-black">
                Let's Work Together and Let your business see Sucess
              </p>
              {contacts.map((e) => {
                return (
                  <div className="flex border-b border-black m-1"> {e}</div>
                );
              })}
            </div>
            <div className="flex flex-col w-1/2 mx-10 my-5  gap-3  items-center border-2 border-black px-10">
              <input
                className="border border-black p-2 rounded-xs outline-none mt-5 "
                type="text"
                placeholder=" Full Name"
              />
              <input
                className="border border-black p-2 rounded-xs outline-none mt-5 "
                type="text"
                placeholder="Email "
              />
              <textarea
                className="border border-black p-5"
                name=""
                id=""
                rows={4}
              ></textarea>
              <button className="bg-blue-500  p-2 rounded-sm text-white">
                Send
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
