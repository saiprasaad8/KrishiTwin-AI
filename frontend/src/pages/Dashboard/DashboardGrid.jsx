import DashboardCards from "./DashboardCards";
import { useDashboard } from "../../context/DashboardContext";

export default function DashboardGrid() {

    const { dashboard, loading } = useDashboard();

    if (loading) {
        return (
            <div className="text-white text-xl">
                Loading Dashboard...
            </div>
        );
    }

    const cards = [

        {
            title: "Crop Health",
            value: `${dashboard.farmHealth}%`,
            subtitle: "Overall Farm Health",
            change: "Healthy & Stable",
            color: "green",
            icon: "🌾",
        },

        {
            title: "Temperature",
            value: `${dashboard.temperature}°C`,
            subtitle: "Current Temperature",
            change: "Live Weather",
            color: "cyan",
            icon: "🌡️",
        },

        {
            title: "Soil Moisture",
            value: `${dashboard.soilMoisture}%`,
            subtitle: "Current Moisture",
            change: "Irrigation Active",
            color: "blue",
            icon: "💧",
        },

        {
            title: "AI Confidence",
            value: `${dashboard.aiConfidence}%`,
            subtitle: "Prediction Accuracy",
            change: "Snapdragon AI",
            color: "lime",
            icon: "🤖",
        },

    ];

    return (

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            {

                cards.map((card, index) => (

                    <DashboardCards

                        key={index}

                        {...card}

                    />

                ))

            }

        </section>

    );

}