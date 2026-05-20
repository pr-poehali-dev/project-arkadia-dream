import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { PricingSection } from "@/components/PricingSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <PricingSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        От замера сигнала до подключения «под ключ» —{" "}
        <span className="font-medium text-white">интернет на даче без лишних хлопот.</span>
      </footer>
    </main>
  )
}