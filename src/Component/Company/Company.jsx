import company1 from "../../../public/company-1.webp";
import company2 from "../../../public/company-2.webp";
import company3 from "../../../public/company-3.webp";
import company4 from "../../../public/company-4.webp";
import company5 from "../../../public/company-5.webp";
import company6 from "../../../public/company-6.webp";
const Company = () => {
  return (
    <div className="bg-[#e7e7e7] py-[100px] mb-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <img src={company1} alt="" />
          <img src={company2} alt="" />
          <img src={company3} alt="" />
          <img src={company4} alt="" />
          <img src={company5} alt="" />
          <img src={company6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Company;
