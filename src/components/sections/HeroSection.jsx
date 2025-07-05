import Carousel from "../Carousel";
import Sidebar from "../Sidebar";
import img from "../../assets/cus2.png";

const HeroSection = () => {    
    return (  
        <div className="flex gap-4 w-full">
            <div className="w-[15%]"><Sidebar /></div>
            <div className="w-[60%]"><Carousel /></div>
            <div className="w-[25%]">
                <div className="grid grid-cols-1 gap-4 h-full">
                    <div className="w-full h-full overflow-hidden backdrop-blur-md shadow-md rounded-md">
                        <img src={img} alt="" className="object-center object-cover h-full w-full" />
                    </div>
                    <div className="w-full h-full overflow-hidden backdrop-blur-md shadow-md rounded-md">
                        <img src={img} alt="" className="object-center object-cover h-full w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HeroSection;