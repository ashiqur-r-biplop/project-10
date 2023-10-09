import { Outlet } from "react-router-dom";

import Navbar from "../Sheard/Navbar/Navbar";
import Footer from "../Sheard/Footer/Footer";

const Main = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar></Navbar>
        <div className="md:min-h-[calc(100vh-73px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
