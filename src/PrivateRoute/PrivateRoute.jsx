import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthProvider";
import { RingLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log("user", user);
  console.log("loading", loading);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <RingLoader color="#22c55d" size={150} />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login" state={{ from: location.pathname }}></Navigate>
    </div>
  );
};

export default PrivateRoute;
