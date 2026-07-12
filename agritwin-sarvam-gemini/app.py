from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.voice import router as voice_router
from api.routes import router
from fastapi.staticfiles import StaticFiles

app = FastAPI(
    title="AgriTwin AI",
    version="1.0"
)
app.mount("/output", StaticFiles(directory="output"), name="output")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
app.include_router(voice_router)
@app.get("/")
def home():
    return {
        "message":"AgriTwin AI API Running"
    }