import React from 'react'
import Header from '../Component/Header'
import Pcards from '../Component/Pcards'
import Healthsafety from '../Component/Healthsafety'
function Program() {
  return (
    <main>
        <Header title="Our Programs" page="Programs"/>
        <div className='w-full mt-10 md:mt-0 px-32 justify-center flex gap-10 flex-wrap'>
        <Pcards
            image="../settling.jpg"
            title="Settling"
            details="Lorem ipsum dolor sit amet, assumenda dolores consequuntur nam nihil dicta sequi"
            className="bg-secondary"
            bg='bg-secondary/10'
          />
        <Pcards
            image="../p2.jpg"
            title="Play Group"
            details="Lorem ipsum dolor sit amet, assumenda dolores consequuntur nam nihil dicta sequi"
            className="bg-primary"
            bg='bg-primary/10'
          />
        <Pcards
            image="../p3.jpg"
            title="Pre-Nursery"
            details="Lorem ipsum dolor sit amet, assumenda dolores consequuntur nam nihil dicta sequi"
            className="bg-[#ff577b]"
            bg='bg-[#ff577b]/10'
          />
        <Pcards
            image="../p4.jpg"
            title="Nursery"
            details="Lorem ipsum dolor sit amet, assumenda dolores consequuntur nam nihil dicta sequi"
            className="bg-[#ff7c7c]"
            bg='bg-[#ff7c7c]/10'
          />
        <Pcards
            image="../p5.jpg"
            title="Junier Nursery"
            details="Lorem ipsum dolor sit amet, assumenda dolores consequuntur nam nihil dicta sequi"
            className="bg-[#00b9f1]"
            bg='bg-[#00b9f1]/10'
          />
        <Pcards
            image="../p6.jpg"
            title="Senior KG"
            details="Lorem ipsum dolor sit amet, assumenda dolores consequuntur nam nihil dicta sequi"
            className="bg-[#7c81ff]"
            bg='bg-[#7c81ff]/10'
          />
        </div>
      <Healthsafety mainImg='../safety.png' subimg1="../sun-line.svg" subimg2="../tv-line.svg" subtitle1='Full Day Session' subtitle2='Varied Classes' />
    </main>
  )
}

export default Program
