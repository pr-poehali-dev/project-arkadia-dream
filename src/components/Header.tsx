import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <DachaWifiLogo />
        <span className="text-lg font-semibold text-white">
          ДачаСеть<sup className="text-xs">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Услуги
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Тарифы <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Зона покрытия
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Отзывы
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Оставить заявку
      </Button>
    </header>
  )
}

function DachaWifiLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5C8.5 5 5.3 6.5 3 9l1.5 1.5C6.3 8.4 9 7 12 7s5.7 1.4 7.5 3.5L21 9c-2.3-2.5-5.5-4-9-4z" fill="#8B5CF6" />
      <path d="M12 9c-2.5 0-4.7 1-6.3 2.7l1.5 1.5C8.3 11.8 10 11 12 11s3.7.8 4.8 2.2l1.5-1.5C16.7 10 14.5 9 12 9z" fill="#8B5CF6" opacity="0.7" />
      <path d="M12 13c-1.3 0-2.4.5-3.2 1.4l1.5 1.5c.4-.5 1-.9 1.7-.9s1.3.4 1.7.9l1.5-1.5C14.4 13.5 13.3 13 12 13z" fill="#8B5CF6" opacity="0.5" />
      <circle cx="12" cy="19" r="1.5" fill="#8B5CF6" />
    </svg>
  )
}