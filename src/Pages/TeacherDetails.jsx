import DynamicTable from "../Component/DynamicTable";
import Header from "../Component/Header";
import ProgressBar from "../Component/ProgressBar";
import { scheduleForTeacher } from "../Data/TableSchedule";
function TeacherDetails() {
  return (
    <main>
      <Header page="Teacher Details" title="Teacher Deatils" />
      <div className="flex items-center mt-10 md:mt-0 flex-col px-10">
        <div className="grid md:grid-cols-2  gap-5 grid-cols-1 w-full md:w-3/4">
          <img className="md:max-w-lg w-full rounded-3xl" src="../p1.jpg" alt="" />
          <div className="bg-primary/10 py-10 px-5 rounded-3xl w-full ">
            <h3 className="font-bold text-3xl">Anna D. Brown</h3>
            <span className="text-secondary">Teacher</span>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis odio voluptatum quas, dolore similique magnam incidunt
              repudiandae ratione. Blanditiis, quod. <br /> <br /> Ipsam maxime
              recusandae ea voluptatem, accusamus reprehenderit ut dicta et.
            </div>
            <div className="flex items-center gap-2 mt-5">
              Follow me:{" "}
              <div className="flex gap-3">
                <i className="text-secondary text-2xl ri-facebook-circle-fill"></i>
                <i className="text-secondary text-2xl ri-twitter-fill"></i>
                <i className="text-secondary text-2xl ri-youtube-fill"></i>
              </div>{" "}
            </div>
          </div>
          <div className="bg-primary/10 rounded-3xl py-10 px-5">
            <h3 className="font-bold text-xl">My Skills:</h3>
            <div className="">
               <ProgressBar title="PreSchool Education" percentage="90"/>
               <ProgressBar title="PreSchool Education" percentage="90"/>
               <ProgressBar title="Physical Education" percentage="90"/>
            </div>

          </div>
          <div className="bg-primary/10 overflow-auto break-keep rounded-3xl py-10 px-5">
            <h3 className="font-bold text-xl">
            Pearsonal Info:
            </h3>
            <div>
                <div className="flex mb-5 mt-5 justify-between">
                    <span>Email:</span>
                    <span>annabrown@kindedo.com</span>
                </div>
                <div className="flex mb-5 justify-between">
                    <span>Education:</span>
                    <span>University of California, Los Angeles</span>
                </div>
                <div className="flex mb-5 justify-between">
                    <span>Teaching Since:</span>
                    <span>2016</span>
                </div>
                <div className="flex mb-5 justify-between">
                    <span>At Corlears Since:</span>
                    <span>2018</span>
                </div>
                <div className="flex justify-between">
                    <span>What i Love Most:</span>
                    <span>The Kids With Creative mind</span>
                </div>
            </div>
           </div>
        </div>
        <div className="flex items-center w-full flex-col gap-10 mt-10">
            <h3 className="font-bold text-3xl text-center">My Time Table</h3>
            <span className="max-w-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eum perferendis minus velit quis voluptas</span>
            <div className="overflow-x-auto  no-scrollbar w-full flex justify-center">

            <DynamicTable schedule={scheduleForTeacher}/>
            </div>
        </div>
            
      </div>
    </main>
  );
}

export default TeacherDetails;
