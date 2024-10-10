import AboutCard from "../Component/AboutCard.jsx";
import Header from "../Component/Header.jsx";
// import { useParams } from "react-router-dom"
function ProgramDetials() {
  // const params=useParams()
  // useEffect(()=>{
  //     get the data from the server by params.id
  // })
  return (
    <main className="w-full mt-10 md:mt-0" >
      <Header page="Program Details" title="Program Details" />
      <div className="flex flex-col items-center">
        <div className="grid w-3/4 gap-5 grid-cols-1 md:grid-cols-2">
          <div className="w-full">
            <img
              className="min-h-80 h-full w-full rounded-3xl"
              src="/p4.jpg"
              alt=""
            />
          </div>
          <div className="bg-primary/10 p-10 rounded-3xl">
            <h3 className="font-bold text-3xl">Settling </h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem repellat ducimus itaque! Dicta sint beatae magnam,
              excepturi eos atque dolorem repellat dolor molestiae?
              Consequuntur, exercitationem quas voluptatem voluptates culpa
              harum!
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              porro sint iure exercitationem ullam maxime labore dol
            </span>
            <div className="flex mt-10 flex-wrap gap-5 md:gap-0">
              <div className="flex items-center gap-2 border-r border-primary w-fit pr-3">
                <img className="w-16 h-16 rounded-full" src="/p3.jpg" alt="" />
                <div className="">
                  <div>Settling Teacher</div>
                  <div className="font-bold">Alexia Honix</div>
                </div>
              </div>
              <div className="border-r border-primary px-3">
                <div>Categories</div>
                <div className="font-bold">Kindergarten</div>
              </div>
              <div className=" px-3">
                <div>Per/Month</div>
                <div className="font-bold">$190</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 md:flex-row flex-col mt-10">
          <AboutCard
            title="2-2.5 years"
            img="/book-shelf-line.svg"
            details="age"
            className="bg-primary/10 min-w-60"
            style="bg-secondary"
          />
          <AboutCard
            title="5 Days"
            img="/book-shelf-line.svg"
            details="Weekly"
            className="bg-primary/10 min-w-60"
            style="bg-secondary"
          />
          <AboutCard
            title="3.5 Hrs"
            img="/book-shelf-line.svg"
            details="Periods"
            className="bg-primary/10 min-w-60"
            style="bg-secondary"
          />
          <AboutCard
            title="24"
            img="/book-shelf-line.svg"
            details="Class Size"
            className="bg-primary/10 min-w-60"
            style="bg-secondary"
          />
        </div>
        <div className="mt-10 px-10">
          <h3 className="font-bold text-3xl text-center">
            Full Days With Learning
          </h3>
          <div className="max-w-xl text-center">
            consectetur adipisicing elit. Autem inventore, deleniti quibusdam
            voluptatum consectetur distinctio laborum dolores e
          </div>
          <div className="flex md:flex-row flex-col  w-full gap-5">
            <table className="table-auto border-separate border-spacing-1 rounded-3xl overflow-hidden w-full">
              <thead>
                <tr className=" text-white">
                  <th className="min-w-40 bg-primary px-4 py-2">Hours</th>
                  <th className="min-w-40 bg-primary px-4 py-2">Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">8:00am</td>
                  <td className="border px-4 py-2">Free Play</td>
                </tr>
                <tr className="bg-primary/20">
                  <td className="border px-4 py-2">8:30am</td>
                  <td className="border px-4 py-2">Sand Pit</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">9:00am</td>
                  <td className="border px-4 py-2">Tatto Corner</td>
                </tr>
                <tr className="bg-primary/20">
                  <td className="border px-4 py-2">9:30am</td>
                  <td className="border px-4 py-2">Creativity Corner</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">10:00am</td>
                  <td className="border px-4 py-2">Food Time</td>
                </tr>
              </tbody>
            </table>
            <table className="table-auto border-separate border-spacing-1 rounded-3xl overflow-hidden w-full">
              <thead>
                <tr className=" text-white">
                  <th className="min-w-40 bg-primary px-4 py-2">Hours</th>
                  <th className="min-w-40 bg-primary px-4 py-2">Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">10:30am</td>
                  <td className="border px-4 py-2">Clay Moulding</td>
                </tr>
                <tr className="bg-primary/20">
                  <td className="border px-4 py-2">11:00am</td>
                  <td className="border px-4 py-2">Sand Pit</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">11:30am</td>
                  <td className="border px-4 py-2">Tatto Corner</td>
                </tr>
                <tr className="bg-primary/20">
                  <td className="border px-4 py-2">12:00pm</td>
                  <td className="border px-4 py-2">Creativity Corner</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">12:30pm</td>
                  <td className="border px-4 py-2">Food Time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid w-3/4 mt-10 gap-5 grid-cols-1 md:grid-cols-2">
          <div className="w-full">
            <img
              className="min-h-80 h-full w-full rounded-3xl"
              src="/p4.jpg"
              alt=""
            />
          </div>
          <div className="bg-primary/10  p-10 rounded-3xl">
            <h3 className="font-bold text-3xl">More Information </h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem repellat ducimus itaque! Dicta sint beatae magnam,
              excepturi eos atque dolorem repellat dolor molestiae?
              Consequuntur, exercitationem quas voluptatem voluptates culpa
             
            </span>
            <ul className="mt-4">
                <li className="flex items-center gap-2"><i className="ri-arrow-right-s-line bg-primary rounded-full text-lg mb-1"></i>Semester start and end dates, Holiday</li>
                <li className="flex items-center gap-2"><i className="ri-arrow-right-s-line bg-primary rounded-full text-lg mb-1"></i>Acceditation & bear Facts</li>
                <li className="flex items-center gap-2"><i className="ri-arrow-right-s-line bg-primary rounded-full text-lg mb-1"></i>Graduate Divison</li>
                <li className="flex items-center gap-2"><i className="ri-arrow-right-s-line bg-primary rounded-full text-lg mb-1"></i>Reserch at our School</li>
                <li className="flex items-center gap-2"><i className="ri-arrow-right-s-line bg-primary rounded-full text-lg mb-1"></i>Textbook: Cal Student Store</li>
               
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProgramDetials;
