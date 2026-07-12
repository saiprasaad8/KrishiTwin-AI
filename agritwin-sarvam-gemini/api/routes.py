from fastapi import APIRouter
from services.gemini_service import ask_gemini

router = APIRouter()

@router.get("/chat")
def chat(question: str):
    answer = ask_gemini(question)

    return {
        "question": question,
        "answer": answer
    }