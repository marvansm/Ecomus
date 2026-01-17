import BannerSection from "../Sections/BannerSection";
import Collections from "../Sections/Collections";
import Features from "../Sections/Features";
import Location from "../Sections/location";
import ProductsSection from "../Sections/ProductsSection";
import SpecialProducts from "../Sections/SpecialProducts";
import ScrollAnimation from "../Components/ScrollAnimation";

const Hometemp = () => {
  return (
    <>
      <BannerSection />

      <ScrollAnimation>
        <Collections />
      </ScrollAnimation>

      <ScrollAnimation>
        <ProductsSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <SpecialProducts />
      </ScrollAnimation>

      <ScrollAnimation>
        <Features />
      </ScrollAnimation>

      <ScrollAnimation>
        <Location />
      </ScrollAnimation>
    </>
  );
};

export default Hometemp;
