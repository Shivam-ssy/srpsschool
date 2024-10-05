
function Healthsafety({mainImg,subimg1,subimg2,subtitle1, subtitle2}) {  
  return (
    <div className="flex flex-wrap px-5 md:px-0 justify-evenly w-full my-20">
    <div className="flex flex-col">
      <h3 className="font-bold text-3xl">
        Health and Safety
      </h3>
      <span className="font-bold max-w-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        recusandae 
      </span>
      <span className="max-w-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et laborum
        rerum modi placeat impedit sed ratione rem, blanditiis consequuntur.
        Non odit recusandae doloribus soluta facilis vero aliquid porro,
        iure inventore.
      </span>
      <div className="flex items-center py-2 mt-10 justify-around rounded-3xl bg-primary/20">
        <div className="flex items-center gap-5">
          <img className="h-16 rounded-full bg-primary p-5" src={subimg1} alt="" />
          <span>{subtitle1}</span>
        </div>
        <div className="flex items-center gap-5">
          <img className="h-16 rounded-full bg-secondary p-5" src={subimg2} alt="" />
          <span>{subtitle2}</span>
        </div>
      </div>
    </div>
    <div>
      <img className="h-96" src={mainImg}  alt="" />
    </div>
  </div>
  )
}

export default Healthsafety
