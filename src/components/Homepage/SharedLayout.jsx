import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Navbar />

      {/* used in parent route elements to render their child route elements. */}
      <Outlet /> 
    </>
  );
};

export default SharedLayout;
