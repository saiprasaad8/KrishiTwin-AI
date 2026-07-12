from sarvamai import SarvamAI
from config.settings import SARVAM_API_KEY

client = SarvamAI(
    api_subscription_key=SARVAM_API_KEY
)


def speech_to_text(audio_path: str):

    try:

        with open(audio_path, "rb") as audio_file:

            response = client.speech_to_text.transcribe(
                file=audio_file
            )

        # Print complete response once for debugging
        print("===== SARVAM STT RESPONSE =====")
        print(response)

        # Extract transcript
        if hasattr(response, "transcript"):
            return response.transcript

        elif hasattr(response, "text"):
            return response.text

        elif isinstance(response, dict):
            return (
                response.get("transcript")
                or response.get("text")
                or str(response)
            )

        return str(response)

    except Exception as e:
        print("STT Error:", e)
        return "Unable to recognize speech."