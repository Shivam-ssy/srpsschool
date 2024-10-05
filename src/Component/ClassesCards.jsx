
function ClassesCards({mainImg="",title="",details="",subimage="",name="",price=""}) {
  return (
    <div className="rounded-xl h-[500px] group w-96 relative overflow-hidden ">
      <div>
        <img className="w-96 h-60" src={mainImg} alt="" />
      </div>
      <div className="bg-primary/20">
      <div className="pb-5 px-5 border-b-2 border-gray-700">
        <h3 className="font-bold py-5 text-2xl">{title}</h3>
        <span className="w-inherit">{details}</span>
      </div>
        <div className="p-5 flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <img className="w-20 h-20 rounded-full" src={subimage} alt="" />
                <span className="font-bold">{name}</span>
            </div>
            <div><span className="text-secondary text-xl font-bold">{price}</span> /month</div>
        </div>
      </div>
      <div className="bg-primary font-bold text-white text-center py-3 group-hover:-mt-10 cursor-pointer ease-in-out duration-150 absolute w-full ">Join Now</div>
    </div>
  )
}

export default ClassesCards
