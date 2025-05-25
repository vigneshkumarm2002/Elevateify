"use client";
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F564A9] rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-10"></div>

      <div className="container mx-auto px-4 pt-16 pb-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20 ">
          {/* Company Info & Address */}
          <div className="space-y-4">
            <h3 className="font-bricolage-bold text-2xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Elevateify
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
            Building bold, authentic brands through content that connects and marketing that performs.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F564A9] mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  123 Creative Street,
                  <br />
                  Design District,
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F564A9]" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 text-sm hover:text-[#F564A9] transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F564A9]" />
                <a
                  href="mailto:hello@elevateify.com"
                  className="text-gray-400 text-sm hover:text-[#F564A9] transition-colors"
                >
                  hello@elevateify.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bricolage-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#F564A9] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bricolage-semibold text-lg mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-[#F564A9] transition-colors"
                >
                  Organic Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-[#F564A9] transition-colors"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-[#F564A9] transition-colors"
                >
                  Social Media Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-[#F564A9] transition-colors"
                >
                  Performance Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="font-bricolage-semibold text-lg mb-4">
              Stay Connected
            </h4>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm focus:outline-none focus:border-[#F564A9] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#F564A9] hover:bg-[#f692c3] text-white font-medium rounded-full text-sm transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="pt-6">
              <h5 className="font-bricolage-medium text-sm mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-[#F564A9] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Large Brand Name - At bottom of grid */}
        <div className="relative flex items-center justify-center pointer-events-none z-0 -mt-20">
          <h1 className="font-bricolage-bold text-[15vw] text-center leading-none tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-gray-800 opacity-40 select-none">
            Elevateify
          </h1>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-gray-800 w-full relative z-20 "></div>

        {/* Copyright Section */}
        <div className="pt-8 pb-4 relative z-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Elevateify. All rights reserved.
            </p>

            {/* Legal Links */}
            {/* <div className="flex gap-6">
              <a href="#" className="text-gray-400 text-sm hover:text-[#F564A9] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-[#F564A9] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-[#F564A9] transition-colors">
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
