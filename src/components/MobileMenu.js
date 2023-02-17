import React from 'react'

function MobileMenu() {

  return (
    <div className='fixed top-20 w-full h-full lg:hidden md:hidden'>
        <ul className='uppercase bg-slate-50'>
          <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl'><a href='/'>Home</a></li>
          <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl'><a href='/'>About Us</a></li>
          <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl'><a href='/'>Services</a></li>
          <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl'> Products </li>
          <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl'><a href='/'>Contact</a></li>
        </ul>
    </div>
  )
}

export default MobileMenu