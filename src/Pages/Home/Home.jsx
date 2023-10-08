import Collection from "../../Component/Home/Collection";
import Company from "../../Component/Home/Company";
import EngravingService from "../../Component/Home/EngravingService";
import Hero from "../../Component/Home/Hero";
import JewelryServices from "../../Component/Home/JewelryServices";
import OurBestSellProduct from "../../Component/Home/OurBestSellProduct";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Company></Company>
      <Collection></Collection>
      <JewelryServices></JewelryServices>
      <EngravingService></EngravingService>
      <OurBestSellProduct></OurBestSellProduct>
    </div>
  );
};

export default Home;
