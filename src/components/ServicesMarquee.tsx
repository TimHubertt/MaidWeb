'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationControls } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const servicesList = [
  {
    image: '/images/regular.png',
    title: 'Regular Cleaning',
    desc: 'Daily sweeping, mopping, dusting',
    info: 'Our regular cleaning includes routine dusting, vacuuming, mopping and surface sanitization to keep your home fresh every week.',
  },
  {
    image: '/images/deep.png',
    title: 'Deep Cleaning',
    desc: 'Kitchens, bathrooms, hard-to-reach areas',
    info: 'A thorough top-to-bottom service targeting build-up in kitchens and bathrooms, plus detailed attention to corners, vents and grout.',
  },
  {
    image: '/images/elder.png',
    title: 'Human Care',
    desc: 'Elderly care & Babysitting',
    info: 'Compassionate, trained caregivers provide companionship, light assistance and safe supervision tailored to individual needs.',
  },
  {
    image: '/images/dish.png',
    title: 'Dishwashing',
    desc: 'Professional kitchen cleanup',
    info: 'Fast and efficient dishwashing service for homes and events — we handle delicate glassware and commercial loads with care.',
  },
  {
    image: '/images/laundry.png',
    title: 'Laundry & Ironing',
    desc: 'Washing, folding, perfect ironing',
    info: 'Full-service laundry: gentle wash cycles, precise ironing and careful folding so clothes look and feel their best.',
  },
  {
    image: '/images/cook.png',
    title: 'Cooking',
    desc: 'Home-cooked meals with love',
    info: 'Enjoy nutritious, home-cooked meals prepared to your preferences, including meal planning and tidy kitchen cleanup.',
  },
  {
    image: '/images/house.png',
    title: 'Housekeeping',
    desc: 'Full-time care for your home',
    info: 'Comprehensive housekeeping covering organization, regular maintenance tasks and overseeing household needs.',
  },
]

export default function ServicesMarquee() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <>
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </>
  )
}

