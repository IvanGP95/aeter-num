import React from 'react'

function DropdownMenu() {
  return (
    <div className='w-full items-center flex justify-center'>
        <div className=''>
        <button className='relative'>
            Products
        </button>
        </div>
        <div className='absolute mt-44 p-4 w-52 bg-slate-500'>
        <ul className=''>
            <li>Digital Art</li>
            <li className='py-2'>NFT</li>
            <li className='py-2'>Physical Art</li>
        </ul>
        </div>
    </div>
  )
}

export default DropdownMenu