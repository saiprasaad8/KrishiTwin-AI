from fastapi import APIRouter, UploadFile, File
from services.pipeline import voice_pipeline

router = APIRouter()

@router.post("/voice")
async def voice_chat(audio: UploadFile = File(...)):
    return await voice_pipeline(audio)