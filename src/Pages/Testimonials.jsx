import Header from "../Component/Header"
import TestimonialCard from "../Component/TestimonialCard"

function Testimonials() {
  return (
    <main className="w-full">

    <Header title="Testimonials" page="Testimonials"/>
    <div className="flex flex-col items-center w-full">
      <h3 className="font-bold text-3xl">Parent Says</h3>
      <span className="max-w-xl text-center my-5">Lorem ipsum  maxime inventore obcaecati placeat, voluptas minus quisquam numquam autem n</span>
      <div className="flex flex-wrap max-w-5xl gap-5">
        <TestimonialCard name="Narma J. Johnston" parentImg="../p2.jpg"/>
        <TestimonialCard name="Narma J. Johnston" parentImg="../p2.jpg"/>
        <TestimonialCard name="Narma J. Johnston" parentImg="../p2.jpg"/>
        <TestimonialCard name="Narma J. Johnston" parentImg="../p2.jpg"/>
        <TestimonialCard name="Narma J. Johnston" parentImg="../p2.jpg"/>
        <TestimonialCard name="Narma J. Johnston" parentImg="../p2.jpg"/>
      </div>
    </div>
    </main>
  )
}

export default Testimonials
