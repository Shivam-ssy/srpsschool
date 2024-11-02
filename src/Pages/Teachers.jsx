import React from 'react'
import Header from '../Component/Header'
import TeachersCards from '../Component/TeachersCards'

function Teachers() {
  return (
    <main className='w-full '>
        <Header title="Teachers" page="Teachers"/> 
        <div className='w-full flex md:mt-0 mt-10 justify-center'>
        <div className='max-w-6xl flex justify-center gap-5  flex-wrap'>
          <TeachersCards teacherImg='../p1.jpg' name='Cristina r. Hick'/>
          <TeachersCards teacherImg='../p3.jpg' name='Aleena Jyrall'/>
          <TeachersCards teacherImg='../p2.jpg' name='Emmy Jonas'/>
          <TeachersCards teacherImg='../p5.jpg' name='Franceds R.'/>
          <TeachersCards teacherImg='../p6.jpg' name='Cristina D.'/>
          <TeachersCards teacherImg='../p4.jpg' name='Olinda Josefina'/>
          <TeachersCards teacherImg='../p1.jpg' name='Anna D Brown'/>
          <TeachersCards teacherImg='../p6.jpg' name='Olinda Josefina'/>
        </div>

        </div>
    </main>
  )
}

export default Teachers
