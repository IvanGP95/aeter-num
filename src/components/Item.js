import React from 'react'
import {GrView, GrFavorite} from "react-icons/gr"
import { NavLink } from 'react-router-dom'

export const Item = ({info}) => {

  return (
    <div className="w-72 min-h-[10rem] shadow-lg rounded-md bg-white text-gray-700 overflow-hidden m-5">


        <img className="w-full h-64 object-fit p-4" src={info.image} alt="" />

      <div className='p-5 flex flex-col gap-3'>

            <h4 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>{info.title}</h4>


          <div className=''>
                    
            <p className='text-xl font-medium'>MXN ${info.price}</p>

          </div>

          <div className='mt-2 flex gap-2 justify-between'>
            <button className='bg-green-500/80 hover:bg-green-600/100 px-6 py-2 rounded-md text-white font-medium tracking-wider transition'>
              Add To Cart
            </button>
            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
            <GrFavorite size={20}/>
            </button>
            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
            <NavLink to={`/item/${info.id}`}> <GrView className='' size={20}/> </NavLink> 
            </button>
          </div>

      </div>

                

    </div>    
  )
}