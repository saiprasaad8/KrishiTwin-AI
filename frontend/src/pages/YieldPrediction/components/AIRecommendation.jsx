import {
    Bot,
    Wheat,
    CalendarDays,
    Droplets,
    Sprout,
    ShieldCheck,
    IndianRupee
} from "lucide-react";

export default function AIRecommendation() {

    const recommendations = [
        {
            icon: <Wheat className="text-yellow-400" size={22} />,
            title: "Expected Yield",
            value: "5.8 Tons"
        },
        {
            icon: <CalendarDays className="text-cyan-400" size={22} />,
            title: "Harvest Window",
            value: "18 - 22 August"
        },
        {
            icon: <Droplets className="text-blue-400" size={22} />,
            title: "Irrigation",
            value: "Reduce watering by 10%"
        },
        {
            icon: <Sprout className="text-green-400" size={22} />,
            title: "Fertilizer",
            value: "Apply Nitrogen next week"
        },
        {
            icon: <ShieldCheck className="text-emerald-400" size={22} />,
            title: "Disease Risk",
            value: "LOW"
        },
        {
            icon: <IndianRupee className="text-purple-400" size={22} />,
            title: "Estimated Revenue",
            value: "₹1.92 Lakhs"
        }
    ];

    return (
        <div className="rounded-3xl bg-[#111827] border border-white/10 p-8 shadow-xl">

            <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">

                    <Bot size={30} />

                </div>

                <div>

                    <h2 className="text-2xl font-bold">
                        AI Recommendation
                    </h2>

                    <p className="text-gray-400">
                        Generated using Digital Twin Analytics
                    </p>

                </div>

            </div>

            <div className="space-y-4">

                {recommendations.map((item, index) => (

                    <div
                        key={index}
                        className="flex justify-between items-center bg-[#0B1220] border border-white/10 rounded-2xl p-5"
                    >

                        <div className="flex items-center gap-4">

                            {item.icon}

                            <span>{item.title}</span>

                        </div>

                        <span className="font-bold text-green-400">
                            {item.value}
                        </span>

                    </div>

                ))}

            </div>

        </div>
    );
}