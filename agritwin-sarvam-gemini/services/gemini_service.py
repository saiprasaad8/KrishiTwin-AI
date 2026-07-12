from google import genai

from config.settings import GEMINI_API_KEY
from config.prompts import SYSTEM_PROMPT

client = genai.Client(api_key=GEMINI_API_KEY)

def ask_gemini(question: str):
    try:
        prompt = f"""
{SYSTEM_PROMPT}

Farmer Question:
{question}
"""

        response = client.models.generate_content(
            model="gemini-3.5-flash",
            contents=prompt
        )

        print("=== RESPONSE ===")
        print(response)

        return response.text

    except Exception as e:
        print("===== GEMINI ERROR =====")
        print(e)
        raise