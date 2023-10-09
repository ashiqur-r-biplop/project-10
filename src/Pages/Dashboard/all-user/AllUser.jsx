import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const AllUser = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/all-user`)
      .then((data) => setUsers(data.data), setLoading(false));
  }, [user, control]);
  const options = [
    { value: "seller", label: "Seller" },
    { value: "owner", label: "Owner" },
  ];
  const updateOrderStatus = (role, userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are changed User Role",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          role,
          userId,
        };

        axios.patch("http://localhost:5000/update-user-role", data).then((res) => {
          console.log(res);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User Role has Changed",
              showConfirmButton: false,
              timer: 1500,
            });
            setControl(!control);
          }
        });
      }
    });
  };
  if (loading) {
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>
          <Skeleton count={3} />
        </p>
      </SkeletonTheme>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Email</th>
            <th>Name</th>
            <th>role</th>
            <th>UpdateRole</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => {
            const { name, email, photo, role, _id } = u;
            return (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <img className="w-10 rounded-lg" src={photo} alt="" />
                </td>
                <td>{email}</td>
                <td>{name}</td>
                <td>{role}</td>
                <td>
                  <select
                    defaultValue={role}
                    onChange={(e) => updateOrderStatus(e.target.value, _id)}
                    className="px-4 py-2 border bg-none"
                    name=""
                    id=""
                  >
                    {options.map((option, i) => (
                      <option key={i} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
