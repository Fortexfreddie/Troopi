import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";

const Home = () => {
    return (  
        <div className="flex flex-col min-h-screen bg-[#272727]">
            <Navbar />
            <div className="flex-grow">
                <div className="container mx-auto p-4">
                    <div className="flex items-center gap-4 w-full">
                        <div className="w-[20%]"></div>
                        <div className="w-[60%]"><HeroSection /></div>
                        <div className="w-[20%]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;