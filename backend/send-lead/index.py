import json
import os
import urllib.request
import urllib.parse

TELEGRAM_CHAT_ID = "658963042"


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в Telegram-бот владельца."""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    phone = body.get("phone", "").strip()
    address = body.get("address", "").strip()
    weekend = body.get("weekend", False)

    if not phone:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "Укажите номер телефона"}, ensure_ascii=False),
        }

    weekend_text = "✅ Нужна установка в выходной день" if weekend else "📅 Будний день"

    message = (
        "🌐 *Новая заявка с сайта ДачаСеть*\n\n"
        f"📞 Телефон: `{phone}`\n"
        f"📍 Адрес: {address or 'не указан'}\n"
        f"{weekend_text}"
    )

    token = os.environ["TELEGRAM_BOT_TOKEN"]
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = urllib.parse.urlencode({
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message,
        "parse_mode": "Markdown",
    }).encode()

    req = urllib.request.Request(url, data=data, method="POST")
    with urllib.request.urlopen(req) as resp:
        resp.read()

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"ok": True}),
    }