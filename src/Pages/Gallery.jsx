import React from 'react'
import Header from '../Component/Header'

function Gallery() {
  return (
    <main>
    <Header title="gallery" page="gallery" />
    <div className="w-full max-w-3xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div><img className="h-full w-full rounded-3xl object-cover" src="../g1.jpg" alt="Gallery Image 1" /></div>
            <div className="col-span-2 row-span-2"><img className="h-full w-full rounded-3xl object-cover" src="../g2.jpg" alt="Gallery Image 2" /></div>
            <div className="row-span-2"><img className="h-full w-full rounded-3xl object-cover" src="../g3.jpg" alt="Gallery Image 3" /></div>
            <div><img className="h-full w-full rounded-3xl object-cover" src="../g4.jpg" alt="Gallery Image 4" /></div>
            <div className="col-span-2 row-span-2"><img className="h-full w-full rounded-3xl object-cover" src="../g5.jpg" alt="Gallery Image 5" /></div>
            <div className="row-span-2"><img className="h-full w-full rounded-3xl object-cover" src="../g6.jpg" alt="Gallery Image 6" /></div>
            <div><img className="h-full w-full rounded-3xl object-cover" src="../g7.jpg" alt="Gallery Image 7" /></div>
            <div><img className="h-full w-full rounded-3xl object-cover" src="../g8.jpg" alt="Gallery Image 8" /></div>
        </div>
    </div>
</main>

  )
}

export default Gallery
