"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Features", href: "/features" },
  { name: "Solutions", href: "/solutions" },
  { name: "For Companies", href: "/companies" },
  { name: "For Job Seekers", href: "/job-seekers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left: Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <img src='./Logo.png' alt="Zordie Logo" className="h-7 w-auto sm:h-8" />
            <span className="font-semibold text-black text-lg sm:text-xl">
              Zordie AI
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center space-x-8 text-sm text-gray-800"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="hover:text-black transition-colors duration-200 relative group"
                >
                  {item.name}
                  <motion.span 
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Get Started / Mobile Toggle */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Link
              to="/get-started"
              className="hidden md:inline-block bg-black text-white text-sm px-5 py-2 rounded-full hover:opacity-90 transition-colors duration-200 hover:scale-105 transition-transform"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className="rotate-180 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="rotate-0 transition-transform duration-300" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="px-4 py-4 space-y-3"
            >
              {menuItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    to={item.href}
                    className="block text-gray-800 hover:text-black transition-colors duration-200 py-2 px-2 hover:bg-gray-50 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Link
                  to="/get-started"
                  className="block bg-black text-white text-sm px-5 py-2 rounded-full hover:opacity-90 transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}