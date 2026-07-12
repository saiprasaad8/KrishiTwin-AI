import {
    CloudRain,
    Droplets,
    Leaf,
    Sun,
    Brain
} from "lucide-react";

export default function YieldFactors() {

    const factors = [

        {
            title: "Weather",
            value: "Excellent",
            percent: 92,
            icon: <CloudRain className="text-blue-400" size={24} />,
            color: "bg-blue-500"
        },

        {
            title: "Soil Moisture",
            value: "68%",
            percent: 68,
            icon: <Droplets className="text-cyan-400" size={24} />,
            color: "bg-cyan-500"
        },

        {
            title: "Crop Health",
            value: "Healthy",
            percent: 95,
            icon: <Leaf className="text-green-400" size={24} />,
            color: "bg-green-500"
        },

        {
            title: "Sunlight",
            value: "7.8 hrs/day",
            percent: 82,
            icon: <Sun className="text-yellow-400" size={24} />,
            color: "bg-yellow-500"
        },

        {
            title: "AI Confidence",
            value: "97%",
            percent: 97,
            icon: <Brain className="text-purple-400" size={24} />,
            color: "bg-purple-500"
        }

    ];

    return (

        <div className="rounded-3xl bg-[#111827] border border-white/10 p-8 shadow-xl">

            <h2 className="text-2xl font-bold">

                AI Prediction Factors

            </h2>

            <p className="text-gray-400 mt-2 mb-8">

                Parameters influencing the predicted harvest.

            </p>

            <div className="space-y-6">

                {

                    factors.map((factor,index)=>(

                        <div key={index}>

                            <div className="flex justify-between items-center mb-2">

                                <div className="flex items-center gap-3">

                                    {factor.icon}

                                    <span className="font-medium">

                                        {factor.title}

                                    </span>

                                </div>

                                <span className="text-gray-300">

                                    {factor.value}

                                </span>

                            </div>

                            <div className="w-full h-3 rounded-full bg-gray-700">

                                <div

                                    className={`${factor.color} h-3 rounded-full transition-all duration-500`}

                                    style={{

                                        width: `${factor.percent}%`

                                    }}

                                ></div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}