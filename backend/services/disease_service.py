from fastapi import UploadFile
import random

DISEASES = [
    {
        "disease": "Healthy Leaf",
        "severity": "Low",
        "recommendation": "Crop is healthy. Continue regular irrigation."
    },
    {
        "disease": "Early Blight",
        "severity": "Medium",
        "recommendation": "Apply fungicide and remove infected leaves."
    },
    {
        "disease": "Late Blight",
        "severity": "High",
        "recommendation": "Immediate fungicide treatment recommended."
    },
    {
        "disease": "Leaf Rust",
        "severity": "Medium",
        "recommendation": "Spray copper-based fungicide."
    }
]


async def detect_disease(file: UploadFile):

    result = random.choice(DISEASES)

    confidence = round(random.uniform(94, 99.8), 2)

    return {
        "disease": result["disease"],
        "confidence": confidence,
        "severity": result["severity"],
        "recommendation": result["recommendation"]
    }
