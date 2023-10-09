import img from "../../../public/Jewelry-left.webp";

const EngravingService = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row px-2 md:px-0">
      <div className="md:w-[50%] w-full flex flex-col justify-center items-center md:items-start md:px-[100px]">
        <h2 className="section-title text-5xl py-3">Engraving Services</h2>
        <p className="text-[#b2b1b1] py-10 w-[90%]">
          The most personal touch you can add to any gift is personalizing it
          with your own words. Whether it’s Gold, Silver, Platinum or Glass, we
          can customize all your gifts. Our Reprizo locations offer a wide
          variety of engraving services and merchandis...
        </p>
        <button className="border-4 p-6 text-[#b2b1b1]">LEARN MORE</button>
      </div>
      <div className="md:w-[50%] w-full my-5">
        <img className="w-full" src={img} alt="" />
      </div>
    </div>
  );
};

export default EngravingService;
