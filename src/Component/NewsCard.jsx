
function NewsCard({title="",image="",dates}) {
    const date=new Date()
    console.log("image at newscard",image);
    
  return (
    <div className='flex group flex-col cursor-pointer hover:text-white hover:bg-secondary items-center justify-center border-dashed rounded-2xl p-5 max-w-80 border border-gray-500'>
      <div className='bg-primary/10 group-hover:bg-primary  p-5  mb-5'><img className='h-20 ' src={image} alt="" /></div>
      <h2 className='font-bold text-2xl'>{title}</h2>
      <div className='text-center '>Dated:{date.toLocaleString(dates)}</div>
    </div>
  )
}

export default NewsCard
