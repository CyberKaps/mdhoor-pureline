import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import "../App.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Products', path: '/products' },
    { name: 'Our Process', path: '/our-process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#ECE852] shadow z-50 raleway">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-xl text-olive font-semibold">Madhoor Pureline</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 font-medium text-olive">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="hover:underline">
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

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#ECE852] px-4 py-2 space-y-3 text-olive font-medium shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} // close menu after click
              className="block hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
