import { useEffect } from "react";
import { useState } from "react";

import "@smastrom/react-rating/style.css";
const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/public/Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, i) => {
          return (
            <div key={i} className="bg-[#EEEEEE] p-10">
              <div>
                <img src={product?.image} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm">{product?.name}</h3>

                {/* <Rating
                  //   style={{ maxWidth: 250 }}
                  itemStyles={myStyles}
                  value={5}
                  readOnly
                /> */}
                <p>${product?.price}.00</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
