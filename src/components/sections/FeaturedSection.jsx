import img from "../../assets/cus2.png";

const FeaturedSection = () => {
    return (  
        <div className="flex flex-col gap-4 w-full bg-[#1f1f1f] rounded-xl shadow-md p-4 backdrop-blur-md">
            <div className="border-b border-[#D4AA7D]/30 pb-2">
                <h1 className="text-3xl text-[#D4AA7D] font-bold uppercase">daily deals</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                <div className="h-64 lg:h-80 bg-white/10 border border-white/20 overflow-hidden backdrop-blur-md shadow-md rounded-xl hover:shadow-[#D4AA7D]/30 transition-shadow duration-300 cursor-pointer">
                    <div className="h-1/2 relative">
                        <div className="absolute inset-0 w-full h-full"></div>
                        <img src={img} alt="" className="w-full h-full object-center object-cover" />
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    );
}
 
export default FeaturedSection;