import {
    Wheat,
    TrendingUp,
    CalendarDays,
    IndianRupee
} from "lucide-react";

export default function YieldSummary() {

    const cards = [

        {
            title: "Expected Yield",
            value: "5.8 Tons",
            icon: <Wheat className="text-yellow-400" size={34} />,
            color: "from-yellow-500 to-orange-500"
        },

        {
            title: "AI Confidence",
            value: "97%",
            icon: <TrendingUp className="text-green-400" size={34} />,
            color: "from-green-500 to-emerald-500"
        },

        {
            title: "Harvest Date",
            value: "18 Aug",
            icon: <CalendarDays className="text-cyan-400" size={34} />,
            color: "from-cyan-500 to-blue-500"
        },

        {
            title: "Estimated Revenue",
            value: "₹1.92L",
            icon: <IndianRupee className="text-purple-400" size={34} />,
            color: "from-purple-500 to-pink-500"
        }

    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {

                cards.map((card,index)=>(

                    <div
                        key={index}
                        className="rounded-3xl bg-[#111827] border border-white/10 p-6 hover:scale-105 transition-all duration-300 shadow-xl"
                    >

                        <div className="flex justify-between items-center">

                            {card.icon}

                            <div className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${card.color}`}>

                                LIVE

                            </div>

                        </div>

                        <p className="text-gray-400 mt-6">

                            {card.title}

                        </p>

                        <h1 className="text-4xl font-bold mt-2">

                            {card.value}

                        </h1>

                    </div>

                ))

            }

        </div>

    );

}