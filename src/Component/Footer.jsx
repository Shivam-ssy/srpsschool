import React from "react";

function Footer() {
  return (
    <main className="w-full">
      <div className=" w-full mt-10 flex flex-wrap justify-evenly items-start px-32 py-20 bg-[#f7a138]/10">
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
        <div className="w-96 ">
          <div className="flex items-center mb-5  text-secondary gap-3 font-serif">
            <img className="h-20" src="./logo.png" alt="" />
            <div>
              <h3 className="text-2xl font-bold ">kindedo</h3>
              <span>Best School</span>
            </div>
          </div>
          <span className="max-w-96">
            Lorem ipsum dolor sit amet consectetur, Officiis est cumque sunt
            magni? Magni id aliquam tenetur sequi enim ratione ab quibusdam.
            Facere, similique voluptatem
          </span>
          <div className="w-fit px-5 py-2 rounded-3xl cursor-pointer mt-10 bg-primary">
            Join Now
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-5">Quick Links</h3>
          <ul>
            <li>About</li>
            <li>Cources</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-2xl mb-5">Programs</h3>
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
          <h3 className="font-bold text-2xl mb-5">Contact Us</h3>
          <ul>
            <li>
              <i className="ri-map-pin-2-fill text-secondary"></i> 14/A,Kilix
              Home Tower, NYC
            </li>
            <li>
              <i className="ri-phone-line  text-secondary"></i> 907-200-3462
            </li>
            <li>
              <i className="ri-mail-fill text-secondary"></i>{" "}
              support@kindelo.com
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full relative h-40 mb-10 flex items-end justify-evenly">
       <img className="h-32 w-full absolute" src="./sinewave.svg" alt="" />
       <div className=" ">Copyright by &copy; 2024 Madrocket</div>
       <div className="flex gap-3">
       <i className="text-secondary text-2xl ri-facebook-circle-fill"></i>
       <i className="text-secondary text-2xl ri-twitter-fill"></i>
       <i className="text-secondary text-2xl ri-youtube-fill"></i>
       </div>
       <div>Design with ❤️ by Madrocket</div>
      </div>
    </main>
  );
}

export default Footer;
