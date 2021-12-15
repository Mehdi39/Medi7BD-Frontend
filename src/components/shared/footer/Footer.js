import React from "react";
import { AiFillHeart } from "react-icons/ai";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsPaypal,
  BsTwitter,
} from "react-icons/bs";
import {
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
  FaEnvelope,
} from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container mx-auto bg-blue-600 text-white p-10 w-full">
      <div>
        <div className="grid space-y-4 space-x-4 grid-cols-1 md:grid-cols-3">
          <div className="space-y-2">
            <h2 className="text-white text-3xl font-bold">
              Medi7BD 
            </h2>
            <p>
              Address:
              Medi7BD, 63/C, Lake Circus, Kalabagan, West Panthapath, Dhaka.
              Mobile:
              +880258155933,
              +8801319864049
              Email:
              support@medi7bd.com
            </p>
            <div className="flex space-x-4">
              <BsFacebook className="transition text-xl cursor-pointer hover:text-orange" />
              <BsGithub className="transition text-xl cursor-pointer hover:text-orange" />
              <BsTwitter className="transition text-xl cursor-pointer hover:text-orange" />
              <BsLinkedin className="transition text-xl cursor-pointer hover:text-orange" />
            </div>
          </div>
          <div className="flex md:justify-center">
            <div className="">
              <h2 className="text-white text-3xl font-bold">Quick Links</h2>
              <div className="flex flex-col list-none">
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    About Us
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    Latest News
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    Subscribe
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    Our Policies
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-white text-3xl font-bold">Newsletter</h2>
            <p>
              Join us for latest offer's update at Medi7BD.
            </p>

            <div className="bg-white flex space-x-1 items-center rounded-lg p-2   mt-4">
              <FaEnvelope className="text-lg text-blue-400" />
              <input
                className="bg-transparent w-full focus:outline-none border-none focus:ring-0 px-2"
                type="text"
                placeholder="Your Email:"
              />
            </div>
            <button className="bg-white text-gray-600 font-bold outline-none  border-blue-400 rounded-lg px-6 py-2 mt-2 w-full shadow-lg hover:text-gray-700 ">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex items-center justify-between">
          <p className="text-gray-200 text-sm">
            &copy;2021-2022{" "}
            <span className="text-sm font-bold text-whtie">
              Medi7BD
            </span>
            <br />
            Developed by <AiFillHeart className="inline text-orange" /> Mr. Mridha
          </p>

          <div className="flex flex-col items-center text-xl text-darkBlue">
            <h2 className="text-lg mb-1">We Accept</h2>
            <div className="flex items-center space-x-4">
              <FaCcVisa />
              <BsPaypal />
              <FaCcMastercard />
              <FaCcJcb />
              <FaCcDiscover />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
