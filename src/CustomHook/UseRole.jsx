import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UseRole = () => {
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState("");
  const [RoleLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/userRole/${user?.email}`)
      .then((data) => setUserRole(data.data.role), setLoading(false));
  }, [user]);
  return { userRole, RoleLoading };
};

export default UseRole;
