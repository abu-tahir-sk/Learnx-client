import Banner from "../../components/Banner";
import FAQSection from "../../components/FAQSection";
import FeatureSection from "../../components/FeatureSection";

const Home = () => {
      return (
            <div className="mt-20">
                  <Banner/>
                  <FeatureSection/>
                  <FAQSection/>
            </div>
      );
};

export default Home;