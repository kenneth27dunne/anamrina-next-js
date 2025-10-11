import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialIconWrapper from "../ui/SocialIconWrapper";
import Logo from '../../assets/Full name gradient white_300x87.png'

const Footer = () => {
  return (
    <footer className="bg-[#08163B] text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
          {/* Left Section - Logo & About */}
          <div>
            <Image src={Logo} alt="Anamrina Logo" width={500} height={150} />
            <p className="mt-4 text-sm text-gray-300">
              Connecting skilled professionals with your businesses for seamless remote work solutions. Your bridge to talent and productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/howItWorks">How It Works</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Ireland Office */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ireland Office</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                95 Millennium Business Park,<br />
                Cappagh Road, Ballycoolin,<br />
                Dublin 11, D11 YK25, Ireland
              </p>
              <p>
                <span className="font-medium">Phone:</span> +353 858 239 516
              </p>
              <p>
                <span className="font-medium">Email:</span><br />
                <a href="mailto:info@anamrinarecruitment.com" className="text-blue-300 hover:text-blue-200 transition-colors">
                  info@anamrinarecruitment.com
                </a>
              </p>
            </div>
          </div>

          {/* India Office */}
          <div>
            <h3 className="font-semibold text-lg mb-4">India Office</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                613-617, 6th Floor,<br />
                Motiaz Royal Business Park,<br />
                Zirakpur - 140603, Punjab, India
              </p>
              <p>
                <span className="font-medium">Phone:</span> +91 896 819 0404<br />
                <span className="font-medium">Phone:</span> +91 987 879 3002
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <p>©{new Date().getFullYear()} All Rights Reserved</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link>
            <Link href="/cookies-policy" className="hover:text-blue-300 transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
