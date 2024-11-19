import { Outlet } from "react-router-dom";
import NavBar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div className="container mx-auto overflow-hidden">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
