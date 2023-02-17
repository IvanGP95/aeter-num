import React from 'react'

function CartWidget() {
  return (
    <div className='flex items-center p-2 rounded-xl shadow-xl hover:bg-dimBlue'>
        <a className='w-full' href='/'><img className='h-9' src="https://img.icons8.com/fluency/48/null/shopping-basket.png" alt='shopping cart'/></a>
        <span className='absolute text-s mb-6 ml-5 px-2 rounded-3xl bg-red-600 text-white'>5</span>
    </div>
  )
}

export default CartWidget