import Header from '../Component/Header'
import { useContext } from 'react';
import ShowContext from '../context/ShowContext';
function Academics() {
    const {siteData}=useContext(ShowContext);

  return (
    <main className='w-full'>
        <Header title="Academics Deatails" page="Academics"/>
        <div className='w-full mt-10 md:mt-0 flex items-center justify-center '>
            <div className='w-3/4'>
            <div className='outline-primary outline-4 bg-primary/10 outline rounded-xl px-10 py-5'>
                <h3 className='font-bold text-3xl'>Academics</h3>
                    <div className='w-full  mt-5'>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>Academic Calender</div>
                            <div className=''><a className='text-blue-500' href={siteData?.academics.academicCalendar}>Click Here</a></div>
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>Exam Schedule</div>
                            <div className=''><a className='text-blue-500' href={siteData?.academics.academicCalendar}>Click Here</a></div>
                        </div>
                    </div>
            </div>
            <div className='outline-primary mt-5 outline-4 bg-primary/10 outline rounded-xl px-10 py-5'>
                <h3 className='font-bold text-3xl'>Academics Resources</h3>
                    <div className='w-full  mt-5'>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>12th</div>
                            <div className=''><a className='text-blue-500' href={siteData?.academicResources["12th"]}>Click Here</a></div>
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>1st</div>
                            <div className=''><a className='text-blue-500' href={siteData?.academicResources["1st"]}>Click Here</a></div>
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>2nd</div>
                            <div className=''><a className='text-blue-500' href={siteData?.academicResources["2nd"]}>Click Here</a></div>
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>5th</div>
                            <div className=''><a className='text-blue-500' href={siteData?.academicResources["5th"]}>Click Here</a></div>
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>6th</div>
                            <div className=''><a className='text-blue-500' href={siteData?.academicResources["6th"]}>Click Here</a></div>
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>KG1</div>
                            <div className=''><a className='text-blue-500' href={siteData?.academicResources["KG1"]}>Click Here</a></div>
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>KG2</div>
                            <div className=''><a className='text-blue-500' href={siteData?.academicResources["KG2"]}>Click Here</a></div>
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>Nursery</div>
                            <div className=''><a className='text-blue-500' href={siteData?.academicResources["nursery"]}>Click Here</a></div>
                        </div>
                    </div>
            </div>
            <div className='outline-primary mt-5 outline-4 bg-primary/10 outline rounded-xl px-10 py-5'>
                <h3 className='font-bold text-3xl'>CBSE Compliance</h3>
                    <div className='w-full  mt-5'>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>Anual Report</div>
                            <div className=''><a className='text-blue-500' href={siteData?.cbseCompliance.annualReport}>Click Here</a></div>
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>CBSE Affiliation</div>
                            <div className=''><a className='text-blue-500' href={siteData?.cbseCompliance.cbseAffiliation}>Click Here</a></div>
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''> Mandatory Aublic Disclosure</div>
                            <div className=''><a className='text-blue-500' href={siteData?.cbseCompliance.mandatoryAublicDisclosure}>Click Here</a></div>
                        </div>
                    </div>
            </div>
            <div className='outline-primary mt-5 outline-4 bg-primary/10 outline rounded-xl px-10 py-5'>
                <h3 className='font-bold text-3xl'>Parents Corner</h3>
                    <div className='w-full  mt-5'>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>Content</div>
                            <div className=''><a className='text-blue-500' href={siteData?.parentsCorner.content}>Click Here</a></div>
                        </div>
                      
                    </div>
            </div>

            </div>
        </div>
    </main>
  )
}

export default Academics
