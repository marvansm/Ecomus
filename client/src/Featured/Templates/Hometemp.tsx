import BannerSection from "../Sections/BannerSection";
import Collections from "../Sections/Collections";
import Features from "../Sections/Features";
import Location from "../Sections/location";
import ProductsSection from "../Sections/ProductsSection";
import SpecialProducts from "../Sections/SpecialProducts";

const Hometemp = () => {
  return (
    <>
      <BannerSection />
      <Collections />
      <ProductsSection />
      <SpecialProducts />
      <Features />
      <Location />
    </>
  );
};

export default Hometemp;
