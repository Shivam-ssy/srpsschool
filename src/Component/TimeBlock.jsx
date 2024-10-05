
function TimeBlock({color="bg-primary/10",time}) {
  return (
    <div className={`flex flex-col justify-center items-center text-white w-44 h-24 ${color}`}>
      <div>{time } </div>
      <div>{time && "Play class"}</div>
    </div>
  )
}

export default TimeBlock
