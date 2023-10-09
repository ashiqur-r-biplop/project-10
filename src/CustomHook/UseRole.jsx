import axios from "axios";
import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UseRole = () => {
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState("");
  console.log(userRole);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/userRole/${user?.email}`)
      .then((data) => setUserRole(data.data.role));
  }, [user]);
  return userRole;
};

export default UseRole;
