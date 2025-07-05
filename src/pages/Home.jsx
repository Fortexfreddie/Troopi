import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";

const Home = () => {
    return (  
        <div className="flex flex-col min-h-screen bg-[#272727]">
            <div className="flex-grow">
                <div className="container mx-auto">
                    <Navbar />
                    <div className="p-4 bg-[#D4AA7D]/10">
                        <HeroSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;