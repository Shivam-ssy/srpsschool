
const ProgressBar = ({ title, percentage }) => {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="">{title}</span>
        <span className="">{percentage}%</span>
      </div>
      <progress 
        className="w-full h-4 rounded-full overflow-hidden" 
        value={percentage} 
        max="100"
      ></progress>
    </div>
  );
};

export default ProgressBar;
