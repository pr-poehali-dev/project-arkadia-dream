import { Wifi, Trees, Home, Shield, Zap, Sun, MapPin } from "lucide-react"

const partners = [
  { name: "СНТ Лесная", icon: Trees },
  { name: "Дачный посёлок Ромашка", icon: Home },
  { name: "КП Солнечный", icon: Sun },
  { name: "СНТ Берёзка", icon: MapPin },
  { name: "Коттеджный городок", icon: Shield },
  { name: "Садовый кооператив", icon: Zap },
  { name: "Дачный союз", icon: Wifi },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {partners.map((partner) => (
        <div key={partner.name} className="flex items-center gap-2 text-gray-500">
          <partner.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{partner.name}</span>
        </div>
      ))}
    </section>
  )
}