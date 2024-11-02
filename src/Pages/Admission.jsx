import React, { useContext } from 'react'
import Header from '../Component/Header'
import ShowContext from '../context/ShowContext'

function Admission() {
    const {siteData}=useContext(ShowContext);
  return (
    <main className='w-full'>
        <Header title={"Admission Details"} page={"Admission"}/>
        <div className='w-full mt-10 md:mt-0 flex items-center justify-center '>
            <div className='w-3/4'>
            <div className='outline-primary outline-4 bg-primary/10 outline rounded-xl px-10 py-5'>
                <h3 className='font-bold text-3xl'>Admission Details</h3>
                    <div className='w-full  mt-5'>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>Document List</div>
                            {/* <div className=''><a className='text-blue-500' href={siteData?.academics.academicCalendar}>Click Here</a></div> */}
                            <div>
                                {
                                    siteData?.admissions.documentList.map((list,index)=>(
                                        <div key={index}>{list}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>Fee Structure</div>
                            <div className=''><a className='text-blue-500' href={siteData?.admissions.feeStructure}>Click Here</a></div>
                        </div>

                    </div>
            </div>
            <div className='outline-primary mt-5 outline-4 bg-primary/10 outline rounded-xl px-10 py-5'>
                <h3 className='font-bold text-3xl'>School Policies</h3>
                    <div className='w-full  mt-5'>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>Faq</div>
                            <div className=''>{siteData?.policies.faq}</div>
                           
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>Privacy Policy</div>
                            <div className=''>{siteData?.policies.privacyPolicy}</div>
                        </div>
                        <div className='grid border border-black py-3 mb-3 px-5 rounded-xl grid-cols-1 md:grid-cols-2 w-full'>
                            <div className=''>Termsand Conditions</div>
                            <div className=''>{siteData?.policies.termsandConditions}</div>
                        </div>

                    </div>
            </div>
           
           
           

            </div>
        </div>
    </main>
  )
}

export default Admission
