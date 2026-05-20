import { PhoneCall, ArrowUpRight, Send } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import func2url from "../../../backend/func2url.json"

export function SendFundsCard() {
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [weekend, setWeekend] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    if (!phone.trim()) {
      setError("Укажите номер телефона")
      return
    }
    setError("")
    setLoading(true)
    try {
      const res = await fetch(func2url["send-lead"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, address, weekend }),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError("Ошибка отправки. Попробуйте ещё раз.")
      }
    } catch {
      setError("Ошибка сети. Попробуйте ещё раз.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <PhoneCall className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Оставить заявку</h3>
      <p className="mb-4 text-sm text-gray-400">Заполните форму — наш мастер свяжется в течение часа и согласует удобное время установки</p>

      <a href="https://t.me/vladislav3574" target="_blank" rel="noreferrer" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Написать в Telegram <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      {sent ? (
        <div className="mt-auto rounded-xl bg-[#1a1a1a] border border-[#262626] p-8 flex flex-col items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/20">
            <Send className="h-5 w-5 text-violet-400" />
          </div>
          <p className="text-white font-medium text-center">Заявка отправлена!</p>
          <p className="text-sm text-gray-400 text-center">Мы свяжемся с вами в Telegram в течение часа</p>
        </div>
      ) : (
        <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
          <div>
            <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
              Ваш номер телефона <span className="text-violet-400">*</span>
            </label>
            <div className="flex items-center rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
              <span className="text-gray-500 mr-2">+7</span>
              <input
                type="text"
                placeholder="(999) 000-00-00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
              Адрес участка
            </label>
            <div className="relative">
              <textarea
                placeholder="Посёлок, улица, номер участка..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none resize-none h-16"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Нужна установка в выходной день</span>
            <Switch
              checked={weekend}
              onCheckedChange={setWeekend}
              className="data-[state=checked]:bg-violet-600"
            />
          </div>

          {error && <p className="text-xs text-red-400">{error}</p>}

          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white"
          >
            {loading ? "Отправляем..." : "Отправить заявку"}
          </Button>
        </div>
      )}
    </div>
  )
}