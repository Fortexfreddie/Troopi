import Navbar from "../components/Navbar";

const Home = () => {
    return (  
        <div className="flex flex-col min-h-screen bg-[#272727]">
            <Navbar />
            <div className="flex-grow">
                <div className="container mx-auto">
                </div>
            </div>
        </div>
    );
}
 
export default Home;