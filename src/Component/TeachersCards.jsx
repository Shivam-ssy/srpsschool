function TeachersCards({ teacherImg = "", name = "" }) {
    return (
      <div className="w-64 flex group  ease-in-out duration-300 overflow-hidden flex-col relative h-80 rounded-2xl">
        <img className="w-full absolute top-0 rounded-2xl h-72" src={teacherImg} alt="" />
        <div className="flex flex-col justify-end h-full w-full rounded-b-none relative ">
          <div className="flex flex-col items-center bg-gray-200 py-3 rounded-2xl rounded-b-none">
            <h3 className="font-bold text-2xl">{name}</h3>
            <span>Teacher</span>
          </div>
        </div>
          <div className="w-full ease-in-out flex justify-center gap-4 items-center duration-300 group-hover:mt-0 -mt-10 bg-primary h-10">
          <i className="text-white text-xl cursor-pointer ri-facebook-circle-fill"></i>
          <i className="text-white text-xl cursor-pointer ri-twitter-fill"></i>
          <i className="text-white text-xl cursor-pointer ri-youtube-fill"></i>
          </div>
      </div>
    );
  }
  
  export default TeachersCards;
  