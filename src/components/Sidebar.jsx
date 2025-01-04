import {
    BadgeHelp,
    BadgePlus,
    ChevronsLeft,
    ChevronsRight,
    ChevronUp,
    ChevronDown,
    CircleDot,
    Codesandbox,
    House,
} from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [active, setActive] = useState(0); 
    const [isOpen, setIsOpen] = useState(false); 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

    return (
        <div
            className={`h-screen bg-purple-900 transition-all duration-300 ${
                isSidebarOpen ? 'w-60' : 'w-20'
            }`}
        >
            {/* Header Section */}
            <header className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-2">
                    <Codesandbox color="white" size={isSidebarOpen ? 50 : 40} />
                    {isSidebarOpen && (
                        <span className="font-bold text-white text-2xl">DhruTrac</span>
                    )}
                </div>
                {isSidebarOpen ? (
                    <div>
                        <ChevronsLeft
                        color="white"
                        className="cursor-pointer"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    </div>
                ) : (
                   <div>
                     <ChevronsRight
                        color="white"
                        className="cursor-pointer"
                        onClick={() => setIsSidebarOpen(true)}
                    />
                   </div>
                )}
            </header>

            {/* Navigation Section */}
            <section>
                <div className="flex flex-col gap-4 px-4 mt-10">
                    {/* Home Item */}
                    <Link to={"/"}
                        className={`flex items-center gap-2 px-3 py-2 cursor-pointer text-white hover:bg-slate-100 hover:bg-opacity-30 hover:rounded-full hover:text-black ${
                            active === 0 ? 'bg-white text-black rounded-full' : ''
                        }`}
                        onClick={() => setActive(0)}
                    >
                        <div className={`${ active === 0 && 'text-black'}`}><House /></div>
                        {isSidebarOpen && <span className={`${ active === 0 && 'text-black'}`}>Home</span>}
                    </Link>

                    {/* Masters Item */}
                    <li
                        className={`flex items-center justify-between px-3 py-2 cursor-pointer text-white hover:bg-slate-100 hover:bg-opacity-30 hover:rounded-full hover:text-black ${
                            active === 1 ? 'bg-white text-black rounded-full' : ''
                        }`}
                        onClick={() => {
                            setActive(1);
                            setIsOpen(!isOpen);
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <BadgePlus className={`${ active === 1 && 'text-black'}`} />
                            {isSidebarOpen && <span className={`${ active === 1 && 'text-black'}`}>Masters</span>}
                        </div>
                        {isSidebarOpen && (isOpen ? <ChevronUp /> : <ChevronDown />)}
                    </li>

                    {/* Sub-item (Branch) */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-20' : 'max-h-0'
                        }`}
                    >
                        <Link to={"/branch"}
                            className={`flex items-center gap-4 px-3 py-2 cursor-pointer text-white hover:bg-slate-100 hover:bg-opacity-30 hover:rounded-full hover:text-black ${
                                active === 2 ? 'bg-white text-black rounded-full' : ''
                            }`}
                            onClick={() => setActive(2)}
                        >
                            <CircleDot className={`${ active === 2 && 'text-black'}`}/>
                            {isSidebarOpen && <span className={`${ active === 2 && 'text-black'}`}>Branch</span>}
                        </Link>
                    </div>

                    {/* Help Item */}
                    <a href='https://digitracimages.s3.ap-south-1.amazonaws.com/Help/Fuel_Management_User_Manual_13042024.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250103T140546Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIAQIFGXUJPYXZ3Q2VP%2F20250103%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=6773e0a010052c96284f5c0cd08722ea43c027f23c13b70a79b8736c8b97da75' target='_blank'
                        className={`flex items-center gap-2 px-3 py-2 cursor-pointer text-white hover:bg-slate-100 hover:bg-opacity-30 hover:rounded-full hover:text-black `}
                    >
                        <BadgeHelp/>
                        {isSidebarOpen && <span >Help</span>}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Sidebar;
