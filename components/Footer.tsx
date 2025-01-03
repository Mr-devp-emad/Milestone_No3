import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Branding */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-xl font-semibold text-white">Nexa Cars</h1>
            <p className="text-sm">© {new Date().getFullYear()} Created By Emad Ahmed.</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=100027186373750&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-300 hover:text-white text-xl sm:text-sm"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/mr.emad09/profilecard/?igsh=MThqc2ozdTF1dWZmNA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-300 hover:text-white text-xl sm:text-sm"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-300 hover:text-white text-xl sm:text-sm"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/emaad-ahmed-7b1024314/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-white text-xl sm:text-sm"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Mr-devp-emad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-white text-xl sm:text-sm"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
