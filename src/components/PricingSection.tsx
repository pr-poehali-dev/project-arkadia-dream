import { ArrowUpRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Сезонный",
    description: "Только в дачный сезон",
    price: "от 9 000 ₽",
    period: "разовая установка",
    features: [
      "Установка оборудования",
      "Настройка WiFi-роутера",
      "Скорость до 50 Мбит/с",
      "Зона покрытия до 100 м²",
    ],
    cta: "Узнать точную цену",
    highlighted: false,
  },
  {
    name: "Стандарт",
    description: "Самый популярный выбор",
    price: "от 9 000 ₽",
    period: "установка + поддержка",
    features: [
      "Всё из «Сезонного»",
      "Скорость до 100 Мбит/с",
      "Зона покрытия до 200 м²",
      "Техподдержка 24/7",
      "Гарантия 1 год",
    ],
    cta: "Узнать точную цену",
    highlighted: true,
  },
  {
    name: "Премиум",
    description: "Для большого участка",
    price: "от 9 000 ₽",
    period: "установка + поддержка",
    features: [
      "Всё из «Стандарта»",
      "Скорость до 300 Мбит/с",
      "Покрытие всего участка",
      "Несколько точек доступа",
      "Приоритетная поддержка",
    ],
    cta: "Узнать точную цену",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section className="px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Тарифы</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Цены от 9 000 ₽ — точная стоимость зависит от вашего участка. Напишите нам, и мы рассчитаем индивидуально.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 flex flex-col ${
                plan.highlighted
                  ? "bg-violet-600/10 border-violet-500/50"
                  : "bg-[#141414] border-[#262626]"
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4">
                  <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-400">
                    Популярный
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <p className="text-xs text-gray-500 mt-1">{plan.period}</p>
              </div>

              <ul className="space-y-2 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="h-4 w-4 text-violet-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={
                  plan.highlighted
                    ? "rounded-full bg-violet-600 hover:bg-violet-700 text-white"
                    : "rounded-full bg-[#1f1f1f] border border-[#333] text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
                }
              >
                <a href="https://t.me/vladislav3574" target="_blank" rel="noreferrer">
                  {plan.cta} <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
