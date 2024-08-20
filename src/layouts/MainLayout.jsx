import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";

import "react-toastify/ReactToastify.css";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer /> {/* To display notifications */}
    </>
  );
};

export default MainLayout;
