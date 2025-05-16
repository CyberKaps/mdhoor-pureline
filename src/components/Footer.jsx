import { div } from "framer-motion/client";

const Footer = () => (
  <div>
    {/* Main Footer */}
    <footer className="bg-[#95be47]">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between md:items-start">
          {/* Left - Logo or Title */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Madhoor Pureline
              </span>
            </a>
          </div>

          {/* Right - Address & Contact */}
          <div className="flex flex-col sm:flex-row gap-10 text-white">
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase">Address</h2>
              <p className="max-w-xs">
                78, Garkheda BK. Bhusawal Road, Jamner, Jalgaon, MH - 424206
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase">Contact</h2>
              <p className="max-w-xs">+91-9876543210</p>
              <p className="max-w-xs">madhoorpureline@gmail.com</p>
            </div>
          </div>
        </div>

        {/* <hr className="my-6 border-white sm:mx-auto"  /> */}

        {/* Bottom section (hidden icons removed) */}
        {/* <div className="text-center text-white text-sm">
          Crafted with care by Madhoor Pureline
        </div> */}
      </div>
    </footer>

    {/* Copyright Footer */}
    <footer className="bg-[#ECE852] text-black text-center p-4">
      &copy; {new Date().getFullYear()} Madhoor Pureline | All rights reserved
    </footer>
  </div>
);

export default Footer;
