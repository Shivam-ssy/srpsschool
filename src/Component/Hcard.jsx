import React from 'react'

function Hcard({title="",image="" , details="",viewButton=true}) {
  return (
    <main className='flex group flex-col cursor-pointer hover:text-white hover:bg-secondary items-center justify-center border-dashed rounded-2xl p-5 max-w-80 border border-gray-500'>
      <div className='bg-primary/10 group-hover:bg-primary  p-5  mb-5  rounded-full'><img className='h-20 ' src={image} alt="" /></div>
      <h2 className='font-bold text-2xl'>{title}</h2>
      <div className='text-center '>{details}</div>
      {
        viewButton && 
      <div className='mt-5 bg-gray-300 rounded-3xl px-5 py-2'>View More</div>
      }
    </main>
  )
}

export default Hcard
