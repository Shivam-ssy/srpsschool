import { useNavigate } from "react-router-dom"
function BlogCards({title="",image="" ,bg="bg-white", details="",className="",time="Not sure"}) {
  const navigate=useNavigate()
  return (
    <main onClick={()=>navigate('/blog/1')} className={`flex hover:scale-110 duration-150 ease-in-out flex-col cursor-pointer ${bg} justify-center rounded-2xl p-5 w-80 md:w-96  `}>
    <div className=' px-5  mb-5  rounded-2xl'><img className=' rounded-2xl w-full' src={image} alt="" /></div>
    <h2 className='font-bold text-2xl'>{title}</h2>
    <div className=' '>{details}</div>
    <span>Dated: {time}</span>
  </main>
  )
}

export default BlogCards