/* ==================== DESKTOP – RED FINAL SCREEN FADES OUT WHEN NEXT SECTION STARTS ==================== */
function DesktopVersion() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end 250%'],
  })

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 65 })
  const x = useTransform(smoothProgress, [0, 0.99], [0, -432 * 7])

  // Appear
  const bgOpacity = useTransform(smoothProgress, [0.72, 0.88], [0, 1])
  const contentOpacity = useTransform(smoothProgress, [0.78, 0.92], [0, 1])
  const contentY = useTransform(smoothProgress, [0.78, 0.92], [60, 0])

  // Fade out when next section (Maids) starts entering
  const fadeOut = useTransform(smoothProgress, [0.96, 1], [1, 0], { clamp: true })

  return (
    <section ref={containerRef} className="relative bg-white services-scroll-zone">
      <div className="absolute inset-0 bg-white z-0">

      </div>
      <div className="h-screen sticky top-0 overflow-hidden bg-white flex flex-col">
        <div className="flex items-center justify-center px-8 pt-12 pb-6 flex-shrink-0">
          <div className="text-center max-w-4xl">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full bg-red-500/10 text-red-600 font-bold text-s mb-4"
            >
              OUR SERVICES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight"
            >
              We Take Care Of
              <span className="block text-red-600 tracking-tight">Everything</span>
            </motion.h2>
          </div>
        </div>

        <div className="flex-1 flex items-center overflow-hidden px-8">
          <motion.div style={{ x }} className="flex gap-8">
            {servicesList.concat(servicesList).map((service, i) => (
              <ServiceCard key={`desk-${i}`} {...service} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* RED BACKGROUND – fades out at 92% */}
      <motion.div
        style={{ opacity: useTransform([bgOpacity, fadeOut], ([a, b]) => Math.min(a as number, b as number)) }}
        className="fixed inset-0 bg-[#db0000] z-40 pointer-events-none"
      />

      {/* TEXT + BUTTON – also fade out at 92% */}
      <motion.div
        style={{
          opacity: useTransform([contentOpacity, fadeOut], ([a, b]) => Math.min(a as number, b as number)),
          y: contentY,
        }}
        className="fixed inset-0 z-50 pointer-events-none"
      >
        <div className="h-screen flex items-center pl-4 sm:pl-12 md:pl-20 lg:pl-32 xl:pl-48">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight">
            Ready to Experience
            <br />
            <span
              className="block mt-3 bg-clip-text text-transparent
                 bg-gradient-to-r from-white via-gray-200 to-red-100
                 [webkit-background-clip:text] [webkit-text-fill-color:transparent]"
              style={{
                backgroundImage: 'linear-gradient(to right, #ffffff, #e5e7eb, #fca5a5)',
              }}
            >
              <span className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] font-black">
                the Difference?
              </span>
            </span>
          </h1>
        </div>

        <div className="absolute bottom-12 right-12 md:bottom-20 md:right-20 lg:bottom-24 lg:right-32 pointer-events-auto">
          <motion.a
            href="https://wa.me/916305339775?text=Hi%20Zaneta%2C%20I'm%20looking%20for%20help." 
            target="_blank"
            whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-6 bg-white text-[#db0000] font-bold text-xl md:text-2xl rounded-full shadow-2xl flex items-center gap-4 tracking-wide hover:bg-gray-50 transition-all"
          >
            Book A Maid
            <ArrowRight size={32} strokeWidth={2.5} />
          </motion.a>
        </div>
      </motion.div>

      <div className="h-[450vh] bg-white" />
    </section>
  )
}


/* ==================== MOBILE – UNCHANGED & WORKING ==================== */
/* ==================== MOBILE VERSION — Red screen only on button click ==================== */
function MobileVersion() {
  const dragX = useMotionValue(0)
  const controls = useAnimationControls()
  const CARD_WIDTH = 312

  const [showTakeover, setShowTakeover] = useState(false)

  const handleDragEnd = () => {
    const current = dragX.get()
    let index = Math.round(-current / CARD_WIDTH)
    index = Math.max(0, Math.min(index, servicesList.length - 1))
    const snapTo = -index * CARD_WIDTH
    controls.start({
      x: snapTo,
      transition: { type: "spring", stiffness: 300, damping: 32 }
    })
  }

  return (
    <section className="relative bg-white overflow-hidden">

      {/* ================= RED TAKEOVER SCREEN ================= */}
      <motion.div
        animate={{ opacity: showTakeover ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-0 bg-[#db0000] z-[70] ${showTakeover ? "pointer-events-auto" : "pointer-events-none"}`}
      />

      {/* ================= TAKEOVER CONTENT ================= */}
      <motion.div
        animate={{ opacity: showTakeover ? 1 : 0, scale: showTakeover ? 1 : 0.95 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="fixed inset-0 z-[80] flex flex-col justify-center items-center px-6"
        style={{ pointerEvents: showTakeover ? "auto" : "none" }}
      >
        <h1 className="text-white text-4xl font-black text-center leading-tight">
          Ready to Experience
          <br />
          <span className="block text-5xl mt-2">the Difference?</span>
        </h1>

        {/* BOOK A MAID BUTTON (WhatsApp) */}
        <a
          href="https://wa.me/916305339775?text=Hi%20Zaneta%2C%20I'm%20looking%20for%20help."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-10 py-4 bg-white text-[#db0000] rounded-full font-bold text-lg shadow-xl"
        >
          Book A Maid →
        </a>

        {/* CLOSE BUTTON (Top Right) */}
        <button
          onClick={() => setShowTakeover(false)}
          className="absolute top-6 right-6 text-white text-3xl font-bold"
        >
          ×
        </button>
      </motion.div>

      {/* ================= NORMAL CONTENT ================= */}
      <div className="text-center pt-12 pb-8 px-6 relative z-10">
        <span className="inline-block px-6 py-2 rounded-full bg-red-500/10 text-red-600 font-bold text-sm mb-3">
          OUR SERVICES
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
          We Take Care Of
          <span className="block text-red-600 mt-2">Everything</span>
        </h2>
      </div>

      {/* CAROUSEL */}
      <div className="flex-1 px-4 relative z-10">
        <motion.div
          className="flex gap-6"
          drag="x"
          dragConstraints={{
            left: -CARD_WIDTH * (servicesList.length - 1),
            right: 0,
          }}
          dragElastic={0.15}
          style={{ x: dragX }}
          animate={controls}
          onDragEnd={handleDragEnd}
        >
          {servicesList.map((service) => (
            <ServiceCard key={service.title} {...service} isMobile />
          ))}
        </motion.div>
      </div>

      {/* BUTTON TRIGGERS TAKEOVER */}
      <div className="text-center py-8 px-6 relative z-10">
        <button
          onClick={() => setShowTakeover(true)}
          className="px-10 py-6 bg-red-600 text-white font-bold text-lg rounded-full shadow-xl"
        >
          Get Started Today
        </button>
      </div>
    </section>
  )
}


/* ==================== SERVICE CARD – UNCHANGED & BEAUTIFUL ==================== */
function ServiceCard({ image, title, desc, info, gradient, isMobile = false }: any) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: isMobile ? -8 : -10, scale: isMobile ? 1.03 : 1.06 }}
      whileTap={{ scale: 0.96 }}
      className={`flex-shrink-0 ${isMobile ? 'w-72' : 'w-80'} cursor-pointer`}
      onClick={() => setFlipped((s) => !s)}
    >
      <div
        className={`relative ${isMobile ? 'h-72' : 'h-80'} rounded-3xl overflow-hidden shadow-lg cursor-pointer`}
        style={{ perspective: 1200 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ rotateY: flipped ? 180 : 0, opacity: flipped ? 0 : 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 180, damping: 28 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover brightness-90"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-[#db0000] flex items-center justify-center p-8 rounded-3xl"
          animate={{ rotateY: flipped ? 0 : -180, opacity: flipped ? 1 : 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 180, damping: 28 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center text-white">
            <h4 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
              {title}
            </h4>
            <p className="text-sm md:text-base leading-relaxed opacity-95 max-w-xs mx-auto">
              {info}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-5 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          {title}
        </h3>
      </div>
    </motion.div>
  )
}