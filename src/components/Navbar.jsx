import TopBanner from "./TopBanner";
import NavDropdown from "./NavDropdown";
import Searchbar from "./SearchBar";
import { FaBars, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);

    return (  
        <nav className="flex flex-col bg-transparent shadow-sm p-2">
            <div className="z-20 flex items-center justify-between py-2 px-6 bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] shadow-md rounded-xl">
                <span className="lg:hidden text-[#D4AA7D] cursor-pointer"><FaBars /></span>
                <TopBanner />
                <NavDropdown />
            </div>
            <div className='flex items-center justify-center lg:justify-between gap-6 py-4 px-10'>
                <h1 className='text-4xl lg:text-5xl text-[#D4AA7D] font-bold uppercase cursor-pointer'>Tr<span className='inline-block animate-bounce'>oo</span>pi</h1>
                <span onClick={() => setShowSearch(!showSearch)} className="lg:hidden text-[#D4AA7D] bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.2)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] shadow-md rounded-full p-2 cursor-pointer transition-colors duration-200"><FaSearch /></span>
                <div className="w-full max-w-xl hidden lg:block">
                    <Searchbar />
                </div>
            </div>
            <div className={`block lg:hidden transition-all duration-500 px-6 ${showSearch ? 'opacity-100 translate-y-0 max-h-[200px] mt-4' : 'opacity-0 -translate-y-2 max-h-0'} `}>
                <Searchbar />
            </div>
        </nav>
    );
}
 
export default Navbar;