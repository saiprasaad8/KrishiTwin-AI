@echo off
title KrishiTwin AI Launcher
color 0A

echo ==========================================
echo        Starting KrishiTwin AI...
echo ==========================================
echo.

echo [1/3] Starting Main Backend...
start /min "Backend" cmd /k "call venv\Scripts\activate && cd backend && uvicorn app:app --reload"

timeout /t 3 >nul

echo [2/3] Starting AI Backend...
start /min "AI Backend" cmd /k "call venv\Scripts\activate && cd agritwin-sarvam-gemini && uvicorn app:app --reload --port 8001"

timeout /t 3 >nul

echo [3/3] Starting Frontend...
start /min "Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo Waiting for services to start...
timeout /t 8 >nul

start http://localhost:5173/dashboard

echo.
echo ==========================================
echo     KrishiTwin AI Started Successfully!
echo ==========================================
echo.
echo Backend   : http://127.0.0.1:8000/docs
echo AI Server : http://127.0.0.1:8001/docs
echo Frontend  : http://localhost:5173/dashboard
echo ==========================================
echo.

pause