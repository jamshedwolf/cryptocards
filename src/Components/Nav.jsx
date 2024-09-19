import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // React Icons for the menu toggle
import { motion } from 'framer-motion'; // Framer Motion for animations
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';


function Nav() {
  const [isOpen, setIsOpen] = useState(false); // State to control menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
 
        <div className="     ">
          
      <div className='max-w-[1400px]   w-full  md:px-20 mx-auto'>
        {/* Laptop screen menu */}
        <div className="flex text-xl justify-between items-center p-4">
        <Link to="/">   <img src={logo} alt="Logo" className="w-15" /> </Link>
        
          <div className="gap-10 hidden lg:flex">
            <div className="flex font-bold cursor-pointer gap-2 items-center justify-between">
           <Link to="/">   <span className="">Home</span></Link>
           <Link to="/blog">    <span className="">Blog</span></Link>
           <Link to="/">     <span className="">Contact Us</span></Link>
             
           
            </div>
            <div className="items-center hidden lg:flex justify-between">
              <button className="px-4 py-2 text-white font-bold bg-[#1172A9] rounded-full min-w-fit">Get Started</button>
            </div>
          </div>

          {/* Mobile menu toggle button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
          >
            {/* Close Icon (X) */}
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-3xl">
              <FaTimes size={30} />
            </button>

            <nav className="flex flex-col gap-6 text-xl font-bold text-center">
              <span onClick={toggleMenu} className="cursor-pointer">Home</span>
              <span onClick={toggleMenu} className="cursor-pointer">Blog</span>
              <span onClick={toggleMenu} className="cursor-pointer">Contact Us</span>
              <button onClick={toggleMenu} className="px-4 py-2 text-white font-bold bg-[#1172A9] rounded-full min-w-fit">
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    
      
    </div>
  );
}

export default Nav;
