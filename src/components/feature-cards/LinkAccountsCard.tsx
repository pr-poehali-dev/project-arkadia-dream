import { MapPin, ArrowUpRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const zones = [
  { name: "СНТ Лесная поляна", info: "Московская обл., Дмитровский р-н", status: "Подключено", color: "bg-emerald-600" },
  { name: "КП Солнечный берег", info: "Московская обл., Серпуховский р-н", status: "Подключено", color: "bg-emerald-600" },
  { name: "Дачный посёлок Ромашка", info: "Тверская обл., Конаковский р-н", status: "В процессе", color: "bg-amber-600" },
  { name: "СНТ Берёзка", info: "Московская обл., Рузский р-н", status: "Скоро", color: "bg-violet-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <MapPin className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Зоны покрытия</h3>
      <p className="mb-4 text-sm text-gray-400">Охватываем дачные посёлки и СНТ в Московской и соседних областях — карта расширяется каждый месяц</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Смотреть карту <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {zones.map((zone, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <div className={`h-9 w-9 rounded-full ${zone.color} flex items-center justify-center text-white text-xs font-bold`}>
                {zone.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{zone.name}</p>
                <p className="text-xs text-gray-500">{zone.info}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{zone.status}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Проверить мой адрес
        </Button>
      </div>
    </div>
  )
}