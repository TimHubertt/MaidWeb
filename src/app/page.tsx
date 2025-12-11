import About from "@/components/About"
import BenefitsForHouseholds from "@/components/BenefitsForHouseholds"
import Hero from "@/components/Hero"
import Maids from "@/components/Maids"
import Navbar from "@/components/Navbar"
import ServicesMarquee from "@/components/ServicesMarquee"
import Frequent from "@/components/Frequent"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main 
      className="relative min-h-screen " 
     
    >
      <Navbar />
      <Hero /> 
      <About />
      <BenefitsForHouseholds />
      <ServicesMarquee />
      <Maids />
      <Frequent />
      <Footer/>
    </main>
  )
}