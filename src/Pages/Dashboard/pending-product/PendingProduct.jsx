import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PendingProduct = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/pending-product/${user?.email}`)
        .then((data) => setProducts(data?.data), setLoading(false))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);
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
    <div>
      {products.length <= 0 ? (
        <>Your Pending Product Channel Is empty</>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Number</th>
                <th>Your Name</th>
                <th>Email</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="">
              {products.map((product, i) => {
                const { sellerName, sellerEmail, JewelryName, price, status } =
                  product;
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{sellerName}</td>
                    <td>{sellerEmail}</td>
                    <td>{JewelryName}</td>
                    <td>{price}</td>
                    <td>
                      <span className="bg-blue-800 text-white px-2 py-1 rounded-lg">{status}</span>
                    </td>
                    <td>deleteProduct</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PendingProduct;
