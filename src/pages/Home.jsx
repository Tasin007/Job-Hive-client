import Banner from "../components/Shared/Banner";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import Discover from "../components/Shared/Discover";
import Feature from "../components/Shared/Feature";
import Review from "../components/Shared/Review";
import JobTabs from "../components/Shared/JobTabs";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <JobTabs></JobTabs>
      <Feature></Feature>
      <Discover></Discover>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
