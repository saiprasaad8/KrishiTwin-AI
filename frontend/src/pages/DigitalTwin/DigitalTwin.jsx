import MainLayout from "../../layouts/MainLayout";

import FarmStatus from "./components/FarmStatus";
import FarmGrid from "./components/FarmGrid";
import SensorCards from "./components/SensorCards";
import ActivityTimeline from "./components/ActivityTimeline";

export default function DigitalTwin() {

    return (

        <MainLayout>

            <div className="space-y-8">

                <div>

                    <h1 className="text-4xl font-bold">

                        🌱 Digital Twin

                    </h1>

                    <p className="text-gray-400 mt-2">

                        Real-Time AI-powered virtual representation of your farm.

                    </p>

                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                    <FarmStatus />

                    <FarmGrid />

                </div>

                <SensorCards />

                <ActivityTimeline />

            </div>

        </MainLayout>

    );

}