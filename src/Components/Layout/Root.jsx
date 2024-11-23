import { Outlet } from "react-router-dom";
import NavBar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RingLoader } from "react-spinners";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";

const Root = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <RingLoader color="#22c55d" size={150} />
      </div>
    );
  }
  return (
    <div className="container ubuntu  mx-auto overflow-hidden">
      <NavBar></NavBar>
      <div className="my-32">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
