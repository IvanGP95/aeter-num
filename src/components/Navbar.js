import React, { useState } from 'react'
import CartWidget from './CartWidget'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"


const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  const handleNav = () => {
      setNav(!nav)
    }
  
  const [product, setProduct] = useState(false)
  
  const productDrop = () => {
      setProduct(!product)    
}

  return (
    
    <nav className='w-full flex justify-between h-24 lg:px-44 sm:px-4 items-center content-center navbar'>
        <div className='w-full flex justify-between p-4 items-center'>
    <div className='items-center'>
    <h1 className='text-3xl'>Aeter-Num</h1>
    </div>
    <div className=' items-center xl:flex lg:flex md:flex sm:hidden ss:hidden xs:hidden xxs:hidden'>
    <ul className='border-b list-none flex items-center ml-5 gap-12 text-lg'>
        <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl'><a href='/'>Home</a></li>
        <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl'><a href='/'>About Us</a></li>
        <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl'><a href='/'>Services</a></li>
        <li> 
          <div>
            <div onClick={productDrop}>
              <button className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl text-center'>Products</button>
            </div>
            <div className={product ? 'fixed justify-center bg-white border p-2 ease-in-out duration-100' : 'fixed top-[-100%]'}>
              <ul className='p-2'>
                <li className='hover:bg-gray-700 hover:text-white p-3 rounded-2xl'>Digital Art</li>
                <li className='hover:bg-gray-700 hover:text-white p-3 rounded-2xl'>NFT</li>
                <li className='hover:bg-gray-700 hover:text-white p-3 rounded-2xl'>Physical Art</li>
              </ul>
            </div>
          </div>
         </li>
        <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl'><a href='/'>Contact</a></li>
    </ul>
    </div>
    <div>
    <ul className='flex items-center text-lg gap-6'>
        <li className=''> <CartWidget /> </li>
        <li className=' border-2 border-black rounded-xl p-2 hover:bg-slate-700 hover:text-white lg:flex md:flex xs:hidden xxs:hidden'> <a href='/'>Log In</a> </li>
    </ul>
    </div>
        </div>
      <div onClick={handleNav} className='p-4 xl:hidden lg:hidden md:hidden'>
        <div>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
      </div>
      <div className={nav ? 'fixed top-20 w-full h-full lg:hidden md:hidden' : "hidden"}>
        <ul className='uppercase bg-white border-t'>
          <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl'><a href='/'>Home</a></li>
          <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl'><a href='/'>About Us</a></li>
          <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl'><a href='/'>Services</a></li>
          <li className=''>           
          <div>
            <div onClick={productDrop}>
              <button className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl text-center'>PRODUCTS</button>
            </div>
            <div className={product ? 'w-full justify-center bg-white border p-2 ease-in-out duration-100' : 'fixed top-[-100%]'}>
              <ul className='p-2'>
                <li className='hover:bg-gray-700 hover:text-white p-3 rounded-2xl'>Digital Art</li>
                <li className='hover:bg-gray-700 hover:text-white p-3 rounded-2xl'>NFT</li>
                <li className='hover:bg-gray-700 hover:text-white p-3 rounded-2xl'>Physical Art</li>
              </ul>
            </div>
          </div> </li>
          <li className='hover:bg-gray-700 hover:text-white p-2 rounded-2xl shadow-lg'><a href='/'>Contact</a></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar