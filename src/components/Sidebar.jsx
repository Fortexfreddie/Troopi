import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
    return (  
        <aside className="w-full h-full bg-[#272727] text-white hidden lg:block backdrop-blur-md shadow-md rounded-b-xl overflow-hidden">
            <span className="flex items-center gap-4 text-md py-3 px-4 text-[#272727] bg-[#D4AA7D]">
                <FaBars />
                <h2 className="font-bold uppercase">Category</h2>
            </span>
            <ul className="space-y-4 p-4">
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">🏠 Dashboard</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">🛒 Products</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">💼 Services</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">⚙ Settings</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer">➕ See More</li>
            </ul>
        </aside>
    );
}
 
export default Sidebar;