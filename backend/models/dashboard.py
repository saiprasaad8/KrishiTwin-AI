from pydantic import BaseModel


class DashboardResponse(BaseModel):
    farmHealth: int
    temperature: int
    humidity: int
    soilMoisture: int
    yieldPrediction: str
    aiConfidence: int
    digitalTwin: str