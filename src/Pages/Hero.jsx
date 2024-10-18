import { useContext } from "react"
import ShowContext from "../context/ShowContext"

function Hero() {
  const {siteData}=useContext(ShowContext);
  console.log("data at hero",siteData?.Home);
  
  return (
    <main className='flex mb-5 md:mt-5 md:h-[80vh] bg-gradient-to-r from-[#fcefce] to-[#e0f7f3] md:flex-row flex-col py-10 md:py-0 gap-10 md:gap-0 h-auto px-10 md:px-0  items-center justify-evenly'>
      <div>
        <span className='text-secondary'>Kinderten Program</span>
        <h3 className='md:text-7xl text-6xl  font-bold'>Best Children's <br /> Education</h3>
        <div className='text-white bg-primary px-5 py-3 rounded-3xl w-fit mt-10'>Admission Open 2022-2023</div>
      </div>
      <div><img className='md:h-[80vh]  w-full max-w-xl' src={siteData?.Home.hero.heroImage ||"./heroImg2.png" } alt="" /></div>
    </main>
  )
}

export default Hero
