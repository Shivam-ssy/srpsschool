import React from "react";
import Hcard from "../Component/Hcard";
import Pcards from "../Component/Pcards";
import FaqsCard from "../Component/FaqsCard";

function Offering() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full mb-20">
        <h3 className="text-5xl font-bold">Our Offerings</h3>
        <span className="mt-5 px-5 md:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </span>
        <div className="mt-10 flex flex-wrap gap-5 md:gap-0 justify-evenly w-full">
          <Hcard
            image="./basketball-fill.svg"
            title="Sport Classes"
            details="Lorem ipsum  dolor sit amet consectetur adipisicing elit"
          />
          <Hcard
            image="./school-fill.svg"
            title="Music Classes"
            details="Lorem ipsum  dolor sit amet consectetur adipisicing elit"
          />
          <Hcard
            image="./palette-line.svg"
            title="Drawing Classes"
            details="Lorem ipsum  dolor sit amet consectetur adipisicing elit"
          />
        </div>
      </div>
      {/* best for kidd */}
      <div className="flex w-full flex-wrap px-10  justify-center gap-20">
        <div>
          <img className="h-96" src="./kidsstudying.png" alt="" />
        </div>
        <div className="md:max-w-[40vw] w-full mb-40">
          <h1 className="text-3xl font-bold">Best for Your Kids</h1>
          <span className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quidem dolorem necessitatibus praesentium id? Reprehenderit, soluta
            aut consequuntur ut autem adipisci dolores. Molestias?
          </span>
          <div className="text-white flex w-fit -ml-5 px-0 md:px-10 py-2 gap-5 rounded-3xl mt-10 bg-secondary ">
            <div className="border flex md:gap-2 md:px-3 border-gray-600 border-l-0 border-t-0 border-b-0">
              <h3 className="font-bold place-content-center h-full md:text-2xl">
                14+
              </h3>
              <span>
                years of <br />
                exprience
              </span>
            </div>
            <div className="border flex gap-2 md:px-3  border-gray-600 border-l-0 border-t-0 border-b-0">
              <h3 className="font-bold place-content-center md:text-2xl">7k+</h3>
              <span>
                Students
                <br /> each year
              </span>
            </div>
            <div className=" flex gap-2 md:px-3 border-gray-600 ">
              <h3 className="font-bold place-content-center md:text-2xl">15+</h3>
              <span>
                Award
                <br /> Winning
              </span>
            </div>
          </div>
          {/* list for  best kidd */}
          <ul className=" list-none mt-5">
            <li>
              <i className="ri-arrow-right-s-line text-xl bg-secondary/20 rounded-full text-secondary"></i>{" "}
              We Belive every child is intellegent so we care
            </li>
            <li>
              <i className="ri-arrow-right-s-line text-xl bg-secondary/20 rounded-full text-secondary"></i>{" "}
              Teachers make a diffrence of your child
            </li>
          </ul>
        </div>
      </div>
      {/* our programs */}
      <div className="w-full flex py-10 flex-col items-center bg-[#fdf7ed] ">
        <h3 className="font-bold text-3xl">Our Programs</h3>
        <span className="md:max-w-[40rem] md:px-0 px-5 text-center w-full my-5">
          Lorem ipsum dolor sit amet, assumenda dolores consequuntur nam nihil
          dicta sequi odit pariatur at ullam vel facilis est quam laudantium
          iusto officia aliquam possimus?
        </span>
        <div className="flex flex-wrap gap-5 md:gap-0 justify-evenly w-full my-10">
          <Pcards
            image="./settling.jpg"
            title="Settling"
            details="Lorem ipsum dolor sit amet, assumenda dolores consequuntur nam nihil dicta sequi"
            className="bg-secondary"
          />
          <Pcards
            image="./playgroup.jpg"
            title="Play Group"
            details="Lorem ipsum dolor sit amet, assumenda dolores consequuntur nam nihil dicta sequi"
            className="bg-primary"
          />
          <Pcards
            image="./prenursery.jpg"
            title="Pre-Nursery"
            details="Lorem ipsum dolor sit amet, assumenda dolores consequuntur nam nihil dicta sequi"
            className="bg-[#ff577b]"
          />
        </div>
        <div className=" underline my-10">View all Programs</div>
      </div>

      {/* know more about kidedo */}

      <div className="flex md:flex-row flex-col w-full px-5 md:justify-evenly items-center">
        <div className="md:w-1/2 w-full">
          <h3 className="font-bold text-3xl ">
            Know More <br /> About Kindedo
          </h3>
        
          <div>
          <FaqsCard title="What is the best Age to to start kinderGarten?" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              debitis natus illum ut inventore impedit sapiente molestias a"/>
          <FaqsCard title="Which is the best pre-school for your child?" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              debitis natus illum ut inventore impedit sapiente molestias a"/>
          <FaqsCard title="What is the tution fee in first year?" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              debitis natus illum ut inventore impedit sapiente molestias a"/>

          </div>
        </div>
        <div><img className="w-96 md:w-auto" src="./know.png" alt="" /></div>
      </div>
      {/* what the parent says  */}
    </main>
  );
}

export default Offering;
