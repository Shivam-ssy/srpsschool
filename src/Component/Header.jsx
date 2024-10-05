import React from 'react'

function Header({title,page}) {
  return (
    <main className='h-[320px] mt-5 hidden md:block relative'>
      {/* <img src="" alt="" /> */}
      <svg className='absolute w-full h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0fc0b3" fillOpacity="1" d="M0,192L24,197.3C48,203,96,213,144,202.7C192,192,240,160,288,165.3C336,171,384,213,432,213.3C480,213,528,171,576,176C624,181,672,235,720,240C768,245,816,203,864,202.7C912,203,960,245,1008,245.3C1056,245,1104,203,1152,197.3C1200,192,1248,224,1296,213.3C1344,203,1392,149,1416,122.7L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
      <div className='absolute text-white flex flex-col w-full h-inherit items-center justify-center '>
        <h3 className='font-bold text-3xl uppercase'>{title}</h3>
        <span className='uppercase'><i className="ri-home-2-line "></i> Kindedo - {page}</span>
      </div>
     
    </main>
  )
}

export default Header
