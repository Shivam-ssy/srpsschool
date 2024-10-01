import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../src/Component/NavBar";
import Footer from "./Component/Footer";
function App() {
  return (
    <>
      <div className=" w-full">
        <NavBar />
      </div>
      <div className="py-32">
      
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
