import { Link } from "react-router-dom"
import Header from "../Component/Header"
function NotFound() {
  return (
    <main>
    <Header title="404 Not Found" page="Not Found"/>
    <div className="flex flex-wrap justify-evenly m-0 px-5 gap-5 md:gap-0 md:mt-16">
        <div className=" max-w-xl">
            <h3 className="font-bold text-3xl uppercase mb-10">Opps! page not <br /> not found</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus saepe enim alias quasi unde, cumque sint ut voluptatum molestias sequi dolore doloremque quibusdam soluta ipsa, architecto vitae natus iure. Sequi!</span>
           <Link to="/"> <div className="px-5 flex items-center mt-10 gap-3 py-3 w-fit bg-primary rounded-3xl"><i className="ri-home-2-line"></i>Back to Home</div></Link>

        </div>
      <img className="h-96 rounded-full" src="./notfound.png" alt="" />
    </div>
    </main>
  )
}

export default NotFound
