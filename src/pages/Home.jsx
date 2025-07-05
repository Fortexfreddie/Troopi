import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";

const Home = () => {
    return (  
        <div className="flex flex-col min-h-screen bg-[#272727]">
            <Navbar />
            <div className="flex-grow">
                <div className="container mx-auto p-4">
                    <HeroSection />
                </div>
            </div>
        </div>
    );
}
 
export default Home;