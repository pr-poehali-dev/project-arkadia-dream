import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const photos = [
  {
    src: "https://cdn.poehali.dev/projects/00eb0ecb-730b-475c-a20e-ab0fae2222de/files/ee79383e-0537-4e44-a192-b7d6e0194910.jpg",
    alt: "Установка антенны на даче",
  },
  {
    src: "https://cdn.poehali.dev/projects/00eb0ecb-730b-475c-a20e-ab0fae2222de/files/42d7cd71-6b47-42cf-88f7-aa7b092b82ca.jpg",
    alt: "Семья пользуется интернетом на даче",
  },
  {
    src: "https://cdn.poehali.dev/projects/00eb0ecb-730b-475c-a20e-ab0fae2222de/files/23810dd7-323c-4a0d-baf5-32a99ed8099a.jpg",
    alt: "Мастер устанавливает оборудование",
  },
]

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-2">
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">ВЫГОДНО</span>
        <span className="text-gray-300">Подключение за 1 день — без прокладки кабелей</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
        Быстрый интернет на вашей даче
      </h1>

      <p className="mb-8 max-w-xl text-gray-400">Устанавливаем WiFi на дачных участках — стабильный сигнал, доступные тарифы и поддержка 24/7.</p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
        <Button asChild className="rounded-full bg-violet-600 px-6 hover:bg-violet-700 text-white">
          <a href="https://t.me/vladislav3574" target="_blank" rel="noreferrer">
            Заказать подключение <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800">
          <Play className="mr-2 h-4 w-4 fill-violet-500 text-violet-500" /> Как это работает
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full">
        {photos.map((photo, i) => (
          <div key={i} className="rounded-2xl overflow-hidden border border-[#262626] aspect-video md:aspect-square">
            <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}