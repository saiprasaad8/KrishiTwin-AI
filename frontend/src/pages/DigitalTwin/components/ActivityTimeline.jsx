import {
    Activity,
    CloudRain,
    Leaf,
    Cpu
} from "lucide-react";

export default function ActivityTimeline() {

    const timeline = [

        {
            time: "08:00 AM",
            title: "Sensors Connected",
            desc: "All IoT sensors synchronized successfully.",
            icon: <Activity className="text-green-400" size={20} />
        },

        {
            time: "09:15 AM",
            title: "Weather Updated",
            desc: "Rain expected within next 24 hours.",
            icon: <CloudRain className="text-blue-400" size={20} />
        },

        {
            time: "11:40 AM",
            title: "Disease Scan Completed",
            desc: "Leaf appears healthy with 99% confidence.",
            icon: <Leaf className="text-green-400" size={20} />
        },

        {
            time: "12:20 PM",
            title: "AI Recommendation",
            desc: "Reduce irrigation by 10% today.",
            icon: <Cpu className="text-purple-400" size={20} />
        }

    ];

    return (

        <div className="rounded-3xl bg-[#111827] border border-white/10 p-8">

            <h2 className="text-2xl font-bold mb-8">

                Activity Timeline

            </h2>

            <div className="space-y-6">

                {

                    timeline.map((item,index)=>(

                        <div
                            key={index}
                            className="flex gap-5"
                        >

                            <div className="flex flex-col items-center">

                                <div className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center">

                                    {item.icon}

                                </div>

                                {

                                    index!==timeline.length-1 &&

                                    <div className="w-[2px] h-14 bg-white/10 mt-2"></div>

                                }

                            </div>

                            <div>

                                <h3 className="font-semibold text-lg">

                                    {item.title}

                                </h3>

                                <p className="text-gray-400 text-sm">

                                    {item.time}

                                </p>

                                <p className="text-gray-300 mt-2">

                                    {item.desc}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}