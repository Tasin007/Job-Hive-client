import Banner from "../components/Shared/Banner";
import Testimonials from "../components/Shared/Testimonials";
import Navbar from "../components/Shared/Navbar"
import Footer from "../components/Shared/Footer"
import Discover from "../components/Shared/Discover";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Testimonials></Testimonials>
            <Discover></Discover>
            <Footer></Footer>
        </div>
    );
};

export default Home;