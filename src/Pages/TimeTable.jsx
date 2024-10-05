import DynamicTable from "../Component/DynamicTable"
import Header from "../Component/Header"
import { schedule } from "../Data/TableSchedule"
function TimeTable() {
  return (
    <main>
      <Header title="Time Table" page="Time Table"/> 
    <div className="w-full  flex flex-col py-10 items-center">
      
      <h2 className="font-bold text-4xl">All Classes Time Table</h2>
      <span className="max-w-xl text-center">Lorem ipsum dolor sit amet consectetur  optio unde. Id cupiditate numquam officiis nulla veniam unde repudiandae consequuntur sapiente enim?</span>
      <div className="mt-10 w-full overflow-x-auto no-scrollbar flex justify-center">
        <DynamicTable schedule={schedule}/>
        {/* <table>
          <thead>
            <tr>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <TimeBlock color="bg-primary"/>
              </td>
              <td>
                <TimeBlock color="bg-secondary"/>
              </td>
              <td>
                <TimeBlock color="bg-periwinkleblue"/>
              </td>
              <td>
                <TimeBlock color="bg-primary"/>
              </td>
              <td>
                <TimeBlock color="bg-skyblue"/>
              </td>
              <td>
                <TimeBlock color="bg-coralpink"/>
              </td>
              
            </tr>
            <tr>
             
              <td>
                <TimeBlock color="bg-periwinkleblue"/>
              </td>
              <td>
                <TimeBlock color="bg-skyblue"/>
              </td>
              <td>
                <TimeBlock color="bg-coralpink"/>
              </td>
              <td>
                <TimeBlock color="bg-secondary"/>
              </td>
              <td>
                <TimeBlock color="bg-salmonpink"/>
              </td>
              <td>
                <TimeBlock color="bg-periwinkleblue"/>
              </td>
            </tr>
            <tr>
             
              <td>
                <TimeBlock color="bg-secondary"/>
              </td>
              <td>
                <TimeBlock color="bg-primary"/>
              </td>
              <td>
                <TimeBlock color="bg-salmonpink"/>
              </td>
              <td>
                <TimeBlock color="bg-periwinkleblue"/>
              </td>
              <td>
                <TimeBlock color="bg-secondary"/>
              </td>
              <td>
                <TimeBlock color="bg-skyblue"/>
              </td>
            </tr>
            <tr>
             
              <td>
                <TimeBlock color="bg-coralpink"/>
              </td>
              <td>
                <TimeBlock color="bg-secondary"/>
              </td>
              <td>
                <TimeBlock color="bg-periwinkleblue"/>
              </td>
              <td>
                <TimeBlock color="bg-secondary"/>
              </td>
              <td>
                <TimeBlock color="bg-primary"/>
              </td>
              <td>
                <TimeBlock color="bg-salmonpink"/>
              </td>
            </tr>
            <tr>
              
              <td>
                <TimeBlock color="bg-primary"/>
              </td>
              <td>
                <TimeBlock color="bg-periwinkleblue"/>
              </td>
              <td>
                <TimeBlock color="bg-primary"/>
              </td>
              <td>
                <TimeBlock color="bg-salmonpink"/>
              </td>
              <td>
                <TimeBlock color="bg-coralpink"/>
              </td>
              <td>
                <TimeBlock color="bg-skyblue"/>
              </td>
            </tr>
            <tr>
             
              <td>
                <TimeBlock color="bg-secondary"/>
              </td>
              <td>
                <TimeBlock color="bg-skyblue"/>
              </td>
              <td>
                <TimeBlock color="bg-salmonpink"/>
              </td>
              <td>
                <TimeBlock color="bg-skyblue"/>
              </td>
              <td>
                <TimeBlock color="bg-secondary"/>
              </td>
              <td>
                <TimeBlock color="bg-primary"/>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
    </main>
  )
}

export default TimeTable
