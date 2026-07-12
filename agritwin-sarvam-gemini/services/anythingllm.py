import os
import requests

from dotenv import load_dotenv

load_dotenv()

BASE_URL = os.getenv("ANYTHINGLLM_API")
API_KEY = os.getenv("ANYTHINGLLM_KEY")
WORKSPACE = os.getenv("WORKSPACE")


def ask_anythingllm(question):

    url = f"{BASE_URL}/v1/workspace/{WORKSPACE}/chat"

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "message": question,
        "mode": "query"
    }

    response = requests.post(
        url,
        headers=headers,
        json=payload
    )

    if response.status_code == 200:

        data = response.json()

        return data["textResponse"]

    return ""