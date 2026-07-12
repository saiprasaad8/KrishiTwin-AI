from pydantic import BaseModel


class WeatherResponse(BaseModel):
    city: str
    temperature: float
    humidity: int
    windSpeed: float
    description: str
    icon: str