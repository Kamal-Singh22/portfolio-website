import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-4">Kamal Singh</h2>
            <p className="text-neutral-300">
              Software Developer
            </p>
          </motion.div>

          {/* Social Media */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://facebook.com"
                className="text-blue-500 hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-blue-400 hover:text-white"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-pink-500 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kamalsingh22/"
                className="text-blue-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center text-neutral-400"
        >
          <p>© {new Date().getFullYear()} Kamal Singh. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
