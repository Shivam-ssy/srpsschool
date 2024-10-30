import React, { useContext } from "react";
import ShowContext from "../context/ShowContext";
import {Link} from "react-router-dom"
function Footer() {
  const {siteData}=useContext(ShowContext);
  console.log("data for courasel",siteData.home.carousel)
  return (
    <main className="w-full">
      <div className=" w-full mt-10 flex flex-wrap justify-evenly items-start px-10 md:px-32 py-20 bg-[#f7a138]/10">
        {/* <div className='w-3/4 absolute  h-96 left-1/2 top-1/2 -translate-x-1/2 '>
      <img className='w-full absolute rounded-3xl h-full' src="./giraff.jpg" alt="" />
      <div className='w-full absolute rounded-3xl flex flex-col gap-5 items-center justify-center h-full opacity-90 bg-[#0fc0b3] text-white'>
        <h2 className='font-bold text-4xl'>Join Our Newsletter</h2>
        <div>Subscribe our Newsletter to get our latest update & news.</div>
        <div className='bg-white flex justify-between rounded-3xl py-2 px-3'>
        <input type="email" placeholder='Your Email' className='px-10 py-2 outline-none' />
        <div className='bg-[#ff9b24] w-fit px-5 py-3 rounded-3xl'><i className="ri-telegram-line tect-white"></i> Subscribe Now</div>
        </div>
      </div>
      </div> */}
        <div className="md:w-96  w-full  md:px-0">
          <div className="flex items-center mb-5  text-secondary gap-3 font-serif">
            <img className="h-20" src="./logo.png" alt="" />
            <div>
              <h3 className="text-2xl font-bold ">kindedo</h3>
              <span>Best School</span>
            </div>
          </div>
          <span className="w-full md:px-0 md:max-w-96">
          {siteData?.aboutUs.vision}
          </span>
          <div className="w-fit px-5 py-2 rounded-3xl cursor-pointer mt-10 bg-primary">
            Join Now
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <h3 className="font-bold text-2xl mb-5">Quick Links</h3>
          <ul>
            <Link to="/about"><li>About</li></Link>
            <Link to="/classes"><li>Classes</li></Link>
            <Link to="/pages/faqs"><li>Pages</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <li><a href={siteData?.academics.academicCalendar}>Academics Calender</a></li>
            <li><a href={siteData?.academics.examSchedule}>Exam Schedule</a></li>
            <li><a href={siteData?.admissions.feeStructure}>Fee Structure</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-2xl mb-5 mt-10 md:mt-0">Programs</h3>
          <ul>
            <li>Play School </li>
            <li>Nursery</li>
            <li>Junier Kg </li>
            <li>Senier Kg</li>
            <li>Holiday Camp</li>
            <li>Day Camp</li>
            <li>Kindedo Club</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-5 mt-10 md:mt-0">Contact Us</h3>
          <ul>
            <li>
              <i className="ri-map-pin-2-fill text-secondary"></i> {siteData?.contactUs.location}
            </li>
            <li>
              <i className="ri-phone-line  text-secondary"></i> {siteData?.contactUs.phoneNumber}
            </li>
            <li>
              <i className="ri-mail-fill text-secondary"></i>{" "}
              {siteData?.contactUs.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full relative h-40 mb-10 flex flex-col md:flex-row items-center md:items-end justify-end md:justify-evenly">
       <img className="md:h-32 h-10 top-0 w-full absolute" src="/sinewave.svg" alt="" />
       <div className="">Copyright by &copy; 2024 Madrocket</div>
       <div className="flex gap-3">
       <a href={siteData?.contactUs.facebookLink} target="_blanck"><i className="text-secondary text-2xl ri-facebook-circle-fill"></i></a>
       <a href={siteData?.contactUs.twitterLink} target="_blanck"><i className="text-secondary text-2xl ri-twitter-fill"></i></a>
       <a href={siteData?.contactUs.linkedinLink} target="_blanck"><i className="text-secondary text-2xl ri-linkedin-box-fill"></i></a>
       </div>
       <div>Design with ❤️ by <a className="text-blue-700" target="blanck" href="https://www.linkedin.com/in/shivam-singh-yadav-743657240/">Shivam Singh Yadav</a></div>
      </div>
    </main>
  );
}

export default Footer;
