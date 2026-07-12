from pydantic import BaseModel

class DiseaseResponse(BaseModel):

    disease: str

    confidence: float

    severity: str

    recommendation: str