import { useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import UploadCard from "./components/UploadCard";
import PredictionCard from "./components/PredictionCard";
import RecentScans from "./components/RecentScans";
import AITips from "./components/AITips";

export default function DiseaseDetection() {

    const [prediction, setPrediction] = useState(null);

    return (

        <MainLayout>

            <div className="space-y-8">

                <div>

                    <h1 className="text-4xl font-bold">

                        Disease Detection

                    </h1>

                    <p className="text-gray-400 mt-2">

                        Upload a crop leaf image for AI-powered disease diagnosis.

                    </p>

                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    <UploadCard

                        setPrediction={setPrediction}

                    />

                    <PredictionCard

                        prediction={prediction}

                    />

                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    <RecentScans />

                    <AITips />

                </div>

            </div>

        </MainLayout>

    );

}