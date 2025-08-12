import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        
        {/* Brand & CTA */}
        <div>
          <div className="flex items-center gap-2">
            <img src="./Logo.png" alt="Zordie Logo" className="h-7 w-auto sm:h-8" />
            <span className="font-semibold text-lg sm:text-xl text-black">Zordie AI</span>
          </div>
          <p className="mt-4 text-gray-800 text-lg font-medium">
            Let&apos;s create <span className="text-blue-600">something</span><br />
            awesome <span className="text-blue-600">together!</span>
          </p>
          <Button
            to="/get-started"
            variant="accent"
            size="sm"
            className="mt-5 hover:scale-105 transition-transform"
          >
            Get Started
          </Button>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/features" className="hover:text-black">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-black">Pricing</Link></li>
            <li><Link to="/blog" className="hover:text-black">Blog</Link></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Located in Khanpur</li>
            <li>Uttar Pradesh, India</li>
            <li><a href="tel:+919044173100" className="hover:text-black">+91 9044173100</a></li>
            <li><a href="mailto:snehal.23546@sscbs.du.ac.in" className="break-all hover:text-black">
              snehal.23546@sscbs.du.ac.in
            </a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-4">Socials</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black">
                <FaTwitter /> Twitter (x)
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black">
                <FaDribbble /> Dribbble
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-black">Terms & Conditions</Link>
        </div>
        <p>Copyright ScalePlus. All right reserved.</p>
      </div>
    </footer>
  );
}
