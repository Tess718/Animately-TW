import React, { useState } from 'react'

const navigation = [
    { name: 'Course', href: '#', current: true },
    { name: 'Pricing', href: '#', current: false },
    { name: 'FAQ', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
      <div className="px-4 lg:px-[70px] pt-5 lg:pt-0 w-full">
        <div className="flex items-start lg:items-center justify-between">
            <div className="logo">
                <h3 className='text-3xl font-semibold text-white flex gap-x-4'><img src="Vector.png" alt="" className='w-10' /> Animately</h3>
            </div>
            
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden lg:block w-full`}>
              <div className={`flex flex-col lg:flex-row lg:justify-between lg:items-center items-start pl-10 lg:pl-0 lg:w-full fixed lg:relative bg-zinc-950 w-[250px] lg:bg-transparent h-full right-0 py-10 z-10 top-0`}>
              <div className='flex flex-col gap-x-5 lg:flex-row lg:mx-auto gap-y-5'>
                {navigation.map((item) => (
                  <a key={item.name}
                  href={item.href}
                  className='text-white'
                  onClick={toggleNavbar}
                  >{item.name}</a>
                ))}
              </div>

              <div className='flex flex-col lg:flex-row gap-y-4 gap-x-4 pt-6 lg:pt-0'>
                  <button className='rounded-xl bg-zinc-900 px-6 py-3 font-medium text-[#d68bfb] border border-zinc-700'>Log in</button>
                  <button className='rounded-xl bg-[#d68bfb] text-zinc-900 font-medium px-6 py-3'>Sign Up</button>
              </div>

              </div>
            </div>
        <div className="-mr-2 flex md:hidden z-20">
              <button
                onClick={toggleNavbar}
                  className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white ${isOpen ? 'fixed right-7 top-6' : ''}`}
              >
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
        </div>
      </div>

  )
}

export default Navbar
