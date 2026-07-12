import os

from services.sarvam_stt import speech_to_text
from services.gemini_service import ask_gemini
from services.sarvam_tts import text_to_speech

UPLOAD_FOLDER = "uploads"


async def voice_pipeline(audio):

    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    filepath = os.path.join(UPLOAD_FOLDER, audio.filename)

    with open(filepath, "wb") as f:
        f.write(await audio.read())

    print("🎤 Audio Saved:", filepath)

    text = speech_to_text(filepath)

    print("Recognized:", text)

    answer = ask_gemini(text)

    print("Gemini:", answer)

    output_audio = text_to_speech(answer)

    return {

    "recognized_text": text,

    "answer": answer,

    "audio_url": f"http://127.0.0.1:8001/{output_audio}"

}