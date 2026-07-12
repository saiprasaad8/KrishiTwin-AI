import os
import base64

from sarvamai import SarvamAI
from config.settings import SARVAM_API_KEY

client = SarvamAI(
    api_subscription_key=SARVAM_API_KEY
)


def text_to_speech(text: str):

    try:

        response = client.text_to_speech.convert(
            text=text,
            target_language_code="en-IN",
            speaker="anushka"
        )

        os.makedirs("output", exist_ok=True)

        output_path = "output/reply.wav"

        audio_data = "".join(response.audios)

        with open(output_path, "wb") as f:
            f.write(base64.b64decode(audio_data))

        print("✅ Audio Saved:", output_path)

        return output_path

    except Exception as e:
        print("TTS Error:", e)
        return None