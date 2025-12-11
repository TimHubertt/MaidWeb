"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Logo from "./Logo"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !logoRef.current || !titleRef.current) return

    const ctx = gsap.context(() => {
      // Logo: Start dark → glow red on scroll
      gsap.fromTo(
        logoRef.current,
        {
          filter: "brightness(0.3) grayscale(100%)",
          scale: 0.95,
        },
        {
          filter: "brightness(1) grayscale(0%) drop-shadow(0 0 40px rgba(219, 0, 0, 0.5))",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        }
      )

      // Title text fade-in (subtle)
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#f8f9fb] py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Subtle Background Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-[#db0000]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 -right-32 w-80 h-80 bg-[#db0000]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-28 items-start mb-24">
          {/* Left: Title + Logo */}
          <div className="space-y-10">
            <h2
              ref={titleRef}
              className="font-inter text-3xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-[#000000] leading-tight"
            >
              {" "}
              <span className="inline-block">
                <motion.div
                  ref={logoRef}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="inline-block pl-1 -mt-4"
                >
                  <Logo className="h-20 md:h-20 lg:h-24 xl:h-28" />
                </motion.div>
              </span>
            </h2>
          </div>

          {/* Right: Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="font-inter text-md md:text-md lg:text-lg text-[#564d4d]/80 leading-relaxed max-w-2xl"
          >
            Zaneta is on a mission to uplift and empower domestic workers across India—
            giving them identity, security, benefits, and dignity.  
            <br /><br />
            We believe every household worker is a hero. Through modern systems,
            transparency, and professional support, we bridge the gap between
            households and workers—creating trust, stability, and long-term growth
            for both sides.
          </motion.p>
        </div>

        {/* Value Cards — Clean, Elegant, No Bounce */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
          {[
            {
              title: "Mission",
              text: "To provide dignity, benefits, and professional identity to domestic workers across India.",
            },
            {
              title: "Purpose",
              text: "To modernize household hiring and bring structure, support, and trust between families and workers.",
            },
            {
              title: "Impact",
              text: "Creating safer, happier, and more professionally supported households and workers, everywhere.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div
                className="
                  relative p-10 rounded-3xl
                  bg-white
                  border border-gray-100
                  shadow-lg shadow-gray-900/5
                  transition-all duration-500
                  group-hover:shadow-2xl group-hover:shadow-gray-900/10
                  group-hover:-translate-y-3
                  group-hover:border-gray-200
                "
              >
                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#db0000]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="relative text-3xl lg:text-4xl font-bold text-[#db0000] mb-6 tracking-tight">
                  {item.title}
                </h3>
                <p className="relative text-[#564d4d]/80 text-lg leading-relaxed">
                  {item.text}
                </p>

                {/* Clean bottom line accent */}
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}