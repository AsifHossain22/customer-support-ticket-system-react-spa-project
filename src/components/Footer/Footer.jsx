import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black pt-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Brand */}
          <div>
            <h6 className="text-white font-medium text-lg md:text-xl mb-4">
              CS - Ticket System
            </h6>
            <p className="text-[#A1A1AA] w-full md:w-8/12">
              A smart ticketing platform designed to simplify support, improve
              response times and enhance customer satisfaction.
            </p>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-white font-medium text-lg md:text-xl mb-4">
              Company
            </h6>
            <ul>
              <li>
                <a
                  href=""
                  className="text-[#A1A1AA] hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#A1A1AA] hover:text-white transition-colors duration-300"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#A1A1AA] hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-white font-medium text-lg md:text-xl mb-4">
              Services
            </h6>
            <ul>
              <li>
                <a
                  href=""
                  className="text-[#A1A1AA] hover:text-white transition-colors duration-300"
                >
                  Product & Services
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#A1A1AA] hover:text-white transition-colors duration-300"
                >
                  Customer Stories
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#A1A1AA] hover:text-white transition-colors duration-300"
                >
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h6 className="text-white font-medium text-lg md:text-xl mb-4">
              Information
            </h6>
            <ul>
              <li>
                <a
                  href=""
                  className="text-[#A1A1AA] hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#A1A1AA] hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#A1A1AA] hover:text-white transition-colors duration-300"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h6 className="text-white font-medium text-lg md:text-xl mb-4">
              Social
            </h6>
            <div className="flex items-center gap-4">
              {/* Twitter-X */}
              <a href="">
                <span className="text-[#A1A1AA] hover:text-white transition-colors duration-300 text-xl">
                  <FaXTwitter />
                </span>
              </a>
              {/* LinkedIn */}
              <a href="">
                <span className="text-[#A1A1AA] hover:text-white transition-colors duration-300 text-xl">
                  <FaLinkedinIn />
                </span>
              </a>
              {/* Facebook */}
              <a href="">
                <span className="text-[#A1A1AA] hover:text-white transition-colors duration-300 text-xl">
                  <FaFacebookF />
                </span>
              </a>
              {/* Email */}
              <a href="">
                <span className="text-[#A1A1AA] hover:text-white transition-colors duration-300 text-xl">
                  <IoMail />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-4 lg:px-0 border-t border-[#D9D9D990] py-7 mt-10">
          <p className="text-center text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by CS -
            Ticket System
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
