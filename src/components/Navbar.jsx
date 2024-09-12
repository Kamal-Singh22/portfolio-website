import profile from "../assets/kamal.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full text-white shadow-md z-50 bg-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4 lg:p-6">
        <img src={profile} alt="logo" className="w-16 h-16 rounded-full" />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
          >
            About Me
          </Link>
          <Link
            to="technologies"
            smooth={true}
            duration={500}
            className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
          >
            Technologies
          </Link>
          <Link
            to="internships"
            smooth={true}
            duration={500}
            className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
          >
            Internships
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
          >
            Contact
          </Link>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/kamalsingh22/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/Kamal-Singh22"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/kamalsingh.thakurii?igsh=dTBhdWVldGFxcGg1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-16 left-0 w-full bg-gray-900 text-center transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block py-4 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            onClick={toggleMenu}
          >
            About Me
          </Link>
          <Link
            to="technologies"
            smooth={true}
            duration={500}
            className="block py-4 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            onClick={toggleMenu}
          >
            Technologies
          </Link>
          <Link
            to="internships"
            smooth={true}
            duration={500}
            className="block py-4 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            onClick={toggleMenu}
          >
            Internships
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="block py-4 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block py-4 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
