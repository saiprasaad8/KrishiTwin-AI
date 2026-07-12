from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.disease import router as disease_router
from routes.dashboard import router as dashboard_router
from routes.weather import router as weather_router
from routes.digital_twin import router as digital_twin_router
app = FastAPI(
    title="KrishiTwin AI Backend",
    version="1.0.0"
)
app.include_router(disease_router)
app.include_router(digital_twin_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dashboard_router)
app.include_router(weather_router)

@app.get("/")
def home():
    return {"message": "KrishiTwin AI Backend Running 🚀"}