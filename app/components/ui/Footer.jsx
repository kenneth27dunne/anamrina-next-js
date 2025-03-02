import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialIconWrapper from "../ui/SocialIconWrapper";
import Logo from '../../assets/Untitled-ALOGO.png'

const Footer = () => {
  return (
    <footer className="bg-[#08163B] text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Section - Logo & About */}
          <div>
            <Image src={Logo} alt="Anamrina Logo" width={120} height={50} />
            <p className="mt-4 text-sm">
              Connecting skilled professionals with your businesses for seamless remote work solutions.
              Your bridge to talent and productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/jobseekers">For Job Seekers</Link></li>
              <li><Link href="/employers">For Employers</Link></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg">Find Us On</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="">
                <SocialIconWrapper>
                    <FaFacebook className="scale-125"/>
                </SocialIconWrapper>
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <SocialIconWrapper innerClass="text-blue-700 bg-white">
                    <FaInstagram className="scale-110"/>
                </SocialIconWrapper>
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <SocialIconWrapper innerClass="text-blue-700 bg-white">
                    <FaXTwitter className="scale-110"/>
                </SocialIconWrapper>
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <SocialIconWrapper innerClass="text-blue-700 bg-white">
                    <FaLinkedinIn />
                </SocialIconWrapper>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <p>©{new Date().getFullYear()} All Rights Reserved</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
