import { useEffect, useState } from "react";
import img from "../../../public/shop.webp";
import axios from "axios";
const AllJewelry = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jewelry-zone-server.vercel.app/all-approved-jewelry")
      .then((data) => setProducts(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="h-[50vh] w-full relative">
        <img className="h-full w-full" src={img} alt="" />
        <div className="absolute top-[40%] w-full text-center text-white">
          <h1 className="section-title text-5xl text-center">Collections</h1>
          <span className="mt-2 text-gray-300">Home &gt; All Jewelry</span>
        </div>
      </div>
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, i) => {
            console.log(product);
            return (
              <div key={i} className="bg-[#EEEEEE] p-10">
                <div className="relative text-center">
                  <img
                    className="mx-auto"
                    style={{
                      height: "350px",
                      objectFit: "contain",
                      width: "auto",
                    }}
                    src={product?.photoUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-sm">
                    {product?.JewelryName.slice(0, 20)}
                  </h3>

                  <p>${product?.price}.00</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllJewelry;
