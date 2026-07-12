from sarvamai import SarvamAI
from config.settings import SARVAM_API_KEY

try:
    client = SarvamAI(
        api_subscription_key=SARVAM_API_KEY
    )

    print("✅ Sarvam Connected Successfully!")

except Exception as e:
    print("❌ Error:", e)