import Carousel from "../Carousel";

const HeroSection = () => {    
    return (  
        <div className="flex items-center gap-4 w-full">
            <div className="w-[20%]"></div>
            <div className="w-[60%]"><Carousel /></div>
            <div className="w-[20%]"></div>
        </div>
        
    );
}
 
export default HeroSection;