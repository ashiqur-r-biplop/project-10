import { useEffect, useState } from "react";

const OurBestSellProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/public/BestSell.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-[100px]">
      <div className="container mx-auto">
        <h2 className="section-title text-center my-10 text-5xl">
          Our Best Sellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, i) => {
            return (
              <div key={i} className="bg-[#EEEEEE] p-10">
                <div>
                  <img src={product?.image} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-sm">{product?.name}</h3>

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

export default OurBestSellProduct;
