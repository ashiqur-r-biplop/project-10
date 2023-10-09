import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AllJewellry = () => {
  const { user } = useContext(AuthContext);
  const [jewelry, setJewelry] = useState([]);
  const [control, setControl] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/all-jewelry")
      .then((data) => {
        setJewelry(data.data);
      })
      .catch((err) => console.log(err));
  }, [user, control]);

  const updateOrderStatus = (status, userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are changed by Product Status",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          status,
          userId,
        };

        axios
          .patch("http://localhost:5000/update-product-status", data)
          .then((res) => {
            console.log(res);
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Product Status has Changed",
                showConfirmButton: false,
                timer: 1500,
              });
              setControl(!control);
            }
          });
      }
    });
  };

  const options = [
    { value: "pending", label: "Pending" },
    { value: "approved", label: "Approved" },
    { value: "rejected", label: "Rejected" },
  ];
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Name / Email</th>
              <th>Quantity</th>
              <th>status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jewelry.map((product, i) => {
              const {
                _id,
                sellerName,
                sellerEmail,
                photoUrl,
                JewelryName,
                price,
                quantity,
                status,
              } = product;
              return (
                <tr key={product?._id}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={photoUrl} alt={JewelryName} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {`${JewelryName.slice(0, 30)}...`}
                        </div>
                        <div className="text-sm opacity-70">${price}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {sellerName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {sellerEmail}
                    </span>
                  </td>
                  <td>{quantity}</td>
                  <td>
                    <span
                      className={`${
                        status == "rejected" &&
                        "bg-red-500 text-white px-2 py-1 rounded"
                      } ${
                        status == "approved" &&
                        "bg-green-500 text-white px-2 py-1 rounded"
                      } ${
                        status == "padding" &&
                        "bg-blue-500 text-white px-2 py-1 rounded"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td>
                    <select
                      defaultValue={status}
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
    </div>
  );
};

export default AllJewellry;
