"use client"

import { motion } from "framer-motion"

import Spin from "./Spin"

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen w-full 
        flex flex-col md:flex-row items-center justify-between 
        overflow-hidden 
        bg-white
        px-4 sm:px-6 md:px-8 lg:px-12
        pt-30 md:pt-4 
      "
    >
     <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/plain.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* LEFT TEXT CONTENT */}
      <div
        className="
          relative z-10 

          w-full md:w-1/2 lg:w-3/5
          max-w-4xl 
          flex flex-col gap-4 sm:gap-6
          text-center md:text-left
        "
      >
        <motion.h1
          className="
            font-inter 
            text-[#000000]
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
            leading-tight
            font-extrabold
            tracking-tight
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Empowering Every{" "}
          <span className="text-[#db0000] font-black block sm:inline">
            Household Hero
          </span>
        </motion.h1>

        <motion.p
          className="
            font-inter
            text-base sm:text-lg md:text-xl 
            text-[#000000]/80 
            max-w-xl
            mx-auto md:mx-0
          "
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Zaneta brings dignity, respect, and essential benefits to domestic workers— 
          while giving households access to trusted, professional services.
        </motion.p>

        {/* BUTTONS */}
        <motion.div 
          className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          
          <a href="#benefits" className="button--telesto font-inter w-full sm:w-auto text-center">
            <span><span>Learn More</span></span>
          </a>

          <a
           href="https://wa.me/916305339775?text=Hi%20Zaneta%2C%20I'm%20looking%20for%20help." 
          target="_blank"

          className="button--telesto font-inter w-full sm:w-auto text-center">
            <span><span>Book A Maid</span></span>
          </a>
        </motion.div>
      </div>

      {/* RIGHT EMBLEM */}
      <motion.div
        className="
          flex items-center justify-center 
          w-full md:w-1/2 lg:w-2/5
          mt-8 md:mt-0
          md:pr-8 lg:pr-16
        "
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3}}
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[350px]"
        >
          <Spin />
        </motion.div>
      </motion.div>

    </section>
  )
}