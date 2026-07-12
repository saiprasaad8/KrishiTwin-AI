import {
    Thermometer,
    Droplets,
    Leaf,
    Brain
} from "lucide-react";

export default function SensorCards() {

    const sensors = [
        {
            title: "Temperature",
            value: "29°C",
            icon: <Thermometer className="text-orange-400" size={28} />,
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Soil Moisture",
            value: "68%",
            icon: <Droplets className="text-cyan-400" size={28} />,
            color: "from-cyan-500 to-blue-500"
        },
        {
            title: "Crop Health",
            value: "92%",
            icon: <Leaf className="text-green-400" size={28} />,
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "AI Confidence",
            value: "97%",
            icon: <Brain className="text-purple-400" size={28} />,
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {

                sensors.map((sensor, index) => (

                    <div
                        key={index}
                        className="rounded-3xl bg-[#111827] border border-white/10 p-6 hover:scale-105 transition-all duration-300"
                    >

                        <div className="flex justify-between items-center">

                            {sensor.icon}

                            <span
                                className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${sensor.color}`}
                            >
                                LIVE
                            </span>

                        </div>

                        <h3 className="text-gray-400 mt-5">

                            {sensor.title}

                        </h3>

                        <h1 className="text-4xl font-bold mt-2">

                            {sensor.value}

                        </h1>

                    </div>

                ))

            }

        </div>

    );

}