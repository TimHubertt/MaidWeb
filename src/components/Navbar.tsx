"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./Logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [show, setShow] = useState(true)

  const lastY = useRef(0)
  const lastDirection = useRef<"up" | "down" | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const diff = currentY - lastY.current

      if (Math.abs(diff) < 5) return

      if (diff > 0 && currentY > 150) {
        if (lastDirection.current !== "down") {
          setShow(false)
          lastDirection.current = "down"
        }
      } else if (diff < 0) {
        if (lastDirection.current !== "up") {
          setShow(true)
          lastDirection.current = "up"
        }
      }

      lastY.current = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.div
        animate={{
          y: show ? 0 : -140,
        }}
        transition={{
          duration: 0.45,
          ease: [0.25, 1, 0.30, 1],
        }}
        className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] max-w-5xl px-4"
      >
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: show ? 1 : 0, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
                rounded-full px-4 sm:px-6 md:px-8 py-3
                flex items-center justify-between
                border-black/10
            "
            style={{
                // glassmorphism: frosted blur, subtle gradient, soft border and shadow
                background:
                    "linear-gradient(135deg, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.12) 60%, rgba(255,255,255,0.06) 100%)",
                backdropFilter: "blur(12px) saturate(140%)",
                WebkitBackdropFilter: "blur(12px) saturate(140%)",
                border: "1px solid rgba(255,255,255,0.28)",
                boxShadow:
                    "0 8px 30px rgba(15,23,42,0.12), inset 0 1px 0 rgba(255,255,255,0.45)",
            }}
        >
            <Link href="/" className="font-bold text-xl sm:text-2xl tracking-wider flex-shrink-0">
                <Logo className="h-6 sm:h-8 w-auto" />
            </Link>

            <div className="hidden md:flex gap-6 lg:gap-8 font-medium items-center">
                
                <Link href="#about" className="link--leda" data-text="Vision">
                    <span>Vision</span>
                </Link>

                <Link href="#benefits" className="link--leda" data-text="Benefits">
                    <span>Benefits</span>
                </Link>

                <Link href="#services" className="link--leda" data-text="Services">
                    <span>Services</span>
                </Link>
                
                <Link href="#contact" className="link--leda" data-text="Contact">
                    <span>Contact</span>
                </Link>
            </div>

            <button
                className="md:hidden text-[#000000] text-2xl flex-shrink-0 p-2 hover:bg-black/5 rounded-full transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? "✕" : "☰"}
            </button>
        </motion.nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="
                fixed top-[70px] sm:top-[82px] left-1/2 -translate-x-1/2
                w-[90%] sm:w-[75%] max-w-md
                backdrop-blur-xl bg-white/95
                border border-black/10 rounded-2xl shadow-2xl
                px-6 py-6 z-50
                md:hidden
              "
            >
              <div className="flex flex-col gap-4 backdrop-blur-sm">
                
                <Link 
                  href="#about" 
                  className="link--leda-mobile py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Vision
                </Link>

                <div className="border-t border-black/10" />
                
                <Link 
                  href="#benefits" 
                  className="link--leda-mobile py-2"
                  onClick={() => setIsOpen(false)}
                >
                Benefits
                </Link>
                <div className="border-t border-black/10" />

                  <Link 
                  href="#services" 
                  className="link--leda-mobile py-2"
                  onClick={() => setIsOpen(false)}
                >
                Services
                </Link>
                <div className="border-t border-black/10" />             
                
                <Link 
                  href="#contact" 
                  className="link--leda-mobile py-2"
                  onClick={() => setIsOpen(false)}
                >
                Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}