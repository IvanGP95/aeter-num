import React, { useState } from 'react'

function Contador() {
    let [count, setCount] = useState(0);

  return (
    <div className='p-44 flex w-full gap-16 items-center justify-between'>
       <h1 className='text-6xl'>Contador</h1> 
       <p className='p-6'>{count}</p>
       <button className='bg-sky-700 p-6 hover:bg-sky-300' onClick={() => setCount(count+1)}>Incrementar</button>
        <button className='bg-sky-700 p-6 hover:bg-sky-300' onClick={() => setCount(count-1)}>Disminuir </button>
        <button className='bg-sky-700 p-6 hover:bg-sky-300' onClick={() => setCount(count=0)}> Reset </button>
    </div>
  )
}

export default Contador