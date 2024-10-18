import React, { useContext } from 'react'
import Header from '../Component/Header'
import ShowContext from '../context/ShowContext'

function Gallery() {
  const {siteData}=useContext(ShowContext)
  console.log("data at gallery",siteData?.Infrastructure.art_rooms[0] );
  
  return (
    <main>
    <Header title="gallery" page="gallery" />
    <div className='w-full flex flex-col'>
    <div className="w-full max-w-3xl mx-auto px-6">
      <h3 className='font-bold text-xl mb-10'>Highlights Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div><img className="h-full w-full rounded-3xl object-cover" src={ siteData?.Gallery.images[0].url ||"/notfound.png"} alt="Gallery Image 1" /></div>
            <div className="col-span-2 row-span-2"><img className="h-full w-full rounded-3xl object-cover" src={ siteData?.Gallery.images[1].url ||"/notfound.png"} alt="Gallery Image 2" /></div>
            <div className="row-span-2"><img className="h-full w-full rounded-3xl object-cover" src={ siteData?.Gallery.images[2].url ||"/notfound.png"} alt="Gallery Image 3" /></div>
            <div><img className="h-full w-full rounded-3xl object-cover" src="../g4.jpg" alt="Gallery Image 4" /></div>
            <div className="col-span-2 row-span-2"><img className="h-full w-full rounded-3xl object-cover" src="../g5.jpg" alt="Gallery Image 5" /></div>
            <div className="row-span-2"><img className="h-full w-full rounded-3xl object-cover" src="../g6.jpg" alt="Gallery Image 6" /></div>
            <div><img className="h-full w-full rounded-3xl object-cover" src="../g7.jpg" alt="Gallery Image 7" /></div>
            <div><img className="h-full w-full rounded-3xl object-cover" src="../g8.jpg" alt="Gallery Image 8" /></div>
        </div>
    </div>
    <div  className="w-full max-w-3xl mx-auto px-6 my-10">
    <h3 className='font-bold text-xl mb-10'>Our Infrastructure</h3>
    <h5 className='font-bold text-lg my-5 ml-5'>Faculty</h5>
    <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {
        siteData?.FacultyStaff.facultyPicture?(

            <img className='w-80 h-60' src={siteData?.FacultyStaff.facultyPicture} />
          
        ):(
          <p>No data found</p>
        )
      }
    </div>
    <h5 className='font-bold text-lg my-5 ml-5'>Art Room</h5>
    <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {
        siteData?.Infrastructure.art_rooms.length?(

          siteData.Infrastructure.art_rooms.map((image,index)=>(
            <img className='w-80 h-60' key={index} src={image} />
          ))
        ):(
          <p>No art room found</p>
        )
      }
    </div>
    <h5 className='font-bold text-lg my-5 ml-5'>Hostel</h5>
    <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {
        siteData?.Infrastructure.laboratories.length?(

          siteData.Infrastructure.hostels.map((image,index)=>(
            <img className='h-80 aspect-ratio' key={index} src={image} />
          ))
        ):(
          <p>No Data found</p>
        )
      }
    </div>
    <h5 className='font-bold text-lg my-5 ml-5'>Laboratories</h5>
    <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {
        siteData?.Infrastructure.laboratories.length?(

          siteData.Infrastructure.laboratories.map((image,index)=>(
            <img key={index} src={image} />
          ))
        ):(
          <p>No Data found</p>
        )
      }
    </div>
    <h5 className='font-bold text-lg my-5 ml-5'>Presentation Halls</h5>
    <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {
        siteData?.Infrastructure.presentation_halls.length?(

          siteData.Infrastructure.presentation_halls.map((image,index)=>(
            <img key={index} src={image} />
          ))
        ):(
          <p>No Data found</p>
        )
      }
    </div>
    <h5 className='font-bold text-lg my-5 ml-5'>School Blocks </h5>
    <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {
        siteData?.Infrastructure.school_blocks.length?(

          siteData.Infrastructure.school_blocks.map((image,index)=>(
            <img key={index} src={image} />
          ))
        ):(
          <p>No Data found</p>
        )
      }
    </div>
    <h5 className='font-bold text-lg my-5 ml-5'>School Reception </h5>
    <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {
        siteData?.Infrastructure.school_reception.length?(

          siteData.Infrastructure.school_reception.map((image,index)=>(
            <img key={index} src={image} />
          ))
        ):(
          <p>No Data found</p>
        )
      }
    </div>
    <h5 className='font-bold text-lg my-5 ml-5'>Sport Ground</h5>
    <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {
        siteData?.Infrastructure.sports_ground.length?(

          siteData.Infrastructure.sports_ground.map((image,index)=>(
            <img key={index} src={image} />
          ))
        ):(
          <p>No Data found</p>
        )
      }
    </div>

    </div>
    </div>
</main>

  )
}

export default Gallery
