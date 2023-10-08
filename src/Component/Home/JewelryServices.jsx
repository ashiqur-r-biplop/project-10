import img from "../../../public/Jewelry-right.webp";
const JewelryServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="flex flex-col justify-center items-start md:px-[100px]">
        <h2 className="section-title text-5xl py-3">Jewelry Repair Services</h2>
        <p className="text-[#b2b1b1] py-10 w-[90%]">
          With proper care and maintenance, your jewelry will reward you with a
          lifetime of enjoyment and luxury. Reprizo Jewelry and Watch Repair
          stores are staffed with professionally skilled Jewelers that provide a
          full range of exceptional jewelry repai...
        </p>
        <button className="border-4 p-6 text-[#b2b1b1]">LEARN MORE</button>
      </div>
    </div>
  );
};

export default JewelryServices;
