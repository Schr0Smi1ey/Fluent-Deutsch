import { Outlet } from "react-router-dom";
import NavBar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";

const Root = () => {
  return (
    <div className="container mx-auto overflow-hidden">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
