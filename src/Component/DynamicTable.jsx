import TimeBlock from "./TimeBlock";
const DynamicTable = ({ schedule }) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
    return (
      <div className="mt-10 w-full md:w-auto ">
        <table>
          <thead>
            <tr>
              {daysOfWeek.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((timeSlot, rowIndex) => (
              <tr key={rowIndex}>
                {daysOfWeek.map((day, colIndex) => (
                  <td key={colIndex}>
                    {timeSlot[day] ? (
                      <TimeBlock color={timeSlot[day].color} time={timeSlot[day].time} />
                    ) : (
                      <TimeBlock/> // Empty block if no class
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
export default DynamicTable