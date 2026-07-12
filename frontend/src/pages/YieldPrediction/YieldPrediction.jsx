import MainLayout from "../../layouts/MainLayout";

import YieldSummary from "./components/YieldSummary";
import YieldChart from "./components/YieldChart";
import YieldFactors from "./components/YieldFactors";
import AIRecommendation from "./components/AIRecommendation";

export default function YieldPrediction() {

    return (

        <MainLayout>

            <div className="space-y-8">

                <div>

                    <h1 className="text-4xl font-bold">

                        🌾 Yield Prediction

                    </h1>

                    <p className="text-gray-400 mt-2">

                        AI-powered harvest estimation using weather, soil and crop analytics.

                    </p>

                </div>

                <YieldSummary />

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    <YieldChart />

                    <YieldFactors />

                </div>

                <AIRecommendation />

            </div>

        </MainLayout>

    );

}