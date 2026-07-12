from fastapi import APIRouter

from models.weather import WeatherResponse

from services.weather_service import get_weather

router = APIRouter(

    prefix="/weather",

    tags=["Weather"]

)


@router.get("/{city}", response_model=WeatherResponse)

def weather(city: str):

    return get_weather(city)