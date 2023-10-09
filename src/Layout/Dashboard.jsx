import { Outlet } from "react-router-dom";
import SideBar from "../Component/Dashboard/SIdebard/SideBar";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <SideBar></SideBar>
        </div>
        <div className="col-span-10">
          <div className="md:p-[100px]">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
