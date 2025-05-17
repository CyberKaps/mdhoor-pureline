import { Link } from 'react-router-dom';
import { FaInstagramSquare, FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';
import "../App.css";

const Footer = () => {
  return (
    <>
      {/* Main Footer Section */}
      <footer className="bg-[#95be47] text-white px-6 py-10">
        <div className='text-center mb-7 text-2xl font-extrabold'>
          Madhoor Pureline
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">


          {/* Address */}
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase">Address</h2>
            <p>78, Garkheda BK. Bhusawal Road,<br />Jamner, Jalgaon, MH - 424206</p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase">Contact</h2>
            <p>📞 +91 94230 41414</p>
            <p>✉ madhoorpureline@gmail.com</p>
            <Link to="/contact" className="underline text-white">More</Link>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase">Follow Us</h2>
            <div className="flex gap-4 text-2xl">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare className="hover:text-yellow-300 transition" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="hover:text-yellow-300 transition" />
              </a>
              <a href="https://wa.me/919423041414" target="_blank" rel="noopener noreferrer">
                <FaWhatsappSquare className="hover:text-yellow-300 transition" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <footer className="bg-[#ECE852] text-black text-center p-4 text-sm">
        &copy; {new Date().getFullYear()} Madhoor Pureline | All rights reserved
      </footer>
    </>
  );
};

export default Footer;
