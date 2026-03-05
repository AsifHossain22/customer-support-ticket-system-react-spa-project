import React from "react";
import { FaPlus } from "react-icons/fa6";

const Header = () => {
  return (
    <header
      className="bg-white border-b border-[#E9E9E9] sticky top-0 z-50
  backdrop-blur-md"
    >
      {/* Navbar */}
      <div className="navbar justify-between max-w-7xl mx-auto px-4 lg:px-0">
        <div className="navbar-start">
          {/* Logo */}
          <a
            href="#"
            className="hover:scale-110 transition-transform duration-300"
          >
            <span className="text-lg md:text-xl font-bold bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">
              CS - Ticket System
            </span>
          </a>
        </div>
        {/* DesktopNav */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 items-center">
            <li>
              <a
                href="#"
                className="btn font-sora bg-transparent shadow-none border-none text-[#00000090] hover:shadow-none p-0 hover:bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="btn font-sora bg-transparent shadow-none border-none text-[#00000090] hover:shadow-none p-0 hover:bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#changelog"
                className="btn font-sora bg-transparent shadow-none border-none text-[#00000090] hover:shadow-none p-0 hover:bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"
              >
                Changelog
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="btn font-sora bg-transparent shadow-none border-none text-[#00000090] hover:shadow-none p-0 hover:bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#download"
                className="btn font-sora bg-transparent shadow-none border-none text-[#00000090] hover:shadow-none p-0 hover:bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"
              >
                Download
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="btn font-sora bg-transparent shadow-none border-none text-[#00000090] hover:shadow-none p-0 hover:bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"
              >
                Contact
              </a>
            </li>

            {/* Button */}
            <div className="">
              <a className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3] transition-colors duration-500 text-white px-6 py-3 rounded-sm font-semibold cursor-pointer">
                <span className="inline-flex items-center justify-center gap-2">
                  <span>
                    <FaPlus />
                  </span>
                  <span>New Ticket</span>
                </span>
              </a>
            </div>
          </ul>
        </div>

        {/* MobileNav */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0"
          >
            <li>
              <a
                href="#"
                className="btn font-sora bg-transparent shadow-none border-none text-[#00000090] hover:shadow-none p-0 hover:bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#fixture"
                className="btn font-sora bg-transparent shadow-none border-none text-[#00000090] hover:shadow-none p-0 hover:bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"
              >
                Fixture
              </a>
            </li>
            <li>
              <a
                href="#teams"
                className="btn font-sora bg-transparent shadow-none border-none text-[#00000090] hover:shadow-none p-0 hover:bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"
              >
                Teams
              </a>
            </li>
            <li>
              <a
                href="#schedules"
                className="btn font-sora bg-transparent shadow-none border-none text-[#00000090] hover:shadow-none p-0 hover:bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"
              >
                Schedules
              </a>
            </li>

            {/* Button */}
            <div className="text-center my-5 lg:my-0">
              <a className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3] transition-colors duration-500 text-white px-6 py-3 rounded-sm font-semibold cursor-pointer">
                <span className="inline-flex items-center justify-center gap-2">
                  <span>
                    <FaPlus />
                  </span>
                  <span>New Ticket</span>
                </span>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
