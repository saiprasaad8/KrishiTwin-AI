import requests

from config import OPENWEATHER_API_KEY


BASE_URL = "https://api.openweathermap.org/data/2.5/weather"


def get_weather(city: str):

    params = {

        "q": city,

        "appid": OPENWEATHER_API_KEY,

        "units": "metric"

    }

    response = requests.get(BASE_URL, params=params)

    data = response.json()

    return {

        "city": data["name"],

        "temperature": data["main"]["temp"],

        "humidity": data["main"]["humidity"],

        "windSpeed": data["wind"]["speed"],

        "description": data["weather"][0]["description"],

        "icon": data["weather"][0]["icon"]

    }