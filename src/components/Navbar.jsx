import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const nav = document.querySelector("nav");
    const handleScroll = () => {
      if (window.scrollY > 10) {
        nav.classList.add("backdrop-blur-lg", "shadow-md");
      } else {
        nav.classList.remove("backdrop-blur-lg", "shadow-md");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Products', path: '/products' },
    { name: 'Our Process', path: '/our-process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#ECE852]/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-olive raleway-heading">Madhoor Pureline</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 font-medium text-olive">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:underline ${
                location.pathname === item.path ? 'font-semibold underline' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden text-olive">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#ECE852] px-4 py-2 space-y-3 text-olive font-medium shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
