import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import DigitalTwin from "../pages/DigitalTwin/DigitalTwin";
import DiseaseDetection from "../pages/DiseaseDetection/DiseaseDetection";
import YieldPrediction from "../pages/YieldPrediction/YieldPrediction";
import Weather from "../pages/Weather/Weather";
import AIAssistant from "../pages/AIAssistant/AIAssistant";
import Reports from "../pages/Reports/Reports";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/digital-twin" element={<DigitalTwin />} />
      <Route path="/disease-detection" element={<DiseaseDetection />} />
      <Route path="/yield-prediction" element={<YieldPrediction />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/ai-assistant" element={<AIAssistant />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}