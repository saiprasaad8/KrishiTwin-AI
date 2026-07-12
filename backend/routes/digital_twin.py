from fastapi import APIRouter

from services.digital_twin_service import get_digital_twin

router = APIRouter(
    prefix="/digital-twin",
    tags=["Digital Twin"]
)

@router.get("/")
def digital_twin():

    return get_digital_twin()