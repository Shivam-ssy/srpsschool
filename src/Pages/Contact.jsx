import React from 'react'
import AboutCard from '../Component/AboutCard'

function Contact() {
  return (
    <main>
      <div className='flex gap-5 flex-col md:flex-row px-5 md:px-0 w-full justify-center'>
        <AboutCard title='907-200-3567' details='Phone'img='./phone-line.svg' style='bg-secondary' />
        <AboutCard title='14/A,Kilix Home Tower, NYC' details='location' img='./map-pin-line.svg' style='bg-secondary' />
        <AboutCard title='support@kindelo.com' details='Email' img='./mail-line.svg' style='bg-secondary' />
      </div>
      <div className='w-full flex flex-wrap gap-5 md:gap-0 justify-evenly items-center'>
        <div className=' md:w-auto'>
            <h3 className='text-2xl font-bold'>Contact Us Right Here</h3>
            <div className=' border border-gray-600 md:p-10 p-5 mt-10 rounded-2xl'>
                <div className='flex gap-5'>
                    <div className='flex flex-col w-40 md:w-52'>
                        <label htmlFor="name">Name</label>
                        <input className='outline-none border h-10 rounded-xl border-gray-600' type="text" name="name" id="name" />
                    </div>
                    <div className='flex flex-col w-40 md:w-52'>
                        <label htmlFor="email">Email</label>
                        <input className='outline-none border h-10 rounded-xl border-gray-600' type="email" name="email" id="email" />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col  w-40 md:w-52'>
                        <label htmlFor="phone">Phone</label>
                        <input className='outline-none border h-10 rounded-xl border-gray-600' type="tel" name="phone" id="phone" />
                    </div>
                    <div className='flex flex-col  w-40 md:w-52'>
                        <label htmlFor="sub">Subjects</label>
                        <select className='outline-none border h-10 rounded-xl border-gray-600' name="sub" id="sub">
                            <option value="">Select any Option </option>
                            <option value="sub1">Junier KG</option>
                            <option value="sub2">PreNursery</option>
                            <option value="sub3">Nursey</option>
                            <option value="sub4">Senier KG</option>
                        </select>
                    </div>
                </div>
                    <div className='flex flex-col'>
                        <label htmlFor="comment">Comment</label>
                        <textarea className='outline-none border border-gray-600' rows="4" name="comment" id="comment"></textarea>
                    </div>
                    <div className='flex gap-2 my-5'>
                        <input type="radio" name="data" id="savedata" />
                        <label htmlFor="savedata">Save for the Next Comment</label>
                    </div>
                    <div className="px-5 py-3 bg-primary w-fit rounded-3xl">Save</div>

            </div>
        </div>
        <div><img className='h-96' src="/map.png" alt="" /></div>
      </div>
    </main>
  )
}

export default Contact
