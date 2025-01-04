import { LogOut } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
const [open,setopen] = useState(false)
const navigate = useNavigate()
  // Detect scroll to toggle styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handlelogout = () => {
    // Check if a token exists in localStorage
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      toast.success("Logout successfully", { position: "top-right" });
      navigate("/login");
    } else {
      toast.info("You're already logged out", { position: "top-right" });
    }
  };
  return (
    <div className='relative'>
      <div
      className={` w-11/12 mx-5  transition-all duration-300 cursor-pointer ${
        isScrolled
          ? 'bg-white bg-opacity-70 backdrop-blur-2xl rounded-lg  fixed top-0 z-50'
          : 'bg-transparent'
      }`}
      onClick={()=>{setopen(!open)}}
    >
      <div className="flex justify-end p-4 relative">
  <div className="rounded-full overflow-hidden border border-gray-300">
    <img
      src="https://i.pinimg.com/736x/89/11/34/89113446d68f58046aeccd89f0883a76.jpg"
      className="rounded-full h-16 md:h-20 lg:h-20 w-16 md:w-20 lg:w-20 object-cover"
      alt="Profile"
    />
  </div>
  <div className="absolute bottom-4 right-6 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
</div>

    </div>

  {
    open &&  <div className='absolute right-24' onClick={handlelogout}>
    <div className='bg-white shadow-xl px-4 py-2 cursor-pointer border-black border-2 rounded-lg w-fit'>
 <LogOut />
     </div>
    </div>
  }
    </div>
  );
};

export default Navbar;
