import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../src/Component/NavBar";
import Footer from "./Component/Footer";
import { useContext } from "react";
import ShowContext from "./context/ShowContext";
import Loader from "./Component/Loader";
function App() {  
  const {siteData}=useContext(ShowContext);
  return (
    <>
    <div className="">
      {
        !siteData?<div className="w-full min-h-screen flex justify-center items-center"><Loader/></div>
        :
    <div>

      <div className=" w-full">
        
        <NavBar />
      </div>
      <div className="py-32">
      
        <Outlet />
      </div>
      <Footer />
    </div>
      }
    </div>
    </>
  );
}

export default App;
