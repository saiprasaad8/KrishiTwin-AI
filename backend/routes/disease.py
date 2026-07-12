from fastapi import APIRouter, UploadFile, File

from models.disease import DiseaseResponse
from services.disease_service import detect_disease

router = APIRouter(
    prefix="/disease",
    tags=["Disease Detection"]
)

@router.post("/", response_model=DiseaseResponse)
async def disease(file: UploadFile = File(...)):

    result = await detect_disease(file)

    return result