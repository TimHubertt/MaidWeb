"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  ShieldCheck, 
  GraduationCap, 
  UserCheck, 
  Clock, 
  Zap 
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface Benefit {
  icon: any
  title: string
  description: string
  gradient: string
}

const benefits: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Reliable & Background Verified",
    description: "We don't take every maid that comes to us. They have to pass our rigorous examination before they come to your home.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: GraduationCap,
    title: "Well Trained Maids",
    description: "Every maid goes through a comprehensive 30-day training program before they become verified.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: UserCheck,
    title: "Maid Replacement",
    description: "If your maid is on leave, we provide immediate replacement so your household routine is never disrupted.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Clock,
    title: "Attendance Tracking",
    description: "Real-time attendance monitoring with detailed reports and notifications for complete transparency.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Quick Scheduling",
    description: "Book a maid and they are at your home very quickly. Fast, reliable service when you need it most.",
    gradient: "from-yellow-500 to-amber-500"
  },
]

export default function BenefitsForHouseholds() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const orbs = sectionRef.current!.querySelectorAll(".benefit-orb")

      orbs.forEach((orb) => {
        gsap.fromTo(orb, 
          {
            y: 120,
            opacity: 0,
            scale: 0.8,
            rotation: -15,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.4,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: orb,
              start: "top 85%",
              end: "top 55%",
              scrub: 1,
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #db0000 0%, transparent 50%), radial-gradient(circle at 75% 75%, #db0000 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full bg-[#db0000]/10 text-[#db0000] font-bold text-sm mb-6"
          >
            FOR HOUSEHOLDS
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            What's Good for <span className="text-[#db0000]">Households</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience peace of mind with our verified professionals and comprehensive household services
          </p>
        </motion.div>

        {/* Responsive Grid: 1col (mobile) → 2col (md) → 2x2 + 1 centered (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* First 4 Benefits - Normal Grid */}
          {benefits.slice(0, 4).map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                className="benefit-orb group relative"
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`
                    relative h-full p-8 rounded-3xl
                    bg-white/80 backdrop-blur-xl
                    border border-white/20
                    shadow-xl shadow-gray-800/10
                    overflow-hidden
                    transition-all duration-500
                    group-hover:shadow-3xl group-hover:shadow-gray-900/20
                  `}
                  style={{
                    transform: "translateZ(0)",
                    background: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {/* Floating Gradient Orb Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className={`absolute -inset-10 bg-gradient-to-br ${benefit.gradient} blur-3xl opacity-30`} />
                  </div>

                  {/* Icon Orb */}
                  <div className={`
                    relative z-10 w-16 h-16 rounded-2xl
                    bg-gradient-to-br ${benefit.gradient}
                    flex items-center justify-center
                    shadow-xl mb-6
                    group-hover:scale-110 group-hover:rotate-12
                    transition-all duration-500
                  `}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#db0000] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Bottom Glow Line */}
                  
                </div>
              </motion.div>
            )
          })}

          {/* 5th Benefit - Full Width & Perfectly Centered on All Screens */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <motion.div
              className="benefit-orb group w-full max-w-2xl"
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {(() => {
                const b = benefits[4]
                const Icon = b.icon
                return (
                  <div className={`
                    relative p-10 rounded-3xl
                    bg-white/80 backdrop-blur-xl
                    border border-white/20
                    text-white
                    hover:bg-gradient-to-br from-yellow-100 to-amber-300
                    shadow-xl shadow-gray-800/10
                    overflow-hidden
                    transition-all duration-500
                    group-hover:shadow-2xl
                  `}>
                    {/* Inner Glass Layer */}
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />
                    
                    <div className="relative z-10 flex flex-col md:flex-col gap-8 md:text-left">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center shadow-xl flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl text-gray-900 font-bold mb-4">
                          {b.title}
                        </h3>
                        <p className=" text-black/60 leading-relaxed">
                          {b.description}
                        </p>
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl border-4 border-white/30 scale-95 group-hover:scale-100 transition-transform duration-700" />
                  </div>
                )
              })()}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}