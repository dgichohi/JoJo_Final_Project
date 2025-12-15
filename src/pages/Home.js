import BackgroundLayout from "../components/BackgroundLayout";
import PartCard from "../components/PartCard";
import homeData from "../data/homeCardData";
import "../App.css";
import HomeCarousel from "../components/HomeCarousel";
import Header from "../components/Header";
import PageBrowserTitle from "../components/PageBrowserTitle";

const Home = () => {
  return (
    <BackgroundLayout image="/images/jojo-bizarre-adventure.jpg">
      {PageBrowserTitle("JoJo’s Bizarre Adventure")}
      <Header showLogo={true} />

      <HomeCarousel />

      <h1 className="text-4xl font-bold text-center mt-12 mb-6">
          JoJo’s Bizarre Adventure Parts 1–5  
      </h1>

      <p className="text-center mb-6">Select a part to learn more.</p>

      <div className="home-card-grid">
        {homeData.map((part, index) => (
          <PartCard key={index} part={part} />
        ))}
      </div>
    </BackgroundLayout>
  );
};

export default Home;
