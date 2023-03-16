import React from 'react'

export const itemDetail = ({details}) => {

  return (
    <div key={details.id} className="xl:flex xl:flex-nowrap xl:w-11/12 xl:justify-center xl:h-[60vh] xl:items-center lg:flex lg:flex-nowrap lg:h-[60vh] lg:items-center md:flex md:flex-nowrap md:h-[60vh] md:items-center sm:flex xs:flex sm:items-center xxs:flex xxs:flex-wrap xxs:justify-center bg-white text-gray-700 overflow-hidden xl:m-20  mx-auto items-center">


        <img className="xxs:w-full xl:w-96 lg:w-96 md:w-96 xs:w-80 h-96 p-4" src={details.image} alt="" />

        <div className=' xl:w-3/5 xxs:w-full p-5 flex flex-col gap-3'>

            <h4 className='font-semibold text-2xl overflow-ellipsis overflow-hidden xl:whitespace-nowrap'>{details.title}</h4>

            <div className=' w-auto justify-center text-center'>
                <p className='text-lg font-medium m-5'>{details.description}</p>        
                <p className='text-xl font-medium m-5'>MXN ${details.price}</p>

            </div>

            <div className='mt-2 flex justify-center'>
                <button className='bg-green-500/80 hover:bg-green-600/100 px-6 py-2 rounded-md text-white font-medium tracking-wider transition'>
                Add To Cart
                </button>
            </div>

        </div>

                

    </div> 
  )
}

export default itemDetail
