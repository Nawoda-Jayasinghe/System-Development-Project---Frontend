import Sidebar from "../SideBar/Sidebar";
import { Outlet } from "react-router-dom";

const SharedLayoutForDashBoard = () => {
  return (
    <div className="flex w-full">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayoutForDashBoard;
