"use client";
import { ShieldCheck, HeartPulse, Clock, GraduationCap, Hospital, SparkleIcon } from "lucide-react";
import { motion } from "framer-motion"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Maids() {
  return (
    <section className="relative min-h-screen bg-pink-50 pb-12 overflow-hidden ">
        <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
                <span className = "inline-block px-6 py-2 font-semibold uppercase rounded-full bg-[#db0000]/10 text-[#db0000] mt-16 mb-6">
                For Maids
                </span>
                <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-8 tracking-tight">
                What's good for {" "}
                <span className="text-[#db0000] tracking-tight">
                    Maids?
                </span>
                </h2>
                <p className="text-md text-gray-600 mx-auto max-w-2xl">Over 100 maids are registered on our platform and are enjoying the benefits </p>
            </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 sm:px-6 lg:px-0 gap-10 max-w-6xl mx-auto pt-16 pb-8">
            <motion.div 
            whileHover={{y:-10, scale:1.02}}
            transition={{type: "spring", stiffness: 260, damping: 20}}
            className="h-auto rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-xl shadow-md p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                    <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Provident Fund (PF)</h3>
                <p className="text-gray-600">Provident Fund contributions made easy through our platform for a secure future</p>
            </motion.div>

             <motion.div
             whileHover={{y:-10, scale:1.02}}
             transition={{type: "spring", stiffness: 260, damping: 20}}
             className="h-auto rounded-2xl border border-gray-200 shadow-md bg-white/80 backdrop-blur-xl p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                    <Hospital className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2"> ESI</h3>
                <p className="text-gray-600">
                    Comprehensive health coverage with Employee State Insurance (ESI) for our maids
                </p>
             </motion.div>

              <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{type: "spring", stiffness: 260, damping: 20}}
              className="h-auto rounded-2xl border border-gray-200 backdrop-blur-xl shadow-md bg-white/80 p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-400 mb-4">
                    <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2"> Paid Leave</h3>
                <p className="text-gray-600">
                    Enjoy paid leave benefits, ensuring rest and care for our dedicated maids
                </p>
              </motion.div>

               <motion.div
               whileHover={{y:-10, scale: 1.02}}
               transition={{type: "spring", stiffness: 260, damping: 20}}
               className="h-auto rounded-2xl border border-gray-200 backdrop-blur-xl shadow-md bg-white/80 p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-400 mb-4">
                    <HeartPulse className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2"> Health Insurance</h3>
                <p className="text-gray-600">
                    Comprehensive health insurance plans tailored for our maids' well-being
                </p>
               </motion.div>

                <div className="flex justify-center md:col-span-2 lg:col-span-2">
                <motion.div
                whileHover={{y:-10, scale: 1.02}}
                transition={{type: "spring", stiffness: 260, damping: 20}}
                className="h-auto rounded-2xl border border-gray-200 bg-white/80 shadow-md backdrop-blur-xl p-8">
                <div className=" w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2"> Training & Certification</h3>
                <p className="text-gray-600">
                    Access to training programs and certifications which can help you earn upto Rs. 50,000 per month
                </p>
                </motion.div>
                </div>                               
        </div>

        <div className="pb-4 flex items-center justify-center ">
            
                <a 
                href = "https://wa.me/916305339775?text=Hi%20Zaneta%2C%20I'm%20looking%20for%20work."
                target="_blank"
                rel ="noopener noreferrer"
                className=" inline-block
                relative mx-auto flex items-center gap-4
                px-10 py-7
                bg-[#db0000]
                hover:from-red-600 hover:to-rose-700
                text-white font-black text-2xl md:text-3xl
                rounded-3xl shadow-2xl
                transform transition-all duration-300
                hover:scale-110 active:scale-95
                animate-pulse-slow
                overflow-hidden
                group
                ">  
                {/* Floating sparkle icons */}
                <Sparkle className="absolute -left-2 text-yellow-300 text-4xl animate-bounce" />
            
                <Sparkle className="absolute -right-1 text-yellow-300 text-5xl animate-bounce delay-300" />
                    
                <Sparkle className="absolute -top-1 left-1/3 text-yellow-300 text-3xl animate-bounce delay-700" />   
            
                <Sparkle className="absolute -bottom-3 left-1/3 text-yellow-300 text-3xl animate-bounce delay-700" />
                
                {/* Main text */}
                <span className="relative z-10 drop-shadow-2xl">
                    Join as a Maid Now!
                </span>

                {/* Glowing border */}
                <span className="absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                
                </a> 
        </div>
    </section>
  )
}