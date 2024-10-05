
function TestimonialCard({name="",parentImg=""}) {
  return (
    <div className="border max-w-80 rounded-xl hover:bg-primary/20 ease-linear duration-150 hover:shadow-xl hover:border-none hover:shadow-primary border-gray-600 p-5">
      <div>
      <i className="ri-star-s-fill text-primary"></i>
      <i className="ri-star-s-fill text-primary"></i>
      <i className="ri-star-s-fill text-primary"></i>
      <i className="ri-star-s-fill text-primary"></i>
      <i className="ri-star-s-fill text-primary"></i>
      </div>
      <div className=" my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellendus ipsum, obcaecati dolorem, sint omnis atque ut quis numqua</div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
            <img className="h-16 rounded-full w-16" src={parentImg} alt="" />
            <span>{name}</span>
        </div>
        <div>
            <img className="h-10 rounded-full" src="../quotation.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
