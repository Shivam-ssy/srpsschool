import { useContext } from "react";
import AboutCard from "../Component/AboutCard";
import Header from "../Component/Header";
import ShowContext from "../context/ShowContext";
import {Link} from "react-router-dom"

function About() {
  const {siteData}=useContext(ShowContext);
  console.log("at about",siteData);
  
  return (
    <main>
      <Header title="About" page="About" />
      <div className="flex flex-col md:flex-row px-5 md:px-0 mb-10 md:mb-0  md:justify-evenly">
        <img src="./aboutbest.png" alt="" />
        <div className="max-w-xl">
          <h2 className="font-bold text-4xl mb-5">
            {/* Best For Your Kids */}
            {siteData?.aboutUs.focus}
            </h2>
          <h4 className="font-bold  mb-5">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            omnis repellat ducimus in explicabo accusantium delectus eius,
            possimus. */}
            Principal Message <br />
            {siteData?.aboutUs.principalMessage.principalMessage}
          </h4>
          <span>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            omnis repellat ducimus in explicabo accusantium delectus eius,
            possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Culpa incidunt neque quis ab quo dolor exercitationem accusamus,
            voluptatibus sequi itaque quibusdam voluptas rerum. */}
            {siteData?.aboutUs.vision}
          </span>
          <ul className=" list-none my-5">
            <li>
              <i className="ri-arrow-right-s-line text-xl bg-secondary/20 rounded-full text-secondary"></i>{" "}
              We Belive every child is intellegent so we care
            </li>
            <li>
              <i className="ri-arrow-right-s-line text-xl bg-secondary/20 rounded-full text-secondary"></i>{" "}
              Teachers make a diffrence of your child
            </li>
          </ul>
          <div className="flex gap-10">
            <Link to="/contact" className="px-5 py-3 w-fit bg-primary rounded-3xl">
              Contact Us
            </Link>
            <div className="flex items-center gap-2">
              <img
                className="h-10 bg-primary/30 rounded-full p-2"
                src="./video-icon.jpg"
                alt=""
              />
              Promotional Videos
            </div>
          </div>
        </div>
      </div>
      {/* core value */}

      <div className="w-full flex flex-col px-5 items-center justify-center text-white bg-secondary py-32">
        <h3 className="font-bold text-3xl">Our Core Value</h3>
        <span className="md:text-center text-justify max-w-2xl ">
         {siteData?.aboutUs.mission}
        </span>
        <div className="flex flex-wrap justify-center gap-5 md:gap-0 mt-10">
          <AboutCard
            title="Learning & Fun"
            img="./book-shelf-line.svg"
            details="Lorem ipsum dolor, sit amet consectetur adipisicing elit"
          />
          <AboutCard
            title="Healthy Meal"
            img="./cup-line.svg"
            details="Lorem ipsum dolor, sit amet consectetur adipisicing elit"
            style="bg-white"
          />
          <AboutCard
            title="Children Safety"
            img="./locksmile.jpg"
            details="Lorem ipsum dolor, sit amet consectetur adipisicing elit"
            style="bg-white"
          />
          <AboutCard
            title="Nice Environment"
            img="./basketball-fill.svg"
            details="Lorem ipsum dolor, sit amet consectetur adipisicing elit"
            style="bg-white"
          />
        </div>
      </div>

      {/* friendly atmosphere */}

      <div className="flex flex-wrap px-5 md:px-0 justify-evenly my-20">
        <div className="flex flex-col">
          <h3 className="font-bold text-3xl">
            Friendly Atmophere <br />
            For all kids{" "}
          </h3>
          <span className="font-bold max-w-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            recusandae illo quia dolorem optio temporibus asperiores delectus?
            Officiis, quidem pariatur.
          </span>
          <span className="max-w-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et laborum
            rerum modi placeat impedit sed ratione rem, blanditiis consequuntur.
            Non odit recusandae doloribus soluta facilis vero aliquid porro,
            iure inventore.
          </span>
          <div className="flex items-center py-2 mt-10 justify-around rounded-3xl bg-primary/20">
            <div className="flex items-center gap-5">
              <img className="h-16 rounded-full bg-primary p-5" src="./sun-line.svg" alt="" />
              <span>Full Day Session</span>
            </div>
            <div className="flex items-center gap-5">
              <img className="h-16 rounded-full bg-secondary p-5" src="./tv-line.svg" alt="" />
              <span>Varied Classes</span>
            </div>
          </div>
        </div>
        <div>
          <img className="h-96" src="./aboutcare.png" alt="" />
        </div>
      </div>
    </main>
  );
}

export default About;
