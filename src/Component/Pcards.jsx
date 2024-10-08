import { useNavigate } from "react-router-dom"
function Pcards({title="",image="" ,bg="bg-white", details="",className=""}) {
  const navigate=useNavigate()
  return (
    <main onClick={()=>navigate('/program/1')} className={`flex flex-col cursor-pointer ${bg} justify-center rounded-2xl p-5 w-80 md:w-96  `}>
    <div className=' px-5  mb-5  rounded-2xl'><img className=' rounded-2xl w-full' src={image} alt="" /></div>
    <h2 className='font-bold text-2xl'>{title}</h2>
    <div className=' '>{details}</div>
    <div className={`text-white self-center flex w-fit py-1 px-2 rounded-xl mt-10 ${className} `}>
            <div className="border border-dashed flex flex-col  px-6 border-gray-600 border-l-0 border-t-0 border-b-0">
              <h3 className="font-bold  h-full text-md">4-5 Yrs</h3>
              <span>age</span>
            </div>
            <div className="border border-dashed flex flex-col  px-6  border-gray-600 border-l-0 border-t-0 border-b-0">
              <h3 className="font-bold  text-md">5 days</h3>
              <span>Weekly</span>
            </div>
            <div className=" flex flex-col px-6 border-gray-600 ">
              <h3 className="font-bold  text-md">3.30 hrs</h3>
              <span>Periods</span>
            </div>
          </div>
  </main>
  )
}

export default Pcards
