"use client";

import Logo from "./Logo";
import Emblem from "./Emblem";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
    id="contact"
    className="relative overflow-hidden bg-gradient-to-b from-[#f8f9a4] via-[#fff5f5] to-[#ffe5e5] text-black pt-20 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* TOP SECTION — BRAND MESSAGE */}
        <div className="flex flex-col items-center text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              font-black leading-tight tracking-tight 
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              text-black
            "
          >
            Building the Future of{" "}
            <span className="block text-[#db0000]">Domestic Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-gray-800 text-lg max-w-xl"
          >
            Join hands for a better living.
          </motion.p>
        </div>

       {/* MIDDLE GRID */}
<div
  className="
    mt-24
    grid grid-cols-1
    lg:grid-cols-4
    gap-12
  "
>
  {/* Logo */}
  <div className="flex flex-col items-start">
    <Logo className="w-32 h-auto" />
  </div>

  {/* Social Media */}
  <div className="flex flex-col items-start">
    <h3 className="text-xl font-bold mb-3">Follow Us</h3>
    <div className="flex items-center gap-6 text-gray-700">
      <a href="https://www.facebook.com" target="_blank" className="hover:text-[#db0000] transition">
        <Facebook className="w-6 h-6" />
      </a>

      <a href="https://www.instagram.com" target="_blank" className="hover:text-[#db0000] transition">
        <Instagram className="w-6 h-6" />
      </a>

      <a href="https://www.twitter.com" target="_blank" className="hover:text-[#db0000] transition">
        <Twitter className="w-6 h-6" />
      </a>

      <a href="https://www.linkedin.com" target="_blank" className="hover:text-[#db0000] transition">
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  </div>

  {/* Contact Us */}
  <div className="flex flex-col items-end text-right">
    <h3 className="text-xl font-bold mb-3">Contact Us</h3>

    <div className="flex items-center gap-3 text-gray-800 justify-end">
      <Phone className="w-5 h-5 text-[#db0000]" />
      <span className="font-semibold">+91-6305339775</span>
    </div>

    <div className="flex items-center gap-3 text-gray-800 justify-end mt-2">
      <Mail className="w-5 h-5 text-[#db0000]" />
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@zaneta.in"
        target="_blank"
        className="font-semibold hover:text-[#db0000]"
      >
        info@zaneta.in
      </a>
    </div>
  </div>

  {/* Address */}
  <div className="flex flex-col items-end text-right">
    <h3 className="text-xl font-bold mb-3">Address</h3>

    <p className="text-gray-800 leading-relaxed">
      Zaneta Services Pvt Ltd,<br />
      123 Main Street,<br />
      Hyderabad,<br />
      India
    </p>

    <a
      href="https://www.google.com/maps/search/?api=1&query=Hyderabad+India"
      target="_blank"
      className="mt-3 text-[#db0000] px-3 py-2 font-bold hover:underline"
    >
      Get Directions →
    </a>
  </div>
</div>

{/* BOTTOM AREA WITH EMBLEM + BORDER */}
<div className="relative mt-20">

  {/* Emblem perfectly centered ON the line */}
 
    <div className="border-b-1 border-black/20"></div>
  <p className="pt-6 text-center text-sm text-gray-600 font-medium">
    © {new Date().getFullYear()} Zaneta. All rights reserved.
  </p>
  
</div>


      </div>
    </footer>
  );
}
