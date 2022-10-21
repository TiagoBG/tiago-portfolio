import "./home.css";
import ClientsSection from "../../components/ClientsSection/ClientsSection";
import ReviewsCarousel from "../../components/ReviewsCarousel/ReviewsCarousel";
import Profile from "../../components/Profile/Profile";

const Home = () => {
  return (
    <section className="section__main">
    <Profile />
      <ReviewsCarousel />
      <div className="section__main--clients">
        <ClientsSection />
      </div>
    </section>
  );
};

export default Home;
