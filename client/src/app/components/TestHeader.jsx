"use client"
import React, { useState } from 'react'
import Logo from './Logo'


function Nav()  {
    let Links =[
      {name:"ABOUT",link:"/"},
      {name:"explore",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen] = useState(false)
    const onClicky = () =>{
        setOpen(!open)
    }
  return (
    <>
      <div className='shadow-md w-full fixed top-0 left-0 py-3'>
        <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
        <div className=' cursor-pointer flex items-center'>
          <Logo/>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
                <a href={link.link} className='text-white-800 font-sans font-semibold uppercase hover:text-orange-200 duration-500'>{link.name}</a>
              </li>
            ))
          }
          <li className='md:ml-8 md:my-0 my-7'>
              <button class="font-sans font-semibold uppercase middle none center mr-3 rounded-xl border border-slate-300 py-3 px-6 text-lg transition-all hover:text-orange-200 hover:opacity-75 focus:ring focus:ring-grey-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-dark="true">
                  sign-in
              </button>
          </li>
        </ul>
        </div>
      </div>
    </>
  )
}

export default Nav