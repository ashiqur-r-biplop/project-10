/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useOwner from "../CustomHook/UseOwner";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const {isOwner, isOwnerLoading} = useOwner();
  const location = useLocation();

  if (loading || isOwnerLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isOwner) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
