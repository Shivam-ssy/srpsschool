import React from 'react'
import Header from '../Component/Header'
import FaqsCard from '../Component/FaqsCard'
import Healthsafety from '../Component/Healthsafety'

function Faqs() {
  return (
    <main>
      <Header title="Faqs" page="faqs"/>
      <div className='flex justify-center items-center flex-col gap-4'>
        <h2 className='font-bold text-6xl'>Freequently Asked Questions</h2>
        <span className='text-center'>View classe by age, program or subject. Check out upcoming camps and <br />special events too.</span>
      </div>
      <div className='flex justify-center gap-20 mt-20'>
        <div>
        <FaqsCard title='What is the best Age to to start kinderGarten?' details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              debitis natus illum ut inventore impedit sapiente molestias a'/>
        <FaqsCard title='What is the best PreSchool for Your Child' details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              debitis natus illum ut inventore impedit sapiente molestias a'/>
        <FaqsCard title='What is the tution fee of first year' details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              debitis natus illum ut inventore impedit sapiente molestias a'/>
        <FaqsCard title='What is the tution fee after first year' details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              debitis natus illum ut inventore impedit sapiente molestias a'/>
        </div>
        <div>
        <FaqsCard title='What is the best Age to to start kinderGarten?' details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              debitis natus illum ut inventore impedit sapiente molestias a'/>
        <FaqsCard title='What is the best Age to to start kinderGarten?' details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              debitis natus illum ut inventore impedit sapiente molestias a'/>
        <FaqsCard title='What is the best Age to to start kinderGarten?' details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              debitis natus illum ut inventore impedit sapiente molestias a'/>
        <FaqsCard title='What is the best Age to to start kinderGarten?' details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              debitis natus illum ut inventore impedit sapiente molestias a'/>
      </div>
      </div>
      <Healthsafety mainImg='../safety.png' subimg1='../sparkling-fill.svg' subimg2='../hand-sanitizer-line.svg' subtitle1='Nightly Cleaning' subtitle2='Hand Washing'/>
    </main>
  )
}

export default Faqs
